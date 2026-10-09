import React from "react";
import Hero from "./Hero";
import Investment from "./Investment";
import InvestmentOptions from "./InvestmentOptions";
import OpenAccount from "../OpenAccount";
import Steps from "./Steps";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";
import FAQs from "./FAQs";

function Signup() {
  return (
    <>
      <Hero />
      <Investment />
      <InvestmentOptions
        imageURL1="images/stocks-acop.svg"
        title1="Stocks"
        description1="Invest in all exchange-listed securities"
        imageURL2="images/mf-acop.svg"
        title2="Mutual Funds"
        description2="Invest in commission-free direct mutual funds"
      />
      <InvestmentOptions
        imageURL1="images/ipo-acop.svg"
        title1="IPO"
        description1="Apply to the latest IPOs instantly via UPI"
        imageURL2="images/fo-acop.svg"
        title2="Future & Options"
        description2="Hedge and mitigate market risk through simplified F&O trading"
      />
      <div className="text-center mt-5 mb-5">
        <button
          className="btn btn-primary text-center fs-5"
          style={{ height: "50px", width: "15%" }}
        >
          Explore Investments
        </button>
      </div>
      <Steps />
      <Benefits />
      <div className="text-center mt-5 mb-5">
        <h3>Explore different account types</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <AccountTypes
              heading="Individual Account"
              text="Invest in equity, mutual funds and derivatives"
              icon={<i class="fa fa-user" aria-hidden="true"></i>}
            />
          </div>
          <div className="col-4">
            <AccountTypes
              heading="HUF Account"
              text="Make tax-efficient investments for your family"
              icon={<i class="fa fa-users" aria-hidden="true"></i>}
            />
          </div>
          <div className="col-4">
            <AccountTypes
              heading="Minor Account"
              text="Teach your little ones about money & invest for their future with them"
              icon={<i class="fa fa-child" aria-hidden="true"></i>}
            />
          </div>
          <div className="col-4">
            <AccountTypes
              heading="NRI Account"
              text="Invest in equity, mutual funds, debentures and more"
              icon={<i class="fa fa-globe" aria-hidden="true"></i>}
            />
          </div>
          <div className="col-4">
            <AccountTypes
              heading="Corporate / LLP / Partnership"
              text="Manage your buisness surplus and investments easily"
              icon={<i class="fa fa-building-o" aria-hidden="true"></i>}
            />
          </div>
        </div>
      </div>
      <FAQs/>
      <OpenAccount />
    </>
  );
}

export default Signup;
