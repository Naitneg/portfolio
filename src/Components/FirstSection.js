import React from "react";
import "./FirstSection.scss";
import { Link } from "react-router-dom";
import "animate.css";
import Gentian from "../assets/CV - Gentian Binaku react application.pdf";
function FirstPage() {
  return (
    <div id="baner">
      <div className="container ">
        <h1 className="baner-title animate__animated animate__jackInTheBox">
          Hi, my name is <span className="text-color-main">Gentian Binaku</span>
          <br />
          {`I'm a Web Developer (ReactJS)`}
        </h1>
        <p className="butoni">
          <Link
            to={Gentian}
            target="_blank"
            className=" button button1 animate__animated animate__backInLeft"
          >
            Know more
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
