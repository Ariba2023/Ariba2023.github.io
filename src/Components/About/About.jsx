import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Opentowork.jpg";

const About = () => {
  return (
    <div id="about" className="about">
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
            <p>I am a Web developer jahsjkhajdhkasjhdjkashdjkahdjkshjkashdwdjkahdjhsdjhashasjkfhajfhdfjhfgsdfhgsdhfgsdhajashahdahj</p>
            <p>Ariba Junejo asjdjashdjkdhakjdhkajhdkjahdjkghadnajksfdhfghsdfgsjhgfjdhgfhgdhdjkashdjkash</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Laravel</p>
              <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
