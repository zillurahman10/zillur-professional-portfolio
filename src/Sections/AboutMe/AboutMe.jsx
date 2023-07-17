import React from "react";
import "./AboutMe.css";
import AboutMePhoto from "../../Assets/AboutMe.jpg";

function AboutMe() {
  return (
    <div className="about-main">
      <h1 className="about-heading">About Me</h1>
      <div className="banner">
        <img src={AboutMePhoto} alt="" className="banner-photo"></img>
        <div>
          <h1 className="about-text">
            I'm a professional <span className="deg-text">Full-Stack</span> and
            Also a<span className="deg-text"> MERN-Stack</span> Web Developer. I
            develop web application with my core skills. I seek everyday to gain
            new skills that are useful in my practical life.
          </h1>
          <button className="glow-btn">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1MRq9uhw9puwKtw-X2tlXzYXLmRZ2gADW/view?usp=sharing"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
