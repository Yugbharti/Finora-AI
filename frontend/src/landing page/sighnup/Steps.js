import React from "react";

function Steps() {
  return (
    <div className="container mb-5 p-5 border-top border-bottom" style={{ marginTop: "10%" }}>
      <h3 className="text-center">
        Steps to open a demat account with Zerodha
      </h3>
      <div className="row align-items-center justify-content-center mt-5 mb-5">
        <img
          src="images/steps-acop.svg"
          alt="Steps to open a demat account"
          className="col-4"
        />
        <div className="col-4">
          <h4 className="border-bottom p-3">1. Enter the requested details</h4>
          <h4 className="border-bottom p-3">2. Complete e-sign & verification</h4>
          <h4 className="p-3">3. Start investing!</h4>
        </div>
      </div>
    </div>
  );
}

export default Steps;
