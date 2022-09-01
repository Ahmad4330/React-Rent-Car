import React from "react";
import "./PopularCar.css";
import { PopularData } from "./PopularData";
import ProComponent from "./ProComponent";



const PopularCar = () => {


  return (
    <>
      <section className="popular">
        <div className="container popular-container">
          <div className="popular-btns">
            <span className="third-heading2 poplar">Popular Car</span>

            <span className="third-heading2 poplaar">View All</span>
          </div>
          <div className="items">
            {PopularData.map((planed, i) => {
              return (
                <div className="main" key={i}>
                  <ProComponent planed={planed} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCar;
