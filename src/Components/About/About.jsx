import React from "react";
import "./About.css";
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Opentowork.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-title">

        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a Web developer</p>
            <p>Ariba Junejo</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
