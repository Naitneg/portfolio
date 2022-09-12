import React from "react";
import "./Projects.scss";
import Robofriends from "../assets/robofriends.png";
import movieap from "../assets/movieap.png"


function Projects() {
  return (
    <div id="projektet">
      <h2>PROJECTS</h2>
      <div className="projects services">
        <p>
          <h3>MOVIE CINEMA</h3>
          MOVIE APP është një projekt në grup të cilin e kam perfunduar gjatë një praktike në një kompani softwerike.
          Përgjegjësia ime këtu ka qenë e gjith pjesa e Back-end , gjithashtu edhe disa pjesë në Front. Teknologjitë të 
          cilat i kam përdorur në këtë projekt janë React në Front-end, kurse NodeJs dhe ExpressJs në Back-end. Gjithashtu 
          databaza është e krijuar nga unë në softwerin PostgreSQL. Në këtë projekt bëhet fjal për rezervimin e biletave 
          të filmave në një kinema, edhe pse si projekt nuk është i përfunduar, ideja dhe funksionaliteti janë implementuar 
          që të tregohet puna ime si Full-Stack Developer.  <br />
          <a href="https://github.com/Naitneg" rel="noreferrer" target="_blank"  className="button button1">
            View Source
          </a>
        </p>
        <img src={movieap} alt="" />
      </div>
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
