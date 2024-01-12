import React from "react";
import heroImg from "../../../../public/homepage/hero-map-bg.png";
import "@/styles/landingpage.css";

const HeroSection = () => {
  return (
    <div
      className="landingpage-hero-section"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <div className="col-left">
        <h1>Cyber Threat & Risk Management that creates Cyberresiliency</h1>
        <h2>
          The experience-based knowledge you need to guard against Cyber Attacks
          and simplify Risk Management.
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
