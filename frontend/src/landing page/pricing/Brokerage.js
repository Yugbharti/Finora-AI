import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row border-top p-5">
        <div className="col-8">
          <a href="" style={{ textDecoration: "none" }}>
            <h5 className="text-center mb-3">Brokerage Calculator</h5>
          </a>
          <ul>
            <li className="text-muted p-1">
              Call & Trade and RMS and auto-squareoff: Additional charges of
              &#8377;50 + GST per order.
            </li>
            <li className="text-muted p-1">Digital contract notes will be send via e-mail.</li>
            <li className="text-muted p-1">
              Physical copies of contract notes, if required, shall be charged
              &#8377;20 per contract note. Courier charges apply.
            </li>
            <li className="text-muted p-1">
              For NRI account (non-PIS), 0.5% or &#8377;100 per executed for
              equity (whichever is lower).
            </li>
            <li className="text-muted p-1">
              For NRI account (PIS), 0.5% or &#8377;100 per executed for equity
              (whichever is lower).
            </li>
            <li className="text-muted p-1">
              If the account is in debit balance, any order placed will be
              charged &#8377;40 per executed order instead of &#8377;20 per
              executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h5 className="text-center">List of Charges</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
