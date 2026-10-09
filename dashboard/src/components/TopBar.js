import React, { useState } from "react";

import Menu from "./Menu";

const TopBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className="topbar-container">
      <Menu />

      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <div className="profile" onClick={toggleProfile}>
          <div className="avatar">PP</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
