import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top bg-body-tertiary border-bottom"
      style={{ backgroundColor: "#424242" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to={"/"}>
          <img
            className=""
            src="images/Finora.png"
            style={{ width: "45px", marginLeft: "20px" }}
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/sighnup"}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/login"}>
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/products"}>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/support"}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
