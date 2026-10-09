import React from "react";

function Right({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6" style={{ marginTop: "10%" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6 text-center">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default Right;
