import React from "react";
import "./Projects.scss";
import eComerce from "../assets/e-comerce.gif";
import movieap from "../assets/movieap.png";

function Projects() {
  return (
    <div id="projektet">
      <h2>PROJECTS</h2>
      <div className="projects services">
        <p>
          <h3>MOVIE CINEMA</h3>
          Movie App is a group project that I completed during an internship at
          a software company. My responsibility here has been the entire
          Back-end part, also some parts in the Front. The technologies I used
          in this project are React in the Front-end, and NodeJs and ExpressJs
          in the Back-end. The database was created by me in PostgreSQL
          software. In this project it is about booking movie tickets in a
          cinema, although as a project it is not established,the idea and
          functionality have been implemented to show my work as a Full-Stack
          Developer. <br />
          <a
            href="https://github.com/GzimAsani/Movie-theater-app-API"
            rel="noreferrer"
            target="_blank"
            className="button button1"
          >
            View Source
          </a>
        </p>
        <img src={movieap} alt="" />
      </div>
      <div className="projects services">
        <p>
          <h3>E-Commerce</h3>
          This e-commerce web application I have created during an online
          course. The purpose of this web app is to provide an easy and
          convenient platform for customers to purchase products online. The web
          application has a user-friendly interface and is accessible from any
          device with an internet connection. The customers can browse through a
          wide range of products, view product details, and add them to their
          shopping cart. They can also manage their shopping cart, proceed to
          checkout and make payments securely through the integrated payment
          gateway. In conclusion, this e-commerce web app provides a hassle-free
          shopping experience for customers and helps store owners grow their
          business by providing a platform to sell their products online. Thank
          you for your time, and I would be happy to answer any questions you
          may have. <br />
          <a
            href="https://github.com/Naitneg/e-commerce"
            rel="noreferrer"
            target="_blank"
            className="button button1"
          >
            View Source
          </a>
        </p>
        <img src={eComerce} alt="" />
      </div>
    </div>
  );
}

export default Projects;
