import React, { Component } from "react";
import tuugo from "../member-pic/tuugo.png";
import "../Styles/About_us.css";
import Navbar from "./Navbar";

function About_us() {
  // const defaultProps = {
  //   TuugoContent : [
  //     'JSX', 'React Props', 'React State',
  //     'React Lifecycle Methods', 'React Event Handlers',
  //     'React Router', 'React Hooks', 'Readux',
  //     'React Context'
  //   ],
  //   BatjinContent : [],
  //   KhatnaaContent : [],
  //   SugarContent : []
  // }
  // const constructor(props) {
  //   super(props);
    
  //   // Set initial state
  //   this.state = { msg: 'React Course', content: '' }
    
  //   // Binding this keyword
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // renderContent() {
  //   return (
  //     <ul>
  //       {this.props.courseContent.map(content => (
  //         <li key={content}>{content}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  
  // const handleClick() {
  //   this.setState({
  //     msg: 'Course Content',
  //     content: this.renderContent()
  //   });
  // }
  
  return (
    <div className="ab-cons">
      <Navbar />
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

export default About_us;
