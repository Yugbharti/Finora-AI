import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" alt="Logo" className="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleOptionClick(0)}
            >
              <p className={selectedOption===0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Orders"
              onClick={() => handleOptionClick(1)}
            >
              <p className={selectedOption===1 ? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Holdings"
              onClick={() => handleOptionClick(2)}
            >
              <p className={selectedOption===2 ? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Positions"
              onClick={() => handleOptionClick(3)}
            >
              <p className={selectedOption===3 ? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Funds"
              onClick={() => handleOptionClick(4)}
            >
              <p className={selectedOption===4 ? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Apps"
              onClick={() => handleOptionClick(5)}
            >
              <p className={selectedOption===5 ? activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
