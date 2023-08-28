import React from "react";
import companyLogo from "../logo/logo_v1.png";
import "../Styles/Team.css";
function Team() {
  return (
    <div className="team-con">
      <div className="team-head">
        <h2 className="team-header">About Us</h2>
      </div>
      <div className="team-content">
        <img className="c-logo w-96 h-90 p-2" src={companyLogo} alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          libero justo, feugiat at lorem et, faucibus imperdiet metus. Nullam
          vulputate sagittis ante, bibendum volutpat erat semper sed. Maecenas
          elementum semper est, at tempor leo varius nec. Morbi nisi nisi,
          fringilla sed euismod gravida, varius eget turpis. In hac habitasse
          platea dictumst. Aliquam tincidunt, dolor non vestibulum porta, arcu
          urna lacinia felis, quis cursus tortor metus et lacus. Nulla ac mauris
          ut sapien sodales mattis. Suspendisse ac tortor lorem. Proin facilisis
          eros vestibulum facilisis consequat. Praesent lacinia augue elit, at
          condimentum sapien laoreet at. In dolor lectus, blandit nec laoreet
          at, posuere sed orci. Ut posuere diam quis rhoncus rutrum. Nullam in
          sagittis dui, nec scelerisque erat.
        </p>
      </div>
    </div>
  );
}

export default Team;
