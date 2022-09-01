import React from "react";
import "./FormThree.css";

import TopHeading from "../TopHeading";
import mark from "./Mark.png";
import visa from "./Visa.png";
import paypal from "./PayPal.png";
import bitcoin from './Bitcoin.png'

const FormThree = () => {
  return (
    <>
      <section className="from-three">
        <TopHeading />
        <div className="visa">
          <div className="visa-heading">
            <div>
              <img src={mark} alt="" />
              <span className="third-heading2">Credit Card</span>
            </div>
            <img src={visa} alt="" />
          </div>
          <div className="forms">
            <div>
              <div>
                <label htmlFor="" className="third-heading2">
                  Card Number
                </label>
                <div className="input-width change">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="first-form visa-change"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="third-heading2">
                  Card Holder
                </label>
                <div className="input-width change">
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="first-form visa-change"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="" className="third-heading2">
                  Expration Date
                </label>
                <div className="input-width change">
                  <input
                    type="number"
                    placeholder="DD /MM /YY"
                    className="first-form visa-change"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="third-heading2">
                  CVC
                </label>
                <div className="input-width change">
                  <input
                    type="text"
                    placeholder="CVC"
                    className="first-form visa-change"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paypal">
          <div>
            <input type="radio" />
            <span className="third-heading2">payPal</span>
          </div>
          <img src={paypal} alt="" />
        </div>
        <div className="paypal">
          <div>
            <input type="radio" />
            <span className="third-heading2">bitcoin</span>
          </div>
          <img src={bitcoin} alt="" />
        </div>
      </section>
    </>
  );
};

export default FormThree;
