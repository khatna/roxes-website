import React, { forwardRef, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Products from "./Products";

function LandingPage() {
  const aboutUsRef = useRef();
  const teamRef = useRef();
  const productRef = useRef();

  const navbarItems = [
    {
      text: "Team",
      onClick: () => {
        teamRef.current.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      text: "Product",
      onClick: () => {
        productRef.current.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      text: "About Us",
      onClick: () => {
        aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  return (
    <>
      <Navbar items={navbarItems} />
      <div ref={teamRef} >
        <Team />
      </div>
      <div ref={productRef} >
        <Products />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
