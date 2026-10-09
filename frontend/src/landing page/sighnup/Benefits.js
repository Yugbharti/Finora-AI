import React from "react";

function Benefits() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center mb-5 p-5">
        <div className="col-md-6 text-center">
          <img
            src="images/acop-benefits.svg"
            alt="Benefits"
            className="col-6 mb-5"
            style={{ width: "62%" }}
          />
          <h4>Benefits of opening a Finora demat account</h4>
        </div>
        <div className="col-md-6">
          <div className="p-3">
            <h4 className="mb-4">Unbeatable Pricing</h4>
            <p className="fs-5 text-muted">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </div>
          <div className="p-3">
            <h4 className="mb-4">Best investing experience</h4>
            <p className="fs-5 text-muted">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>
          <div className="p-3">
            <h4 className="mb-4">No spam or gimmicks</h4>
            <p className="fs-5 text-muted">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>
          <div className="p-3">
            <h4 className="mb-4">The Finora universe</h4>
            <p className="fs-5 text-muted">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
