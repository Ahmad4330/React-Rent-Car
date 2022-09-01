import React from "react";
import "./Review.css";
import Reviews from "./reviews/reviews";

import boy from "./boy.png";
import girl from "./girl.png";
import { BsChevronDown } from "react-icons/bs";

const Review = () => {
  return (
    <>
      <section className="review">
        <div className="review-container">
          <div className="review-top">
            <h3 className="secondary-heading2">Reviews</h3>
            <div>
              <span className="third-text review-span">13</span>
            </div>
          </div>
          <div>
            <Reviews
              boy={boy}
              name="Alex Stanton"
              post="CEO at Bukalapak"
              date="21 July 2022"
              comment="We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities."
            />
            <Reviews
              boy={girl}
              name="Skylar Dias"
              post="CEO at Amazon"
              date="20 July 2022"
              comment="We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities."
            />
            <div className="review-btns">
              <button className="btns review-btn">
                Show All <BsChevronDown />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
