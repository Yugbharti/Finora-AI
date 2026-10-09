import React from "react";

function HeroPricing() {
  return (
    <div className="container">
      <div className="row text-center mt-5 border-bottom p-5">
        <h1 className="mb-3">Pricing</h1>
        <h5 className="text-muted">
          Free equity investments and flat &#8377;20 traday and F&O trades
        </h5>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-4 p-5">
          <img src="images/pricingEquity.svg"></img>
          <h2>Free Equity Delivery</h2>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free -
            &#8377;0 brokerage
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="images/intradayTrades.svg"></img>
          <h2>Intraday and F&O Trades</h2>
          <p className="text-muted mt-4">
            Flat &#8377;20 or 0.03% (whichever is lower) per executed order on
            traday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="images/pricingMF.svg"></img>
          <h2>Free Direct MF</h2>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free - &#8377;0
            commisions and DP charges
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroPricing;
