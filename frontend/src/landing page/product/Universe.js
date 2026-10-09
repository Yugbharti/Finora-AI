import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/sighnup");
  };

  return (
    <div className="container">
      <div className="row text-center text-muted" style={{ marginTop: "7%" }}>
        <h1>The Finora Universe</h1>
        <p className="mb-3 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 text-center p-5">
          <img src="images/smallcaseLogo.png" style={{ width: "40%" }}></img>
          <p className="text-small mt-3">
            Thematic investing platform that help you invest in diversified
            baskets of stocks on ETFs
          </p>
        </div>
        <div className="col-4 text-center p-5">
          <img src="images/streakLogo.png" style={{ width: "40%" }}></img>
          <p className="text-small mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4 text-center p-5">
          <img src="images/sensibullLogo.svg" style={{ width: "40%" }}></img>
          <p className="text-small mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 text-center p-5">
          <img src="images/dittoLogo.png" style={{ width: "40%" }}></img>
          <p className="text-small mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 text-center p-5">
          <img src="images/zerodhaFundhouse.png" style={{ width: "40%" }}></img>
          <p className="text-small mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for you goals.
          </p>
        </div>
        <div className="col-4 text-center p-5">
          <img src="images/goldenpiLogo.png" style={{ width: "40%" }}></img>
          <p className="text-small mt-3">Bonds trading platform</p>
        </div>
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

export default Universe;
