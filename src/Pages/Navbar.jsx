import React from 'react';
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import companyLogo from "../logo/v1 black.png";
function Navbar() {
  return (
    <div className="nav-con h-28">
      <img className="c-logo w-64 h-24 p-2" src={companyLogo} alt="logo" />
      <ul className="nav-item ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;