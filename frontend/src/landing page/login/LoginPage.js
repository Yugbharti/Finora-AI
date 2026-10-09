import React, { useState } from "react";

function Login() {
  const [useOtp, setUseOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordOrOtp, setPasswordOrOtp] = useState("");

  const handleOtpToggle = () => {
    setUseOtp(true);
    setPasswordOrOtp(""); // clear the input
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (useOtp) {
      console.log("Logging in with OTP:", passwordOrOtp);
    } else {
      console.log("Logging in with Password:", passwordOrOtp);
    }
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-3 fw-bold" style={{color: "#0074D9"}}>Login to Finora</h2>
      <img
        src="./images/login.png"
        alt="Finora"
        width="10%"
        className="mb-4"
      />
      <form onSubmit={handleLogin} style={{width: "30%", marginLeft: "35%"}}>
        <input
          type="email"
          placeholder="Email address"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type={useOtp ? "text" : "password"}
          placeholder={useOtp ? "Enter OTP" : "Password"}
          className="form-control mb-3"
          value={passwordOrOtp}
          onChange={(e) => setPasswordOrOtp(e.target.value)}
          required
        />
        {!useOtp && (
          <div className="form-check text-start mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember my Credentials
            </label>
          </div>
        )}
        <button type="submit" className="btn btn-primary me-2">
          Login
        </button>
        {!useOtp && (
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleOtpToggle}
          >
            Login using OTP
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
