import React from "react";
import "./About.scss";
import geni from "../assets/gentian.png";
import { Link } from "react-router-dom";
import Gentian from "../assets/gentiancv.pdf";

function About() {
  return (
    <div id="about">
      <div className="services">
        <h2>ABOUT ME</h2>
      </div>
      <div className="aboutme">
        <img src={geni} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quia beatae facere rerum hic mollitia ipsum repudiandae esse est
          cumque accusamus odit aut asperiores quam temporibus eaque, qui quo
          quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          suscipit, nulla facilis adipisci porro sit quo harum officiis, qui
          doloremque aperiam accusantium. Reiciendis ab soluta laborum corrupti?
          Unde, officia ipsa! <br />
          <Link to={Gentian} target="_blank" className="button button1">
            View Resume
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
