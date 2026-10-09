import React from "react";

function InvestmentOptions({
  imageURL1,
  title1,
  description1,
  imageURL2,
  title2,
  description2,
}) {
  return (
    <div className="container mt-5 mb-4" style={{ justifyContent: "center" }}>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <img src={imageURL1} style={{marginLeft: "30%"}}></img>
        </div>
        <div className="col-2">
          <h4>{title1}</h4>
          <p>{description1}</p>
        </div>
        <div className="col-2">
          <img src={imageURL2} style={{marginLeft: "30%"}}></img>
        </div>
        <div className="col-2">
          <h4>{title2}</h4>
          <p>{description2}</p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default InvestmentOptions;
