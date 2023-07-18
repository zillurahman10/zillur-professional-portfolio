import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div
      style={{
        margin: "100px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          margin: "30px",
        }}
      >
        My skills
      </h1>
      <div className="skills-container">
        <div className="skill-item">
          <div className="skill-name">HTML</div>
          <progress
            className="progress progress-success w-56"
            value="80"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">CSS</div>
          <progress
            className="progress progress-success w-56"
            value="75"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">JavaScript</div>
          <progress
            className="progress progress-success w-56"
            value="70"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">TypeScript</div>
          <progress
            className="progress progress-success w-56"
            value="70"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">ReactJs</div>
          <progress
            className="progress progress-success w-56"
            value="75"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">Redux</div>
          <progress
            className="progress progress-success w-56"
            value="60"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">NodeJS</div>
          <progress
            className="progress progress-success w-56"
            value="65"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">NextJS</div>
          <progress
            className="progress progress-success w-56"
            value="55"
            max="100"
          ></progress>
        </div>

        <div className="skill-item">
          <div className="skill-name">MongoDB</div>
          <progress
            className="progress progress-success w-56"
            value="75"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
