import React from "react";
import "../Styles/Navbar.css";
import companyLogo from "../logo/logo_v1.png";

function Navbar({ items }) {
  return (
    <div className="nav-con h-28">
      <img className="c-logo w-64 h-24 p-2" src={companyLogo} alt="logo" />
      {items.map((item, index) => (
        <div key={index} onClick={item.onClick} className="nav-item ">
          <div className="cursor-pointer" >{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
