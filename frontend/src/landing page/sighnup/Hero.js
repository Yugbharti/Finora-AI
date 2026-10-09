import React, { useState, useEffect, useRef } from "react";

function HeroSignup() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  const [countdown, setCountdown] = useState(0);
  const countdownRef = useRef(null);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (otpSent && countdown === 0) {
      setCountdown(300); // 5 minutes
    }
  }, [otpSent]);

  useEffect(() => {
    if (countdown <= 0) {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      return;
    }
    if (!countdownRef.current) {
      countdownRef.current = setInterval(() => {
        setCountdown((c) => Math.max(0, c - 1));
      }, 1000);
    }
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    };
  }, [countdown]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const sendOtp = async () => {
    setStatus("");
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("Please enter a valid email.");
      return false;
    }
    setSending(true);
    try {
      const res = await fetch("/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
        setStatus("OTP sent to " + email);
        setVerified(false);
        setOtp("");
        return true;
      } else {
        setStatus(data.error || "Failed to send OTP.");
        return false;
      }
    } catch (err) {
      setStatus("Network error when sending OTP.");
      return false;
    } finally {
      setSending(false);
    }
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    await sendOtp();
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!otp || otp.trim().length === 0) {
      setStatus("Enter the OTP.");
      return;
    }
    if (countdown === 0) {
      setStatus("OTP expired. Please request a new one.");
      return;
    }
    setVerifying(true);
    try {
      const res = await fetch("/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (res.ok && data.verified) {
        setVerified(true);
        setStatus("Email verified!");
      } else {
        setStatus(data.error || "Invalid OTP.");
      }
    } catch (err) {
      setStatus("Network error during verification.");
    } finally {
      setVerifying(false);
    }
  };

  const handleResend = async () => {
    if (countdown > 0) return;
    setOtpSent(false);
    await sendOtp();
  };
  return (
    <div className="container">
      <div className="p-3 mt-5 mb-5">
        <h3 className="text-center mb-4">
          Open a free demat and trading account online
        </h3>
        <h5 className="text-center text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>
      </div>
      <div className="row mt-5 p-3">
        <div className="col-5" style={{ marginLeft: "10%" }}>
          <img src="images/account_open.svg" alt="Signup" />
        </div>
        <div className="col-5">
          <form onSubmit={otpSent ? handleVerifyOtp : handleButtonClick}>
            <h3 className="pt-5">Signup Now</h3>
            <h5 className="text-muted">Or track your existing application</h5>

            <input
              placeholder="Email@id.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={otpSent && !verified}
              style={{
                width: "60%",
                height: "50px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "8px",
              }}
            />
            <br />

            {!otpSent && (
              <button
                type="submit"
                className="btn btn-primary mt-4 fs-5"
                style={{ width: "30%", height: "40%", margin: "0 auto" }}
                disabled={sending}
              >
                {sending ? "Sending..." : "Get OTP"}
              </button>
            )}

            {otpSent && !verified && (
              <>
                <div className="mt-3">
                  <label htmlFor="otp">Enter OTP</label>
                  <br />
                  <input
                    id="otp"
                    placeholder="6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    style={{
                      width: "60%",
                      height: "50px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      marginTop: "4px",
                    }}
                  />
                </div>
                <div className="mt-2">
                  <small>
                    OTP expires in: {formatTime(countdown)}{" "}
                    {countdown === 0 && (
                      <span style={{ color: "red" }}> (expired)</span>
                    )}
                  </small>
                  {countdown === 0 && (
                    <div>
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={handleResend}
                      >
                        Resend OTP
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-success mt-3 fs-5"
                  style={{ width: "30%", height: "40%", margin: "0 auto" }}
                  disabled={verifying}
                >
                  {verifying ? "Verifying..." : "Submit OTP"}
                </button>
              </>
            )}

            {verified && (
              <div className="mt-3">
                <strong style={{ color: "green" }}>Email verified ✔</strong>
              </div>
            )}

            {status && (
              <div className="mt-2">
                <small>{status}</small>
              </div>
            )}
          </form>
          <p className="mt-4">
            By proceeding, you agree to the Finora{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              terms
            </a>{" "}
            &{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSignup;
