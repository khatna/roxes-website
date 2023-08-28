import React, { Component } from "react";
import tuugo from "../member-pic/tuugo.png";
import "../Styles/About_us.css";

function AboutUs() {  
  return (
    <div className="ab-cons">
      <div className="team-cons" >
        <div className="team-mem-con" >
          <img src={tuugo} alt="mem-pic" />
          <div className="tm-nm">Enkhtuguldur</div>
          <div className="job-tit">Chief Executive Officer</div>
        </div>
        <div className="team-mem-con w-64 h-24">
          <img src={tuugo} alt="mem-pic" />
          <div className="tm-nm">Enkhtuguldur</div>
          <div className="job-tit">Chief Executive Officer</div>
        </div>
        <div className="team-mem-con w-64 h-24">
          <img src={tuugo} alt="mem-pic" />
          <div className="tm-nm">Enkhtuguldur</div>
          <div className="job-tit">Chief Executive Officer</div>
        </div>
        <div className="team-mem-con w-64 h-24">
          <img src={tuugo} alt="mem-pic" />
          <div className="tm-nm ">Enkhtuguldur</div>
          <div className="job-tit  ">Chief Executive Officer</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
