import React from "react";
import "./MainDetail.css";
import Review from "../2/Review";
import RecentCars from "../3/RecentCars";

import CheckBox from "../../../../Common/CheckBox/CheckBox";
import { HeroData } from "./Data";
import img from "./detail-main.png";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import { BsHeartFill } from "react-icons/bs";

const MainDetail = () => {
  return (
    <>
      <section className="detail">
        <div className="detial-container">
          <div className="detail-left">
            <CheckBox />
          </div>
          <div className="padding">
            <div className="detail-right">
              <div className="det-left">
                {HeroData.map((planed, i) => (
                  <div className="hero-left hero back-ground" key={i}>
                    <div className="hro-heading">
                      <span className="primary-heading">{planed.heading1}</span>
                      <span className="primary-heading">{planed.heading2}</span>
                    </div>
                    <div className="hero-text">
                      <span className="primary-text">{planed.detail1}</span>
                      <span className="primary-text">{planed.detail2}</span>
                    </div>
                    {/* <button className="btn hero-btn">{planed.button}</button> */}
                    <div className="absolute">
                      <img src={img} alt="" />
                    </div>
                  </div>
                ))}
                <div className="small-pic">
                  <img src={one} alt="" />
                  <img src={two} alt="" />
                  <img src={three} alt="" />
                </div>
              </div>
              <div className="det-right">
                <div className="detail-header">
                  <div>
                    <h1 className="primary-heading2">Nissan GT - R</h1>
                    <div className="star">
                      <div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                      <span className="fourth-text">440+ Reviewer</span>
                    </div>
                  </div>
                  <BsHeartFill />
                </div>
                <span className="secondary-heading2 detail-detail">
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </span>
                <div className="type-detail">
                  <div>
                    <span className="">Type Car</span>
                    <span>Sport</span>
                  </div>
                  <div>
                    <span className="">Capacity</span>
                    <span>2 Person</span>
                  </div>
                  <div>
                    <span className="">Steering </span>
                    <span>Manual</span>
                  </div>
                  <div>
                    <span className="">Gasoline</span>
                    <span>70L</span>
                  </div>
                </div>
                <div className="detail-footer">
                  <div className="discount">
                    <div>
                      <span className="secondary-price">$80.00/</span>
                      <span className="third-day">days</span>
                    </div>
                    <span className="third-day">$100.00</span>
                  </div>
                  <button className="btns detail-footer-btn">Rent Now</button>
                </div>
              </div>
            </div>
       
              <Review />
              <RecentCars name='Recent Car' />
              <RecentCars name='Recomendation Car' />
     
          </div>
        </div>
      </section>
    </>
  );
};

export default MainDetail;
