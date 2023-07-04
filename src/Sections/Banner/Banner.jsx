import React from "react";
import "./Banner.css";
import bannerPhoto from "../../Assets/Formal Photo.jpg";

function Banner() {
  return (
    <div>
      <div>
        <div className="banner">
          <div>
            <h1 className="banner-text">
              I'm a <span className="deg-text">Full-Stack</span> and also a
              <span className="deg-text"> MERN Stack</span> Developer
            </h1>
            <button className="banner-btn">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1MRq9uhw9puwKtw-X2tlXzYXLmRZ2gADW/view?usp=sharing"
                rel="noreferrer"
              >
                Get Resume
              </a>
            </button>
          </div>
          <img src={bannerPhoto} alt="" className="banner-photo"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
