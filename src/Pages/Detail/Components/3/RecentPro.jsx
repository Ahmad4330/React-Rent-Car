import React from "react";

import car from "./Car.png";
import { useState } from "react";
import PopularCard from "../../../../Common/Component/PopularCard";

const RecentPro = ({planed}) => {

  const [isActive, setIsActive] = useState(false);

  const FavClick = (val) => {
    console.log("val", val);
    setIsActive((current) => !current);
  };
  return (
    <>
      <PopularCard className="card-class">
        <div className="main">
          <div className="card-top">
            <div className="top-text">
              <p className="secondary-heading">{planed.heading1}</p>
              <span className="third-text">{planed.heading2}</span>
            </div>
            <div
              id="fav"
              style={{
                color: isActive ? "red" : "black",
              }}
              onClick={(i) => FavClick(i)}
            >
              {planed.imageTop}
            </div>
          </div>
          <img src={car} alt="" />
          <div className="set-last">
            <div className="fuel">
              <div>
                {planed.fuel}
                <span className="fourth-text">{planed.detail1}</span>
              </div>
              <div>
                {planed.streeting}
                <span className="fourth-text">{planed.detail2}</span>
              </div>
              <div>
                {planed.people}
                <span className="fourth-text">{planed.detail3}</span>
              </div>
            </div>
            <div className="card-end">
              <div className="discount">
                <div>
                  <span className="secondary-heading">{planed.price}</span>
                  <span className="third-text">{planed.day}</span>
                </div>
                <span className="third-text dsicountt">{planed.discount}</span>
              </div>

              <button className="btns card-btn">{planed.button}</button>
            </div>
          </div>
        </div>
      </PopularCard>
    </>
  );
};

export default RecentPro;
