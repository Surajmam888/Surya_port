import React from "react";
import "./Skills.css";
import UIDesign from "../images/UI.png";
import WebDesign from "../images/WEBSITE.png";
import AppDesign from "../images/APP.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">what I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for details. I am proficient in
        HTML, CSS, and javaScripts, as well as design software such as React.js
        developer.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} className="SkillBarImg" alt="" />
          <div className="skillBarText">
            <h2>UI DESIGN</h2>
            <p>
              What is UI design in simple words? User interface (UI) design is
              the process designers use to build interfaces in software or
              computerized devices, focusing on looks or style.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} className="SkillBarImg" alt="" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Web design involves creating the visual elements and layout of a
              website.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} className="SkillBarImg" alt="" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              App design involves creating the visual elements and layout of a
              App.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
