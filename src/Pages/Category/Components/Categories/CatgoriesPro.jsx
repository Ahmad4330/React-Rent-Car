import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { DetailAction } from "../../../../Store/DetailSlice";

import car from "./car.png";
import PopularCard from "../../../../Common/Component/PopularCard";

const CatgoriesPro = (props) => {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false);

  const {id,heading1,heading2,imageTop,fuel,streeting,people,detail1,detail2,detail3,price,day,button,discount} =props
 
 
  const FavClick = (val) => {
    console.log("val", val);
    setIsActive((current) => !current);
  };

  
  const Clicked = () => {
    return(
      dispatch(DetailAction.ShowDetail(
        {
          id,
          heading1,
          price
        }
      ))
    )
   
  }

  
  return (
    <>
      <PopularCard className="card-class">
        <div className="main">
          <div className="card-top">
            <div className="top-text">
              <p className="secondary-heading">
                <Link to={`/Check/${id}`} id={id} onClick={Clicked}>
                {heading1}
                </Link>
              </p>
              <p>{id}</p>
              <span className="third-text">{heading2}</span>
            </div>
            <div
              id="fav"
              style={{
                color: isActive ? "red" : "black",
              }}
              onClick={(i) => FavClick(i)}
            >
            {imageTop}
            </div>
          </div>
          <img src={car} alt="" />
          <div className="set-last">
            <div className="fuel">
              <div>
                {fuel}
                <span className="fourth-text">{detail1}</span>
              </div>
              <div>
                {streeting}
                <span className="fourth-text">{detail2}</span>
              </div>
              <div>
                {people}
                <span className="fourth-text">{detail3}</span>
              </div>
            </div>
            <div className="card-end">
              <div className="discount">
                <div>
                  <span className="secondary-heading">{price}</span>
                  <span className="third-text">{day}</span>
                </div>
                <span className="third-text dsicountt">{discount}</span>
              </div>

              <button className="btns card-btn">{button}</button>
            </div>
          </div>
        </div>
      </PopularCard>
    </>
  );
};

export default CatgoriesPro;
