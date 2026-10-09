import React from "react";

function AccountTypes({ heading, text, icon }) {
  return (
      <button className="p-4 mb-5" id="account_btn">
        <h4>
          {icon} {heading}
        </h4>
        <p className="fs-5 text-muted">{text}</p>
      </button>
  );
}

export default AccountTypes;
