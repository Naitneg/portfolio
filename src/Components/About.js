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
          Unë jam Gentian Binaku, 25 vjeçar, jam i lindur dhe i rritur në
          qytetin e Mitrovicës, ku edhe jetoj me familjen. Shkollimin fillor e
          kam ndjekur në Mitrovicë në shkollën fillore "Meto Bajraktari", po
          ashtu edhe shkollimin e mesëm e kam ndjekur në Mitrovicë në Gjimnazin
          "Frang Bardhi", pas përfundimit të shkollës së mesme kam vijuar
          studimet në Universitetin "Isa Boletini" në Mitrovicë , drejtimin
          Informatikë Inxhinierike. Kam një përvoj bukur të gjatë të punës, duke
          filluar si dizejner dhe montazher në një nga studiot në qytetin tim.
          Pastaj si ndihmës IT në një supermarket, e duke perfunduar si një web
          developer fillestar. Hobi im janë videolojrat e ndryshme sepse kam
          mësuar shum prej tyre, gjithashtu më bëjnë të ndihem mirë. Për fund,
          edhe pse jam i ri si Developer unë besoj se jam mjaftushëm i motivuar
          për të mësuar teknologji të reja, dhe të bashkpunoj në grup për një të
          ardhme më të mirë.! <br />
          <Link to={Gentian} target="_blank" className="button button1">
            View Resume
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
