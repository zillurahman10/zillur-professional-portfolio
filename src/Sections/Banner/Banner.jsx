import React from "react";
import "./Banner.css";
import bannerPhoto from "../../Assets/Formal Photo.jpg";

function Banner() {
  return (
    <div class="banner">
      <div class="banner-content">
        <h1 class="name-text">
          Hey! I'm <span class="name-big">Zillur Rahman</span>
        </h1>
        <h1 class="banner-text">
          a <span class="deg-text">Full-Stack</span> Web Developer
        </h1>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1MRq9uhw9puwKtw-X2tlXzYXLmRZ2gADW/view?usp=sharing"
          rel="noreferrer"
        >
          <button class="glow-btn">Get Resume</button>
        </a>
      </div>
      <img src={bannerPhoto} alt="" class="banner-photo" />
    </div>
  );
}

export default Banner;
