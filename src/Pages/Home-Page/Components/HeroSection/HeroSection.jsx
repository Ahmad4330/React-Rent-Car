import React from "react";
import "./HeroSection.css";
import leftImg from "./left-img.png";
import { HeroData } from "./Data";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className="HeroSection">
        <div className="container hero-container">
          {HeroData.map((planed, i) => (
            <div className="hero-left hero" key={i}>
              <div className="hro-heading">
                <span className="primary-heading">{planed.heading1}</span>
                <span className="primary-heading">{planed.heading2}</span>
              </div>
              <div className="hero-text">
                <span className="primary-text">{planed.detail1}</span>
                <span className="primary-text">{planed.detail2}</span>
              </div>
              <button className="btn hero-btn">{planed.button}</button>
              <div>
                <img src={leftImg} alt="" />
              </div>
            </div>
          ))}

          

        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
