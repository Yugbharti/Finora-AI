import React from "react";

function FAQs() {
  return (
    <div className="container p-4 mt-5">
      <h3 className="mb-5">FAQs</h3>
      <div id="faqAccordion">
        <div className="accordion-item border-top mb-2">
          <h4
            className="accordion-header d-flex justify-content-between align-items-center mt-3"
            id="headingOne"
          >
            What is Finora account?
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </h4>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              A Finora account is a combined demat and trading account
              that allows investors to buy, sell, and hold securities digitally.
            </div>
          </div>
        </div>

        <div className="accordion-item border-top mb-2">
          <h4
            className="accordion-header d-flex justify-content-between align-items-center mt-3"
            id="headingTwo"
          >
            What documents are required to open a demat account?
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </h4>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>
                The following documents are required to open a Zerodha account
                online:
              </p>
              <ul>
                <li>PAN number</li>
                <li>
                  Aadhaar Card (Linked with a phone number for OTP verification)
                </li>
                <li>
                  Cancelled cheque or bank account statement (To link your bank
                  account)
                </li>
                <li>
                  Income proof (Required only if you wish to trade in Futures &
                  options)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item border-top mb-2">
          <h4
            className="accordion-header d-flex justify-content-between align-items-center mt-3"
            id="headingThree"
          >
            Is Finora account opening free?
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </h4>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">Yes, it is completely free.</div>
          </div>
        </div>

        <div className="accordion-item border-top mb-2">
          <h4
            className="accordion-header d-flex justify-content-between align-items-center mt-3"
            id="headingFour"
          >
            Are there any maintenance charges for a demat account?
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </h4>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              The account maintenance charges are applicable based on the
              account type.
              <br />
              For Basic Services Demat Account: Zero charges if the holding
              value is less than ₹4,00,000.
              <br />
              For non-Basic Services Demat Account: ₹300 per year + GST.
              <br />
              To learn more about BSDA,{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Click here.
              </a>
            </div>
          </div>
        </div>

        <div className="accordion-item border-top mb-2">
          <h4
            className="accordion-header d-flex justify-content-between align-items-center mt-3"
            id="headingFive"
          >
            <span>Can I open a demat account without a bank account?</span>
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </h4>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              To open a demat account, you must have a bank account in your
              name.
              <br />
              If UPI verification is completed successfully, no proof of bank is
              needed. However, if bank verification fails, you'll need to
              provide either a cancelled cheque or a bank statement to link your
              bank account to Finora.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
