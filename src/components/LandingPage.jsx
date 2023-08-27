import React, { forwardRef, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

function LandingPage() {
  const aboutUsRef = useRef();

  const navbarItems = [
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
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
