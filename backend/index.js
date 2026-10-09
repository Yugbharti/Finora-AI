require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const validator = require("validator");

const port = process.env.PORT || 3001;
const url = process.env.MONGO_URL || "mongodb://localhost:27017/finora";

const { HoldingsModel } = require("./models/holdings");
const { PosModel } = require("./models/positions");
const { OrdersModel } = require("./models/orders");
const { UserModel } = require("./models/users");

// In-memory store; replace with Redis in prod
const otpStore = new Map(); // key: email -> { otp, expiresAt, attempts, lastSent }

const app = express();

// CORS: restrict origin in production
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "*",
  optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "Secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // true only over HTTPS
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Mongo connection error:", err);
    process.exit(1);
  });

// Basic rate limiter for OTP sending: max 5 per hour per IP
const sendOtpLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many OTP requests from this IP, try again later." },
});

// Utility
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Nodemailer transporter (make sure credentials are valid)
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Clean up expired OTPs periodically (optional)
setInterval(() => {
  const now = Date.now();
  for (const [email, record] of otpStore.entries()) {
    if (record.expiresAt <= now) {
      otpStore.delete(email);
    }
  }
}, 60 * 1000); // every minute

// Routes
app.get("/allholdings", async (req, res) => {
  try {
    const allholdings = await HoldingsModel.find({});
    res.json({ data: allholdings });
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/allpositions", async (req, res) => {
  try {
    const allpositions = await PosModel.find({});
    res.json({ data: allpositions });
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/neworder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "Missing order fields" });
    }
    // further validation can go here (e.g., numeric qty/price)
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order created", order: newOrder });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/send-otp", sendOtpLimiter, async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const now = Date.now();
    const existing = otpStore.get(email);
    if (existing) {
      // prevent too-frequent resend: e.g., once every 30 seconds
      if (now - existing.lastSent < 30 * 1000) {
        return res
          .status(429)
          .json({ error: "Please wait before requesting another OTP." });
      }
    }

    const otp = generateOTP();
    const expiresAt = now + 5 * 60 * 1000; // 5 minutes
    otpStore.set(email, {
      otp,
      expiresAt,
      attempts: 0,
      lastSent: now,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code from Finora",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
      html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent" });
  } catch (err) {
    console.error("Error in send-otp:", err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

app.post("/verify-otp", (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ error: "Missing email or OTP" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const record = otpStore.get(email);
    if (!record) {
      return res
        .status(400)
        .json({ error: "No OTP requested for this account." });
    }

    const now = Date.now();
    if (now > record.expiresAt) {
      otpStore.delete(email);
      return res.status(400).json({ error: "OTP expired" });
    }

    if (record.attempts >= 5) {
      return res
        .status(429)
        .json({ error: "Too many wrong attempts. Request a new OTP." });
    }

    if (otp !== record.otp) {
      record.attempts += 1;
      otpStore.set(email, record);
      return res.status(400).json({ error: "Incorrect OTP" });
    }

    otpStore.delete(email); // one-time use
    res.status(200).json({ verified: true, message: "OTP verified" });
  } catch (err) {
    console.error("Error in verify-otp:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
