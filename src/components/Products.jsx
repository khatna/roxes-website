import React from "react";
import "../Styles/Products.css";
import jolooMobile from "../joloo-pic/jolo_mob.png";
import jolooMobileLogo from "../joloo-pic/jolo_mob_logo.png";

function Products() {
  return (
    <div className="product-con">
      <div className="product-head-con">
        <div className="product-header">Solutions</div>
      </div>
      <div className="product-content">
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
        <div className="jolo-img-con">
          <img className="joloo-phne-img w-96 h-96" src={jolooMobile} alt="jolo-mob-pic" />
          <img className="joloo-mob-app-logo w-20 h-20" src={jolooMobileLogo} alt="jolo-mob-logo-pic" />
        </div>
      </div>
    </div>
  );
}

export default Products;
