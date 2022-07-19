import React from "react";
import "./Footer.scss";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import insta from "../assets/insta.png";
import ScrollToTop from "./ScrollTop";

function Footer() {
  return (
    <div className="footer">
     <div className="scroll"><ScrollToTop/></div>
      <div className="social">
        <a href="https://www.facebook.com/Genn.Binaku/">
          <img className="ikona" src={facebook} alt="$" />
        </a>
       
        <a href="https://www.instagram.com/gentianbinaku">
          <img className="ikona" src={insta} alt="$" />
        </a>
        <a href="https://github.com/Naitneg">
          <img className="ikona" src={github} alt="$" />
        </a>
      </div>
      <p className="footer__text">© 2022 - Portfolio by Gentian Binaku</p>
    </div>
  );
}

export default Footer;
