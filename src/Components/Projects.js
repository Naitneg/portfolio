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
          Robofriends është një projekt që e kam perfunduar gjatë vijimit të një kursi online. Ktu shfaqen disa users ne formën e robotave ku përmes 
          searchbox mund të filtrojm se cilin robot deshirojm ta selektojm. Besoj që permës ksaj logjike mund të ndërtoj projekte të tjera të ndryshme
          të cilat i ndihmojnë të tjerve rreth filtrimit të të dhënave. Gjithashtu kam pervoj edhe në dizajnim e që mendoj se është njeri ndër çelsat
          kryesor për një Website të mirë.  <br />
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
