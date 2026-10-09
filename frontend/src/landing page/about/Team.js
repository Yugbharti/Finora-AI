import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row p-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>

      <div className="row text-muted" style={{ lineHeight: "1.8" }}>
        <div className="col-6 text-center">
          <img
            src="images/Myself.jpg"
            style={{ borderRadius: "100%", width: "45%" }}
          ></img>
          <h4 className="mt-3" style={{ lineHeight:"1.8"}}>Satyam Pandey</h4>
          <h6 style={{ lineHeight:"1.8"}}>Student, DTU</h6>
        </div>
        <div className="col-6">
          <p>
            Satyam bootstrapped and founded Finora in 2025 to overcome
            the hurdles he faced during his stint as a trader. Today, Zerodha
            has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the TEBI Tertiary Market Advisory Committee (TMAC)
            and the Broker Data Advisory Committee (BDAC).
          </p>
          <p>Playing football is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
