import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    if (window.location.pathname === "/sighnup") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/sighnup");
    }
  };
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">Open a Finora account</h1>
        <p className="mb-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
