import React from "react";

function HeroProduct() {
  return (
    <div className="container border-bottom" style={{ marginBottom: "100px", paddingBottom:"5%" }}>
      <div className="row text-center mt-5">
        <h1 className="mt-5 mb-3">Finora Products</h1>
        <h4 className="text-muted mb-4">Sleek, modern, and intuitive trading platforms</h4>
        <h6>
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>{" "}
        </h6>
      </div>
    </div>
  );
}

export default HeroProduct;
