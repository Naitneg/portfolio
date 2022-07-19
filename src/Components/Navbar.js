import "./Navbar.scss";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import FirstSection from "./FirstSection";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const ref2 = useRef(null);
  const ref1 = useRef(null);
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <nav className="nav">
        <h1 className="logo">Portfolio</h1>
        <ul className={active}>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li onClick={() => scrollToSection(ref2)}>
            <Link to="./">About</Link>
          </li>
          <li onClick={() => scrollToSection(ref1)}>
            <Link to="./">Projects</Link>
          </li>
          <li>
            <Link to="./">Contact</Link>
          </li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <FirstSection />
      <div ref={ref2} className="services">
        <About />
      </div>
      <div ref={ref1} className="services">
        <Projects />
      </div>
    </div>
  );
}

export default Navbar;
