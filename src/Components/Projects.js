import React from "react";
import "./Projects.scss";
import Robofriends from "../assets/robofriends.png";


function Projects() {
  return (
    <div id="projektet">
      <h2>PROJECTS</h2>
      <div className="projects services">
        <p>
          <h3>Robofriends</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quia beatae facere rerum hic mollitia ipsum repudiandae esse est
          cumque accusamus odit aut asperiores quam temporibus eaque, qui quo
          quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          suscipit, nulla facilis adipisci porro sit quo harum officiis, qui
          doloremque aperiam accusantium. Reiciendis ab soluta laborum corrupti?
          Unde, officia ipsa! <br />
          <a href="https://github.com/Naitneg/robofriends" rel="noreferrer" target="_blank"  className="button button1">
            View Source
          </a>
        </p>
        <img src={Robofriends} alt="" />
      </div>
    </div>
  );
}

export default Projects;
