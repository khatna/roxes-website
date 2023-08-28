import React, { forwardRef, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Products from "./Products";
import Contact from "./Contact";

function LandingPage() {
  const aboutUsRef = useRef();
  const teamRef = useRef();
  const productRef = useRef();
  const contactRef = useRef();

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
    {
      text: "Contact",
      onClick: () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      },
    }
  ];

  return (
    <>
      <Navbar items={navbarItems} />
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={teamRef} >
        <Team />
      </div>
      <div ref={productRef} >
        <Products />
      </div>
      <div ref={contactRef} >
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
