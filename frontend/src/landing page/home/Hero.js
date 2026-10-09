import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/sighnup");
  };
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="images/homeHero.png" alt="Hero" className="mb-5" />

        <h1 className="mt-5">Invest in Everthing You Love</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
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

export default Hero;
