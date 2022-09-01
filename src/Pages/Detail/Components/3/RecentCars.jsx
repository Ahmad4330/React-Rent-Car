import React from "react";
import "./RecentCars.css";

import RecentPro from "./RecentPro";
import { PopularData } from "./PopularData";

const RecentCars = ({name}) => {
  return (
    <>
      <section className="recent">
        <div className="recent-container">
          <div className="top-headings">
            <span className="third-heading2 colors">{name}</span>
            <span className="third-heading2 color">View All</span>
          </div>
          <div className="catogary-items">
            {PopularData.map((planed, i) => (
              <div className="main main222" key={i}>
                <RecentPro planed={planed}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentCars;
