import React from "react";

function Left({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div className='container' style={{ marginTop: "100px" }}>
      <div className='row'>
        <div className="col-6 text-center">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-4" style={{ display: "flex", gap: "80px" }}>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <a href={playStore}>
              <img src="images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img src="images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
