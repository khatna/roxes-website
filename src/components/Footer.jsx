import React from 'react';
import companyLogo from "../logo/logo_v1.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer-cons flex-row h-72 w-full justify-evenly align-center ">
      <div className="company-logo-team-con">
        <img className='w-64 h-24 p-2' src={companyLogo} alt="company-logo" />
        <p className="text-base opacity-50" >High level experience in web design and development knowledge, producting, quality work</p>
      </div>
      <div className="our-product-con">
        <div>Product</div>
        <div>Joloo</div>
      </div>
      <div className="our-web-site-con">
        <div>Company</div>
        <div>Team</div>
        <div>Product</div>
        <div>Contact</div>
      </div>
      <div className="social-company-con">
        <div>Follow us</div>
        <div>fb</div>
        <div>ig</div>
        <div>github</div>
        <div>figma</div>
      </div>
    </div>
    
  )
}

export default Footer;