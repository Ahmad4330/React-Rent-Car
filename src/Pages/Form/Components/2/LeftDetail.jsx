import React from "react";
import "./LeftDetail.css";

import look from "./Look.png";

const LeftDetail = () => {
  return (
    <>
      <section className="form-rightt">
        <div className="right1">
          <p className="secondary-heading right1-top">Rental Summary</p>
          <span className="fourth-text">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </span>
        </div>
        <div className="right2">
          <img src={look} alt="" />
          <div>
            <h3 className="primary-heading2">Nissan GT - R</h3>
            <div className="staaar">
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
        </div>
        <div className="right3">
          <hr className="form-line"/>
        </div>
        <div className="right4">
          <div className="form11">
            <p className="third-heading2 subtotal">Subtotal</p>
            <span className="third-heading2">$80.00</span>
          </div>
          <div className="form11">
          <p className="third-heading2 subtotal">Tax</p>
            <span className="third-heading2">$0</span>
          </div>
        </div>
        <div className="right5">
        <input type="text" placeholder="Apply promo code" className="inputs"/>
        <span className="third-heading2 apply">Apply now</span>
        </div>
        <div className="right6">
          <div>
            <p className="secondary-heading">Total Rental Price</p>
            <span className="fourth-text">Overall price and includes rental discount</span>
          </div>
          <h2 className="primary-heading2 last-color">$80.00</h2>
        </div>
      </section>
    </>
  );
};

export default LeftDetail;
