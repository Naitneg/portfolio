import React from "react";
import "./About.scss";
import geni from "../assets/gentian.png";
import { Link } from "react-router-dom";
import Gentian from "../assets/CV - Gentian Binaku react application.pdf";

function About() {
  return (
    <div id="about">
      <div className="services">
        <h2>ABOUT ME</h2>
      </div>
      <div className="aboutme">
        <img src={geni} alt="" />
        <p>
          I am Gentian Binaku, 25 years old, I was born and raised in the city
          of Mitrovica, where I live with my family. I attended elementary
          school in Mitrovica at the "Meto Bajraktari" elementary school, I also
          attended secondary school in Mitrovica at the Gymnasium "Frang
          Bardhi", after finishing high school studies at "Isa Boletini"
          University in Mitrovica, majoring in Engineering Informatics. I have a
          pretty long work experience, starting as a designer and assembler in
          one of the studios in my city. Then as an IT help in a supermarket,
          and holding on to a beginner web developer. My hobby is different
          video games because I have learned a lot from them, they also make me
          feel good. For the end I'm motivated enough to learn new technologies,
          and join the team for a better future.!! <br />
          <Link to={Gentian} target="_blank" className="button button1">
            View Resume
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
