import React from "react";
import { useState } from "react";
import "./Category.css";

import Checkbox from "../../../../Common/CheckBox/CheckBox";
import DropOff from "./DropOff";
import { PopularData } from "./PopularData";
import CatgoriesPro from "./CatgoriesPro";

const Catgories = (props) => {
  const [item, setItem] = useState(PopularData);

  const fillterItem = (category) => {
    const UpdatedItems = PopularData.filter((current) => {
      return current.heading2 === category;
    });

    setItem(UpdatedItems);
  };

  return (
    <>
      <section className="category">
        <div className="category-container">
          <div className="category-left">
            <button onClick={() => fillterItem("Sport")}>Sport</button>
            <button onClick={() => fillterItem("Sedan")}>Sedan</button>
            <button onClick={() => setItem(PopularData)}>All</button>

            <Checkbox fillterItem={fillterItem} setItem={setItem} item={item} />
          </div>
          <div className="category-right">
            <DropOff />

            <div className="catogary-items">
              {item.map((planed, i) => (
                <div className="main main222" key={i}>
                  <CatgoriesPro
                  key={planed.id}
                   id={planed.id}
                   heading1={planed.heading1}
                   heading2={planed.heading2}
                   imageTop={planed.imageTop}
                   fuel={planed.fuel}
                   streeting={planed.streeting}
                   people={planed.people}
                   detail1={planed.detail1}
                   detail2={planed.detail2}
                   detail3={planed.detail3}
                   price={planed.price}
                   day={planed.day}
                   button={planed.button}
                   discount={planed.discount}
                   />
                </div>
              ))}
            </div>
            <div className="right-btn">
              <button className="btns cat-btn">Show more car</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catgories;
