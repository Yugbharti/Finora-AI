import React from "react";

function HeroSupport() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 className="mt-5">Support Portol</h4>
        <h5 className="mt-5 fs-5">
          <a href="#" style={{ color: "white" }}>
            Track Tickets
          </a>
        </h5>
      </div>
      <div className="row p-3">
        <div className="col-6" id="searchWrapper" style={{ marginLeft: "10%", marginRight:"2%" ,width: "40%" }}>
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input
            className="mb-3 mt-4"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
          ></input>
          <a href="#" style={{ color: "white" }}>
            Track account opening
          </a>
          <a href="#" style={{ color: "white" }}>
            Track segment activation
          </a>
          <a href="#" style={{ color: "white" }}>
            Intraday margins
          </a><br></br>
          <a href="#" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-5">
          <h4 className="mt-4">Featured</h4>
          <ol style={{lineHeight: "2.5rem"}}>
            <li>
              <a href="#" style={{ color: "white", fontSize: "1.2rem" }}>
                Quarterly Settlement of Funds - July 2025
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white", fontSize: "1.2rem" }}>
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default HeroSupport;
