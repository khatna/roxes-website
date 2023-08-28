import React from "react";
import "../Styles/Footer.css";
import companyLogo from "../logo/logo_v1.png";

function Footer() {
  return (
    <div className="footer-cons flex-row h-72 w-full justify-evenly align-center ">
      <img className="c-logo w-96 h-32 p-2" src={companyLogo} alt="logo" />
      <div className="contact-con">
        <div className="phone-number-con kk  ">
          <div className="phone-logo material-icons p-2 m-2 ">call</div>
          <div className="phone p-2 m-2 ">+976-99833284</div>
        </div>
        <div className="email-con kk  ">
          <div className="email-icon material-icons p-2 m-2 ">email</div>
          <div className="work-mail p-2 m-2 ">demo@gmail.com</div>
        </div>
        <div className="loc-con kk  ">
          <div className="location-logo material-icons p-2 m-2 ">
            location_on
          </div>
          <div className="work-location p-2 m-2 ">Чингисийн өргөн чөлөө 33/2, Стадион Оргил /17011, Улаанбаатар</div>
        </div>
      </div>
      <div className="web-page-composition">
        <div className="text-3xl p-2 m-3" >Company</div>
        <div className="" >Team</div>
        <div className="" >Products</div>
        <div className="" >About Us</div>
      </div>
    </div>
  );
}

export default Footer;
