import React from "react";
import "./Formtwo.css";
import mark from './Mark.png'
import mark2 from './Mark2.png'

import TopHeading from "../TopHeading";
import { BsChevronDown } from 'react-icons/bs';

const Formtwo = () => {
  return (
    <>
      <section className="from-two">
        <TopHeading />
        <div className="pickupp">
          <img src={mark} alt="" />
          <span className="third-heading2">Pick Up</span>
        </div>
        <div className="forms">
          <div>
            <div>
              <label htmlFor="" className="third-heading2">
                Locations
              </label>
              <div className="input-width">
                <input
                  type="text"
                  placeholder="Select your city"
                  className="first-form"
                />
                <BsChevronDown/>
              </div>
            </div>
            <div>
              <label htmlFor="" className="third-heading2">
                Date
              </label>
              <div className="input-width">
                <input
                  type="text"
                  placeholder="Select your date"
                  className="first-form"
                />
                <BsChevronDown/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="" className="third-heading2">
                Time
              </label>
              <div className="input-width">
                <input
                  type="number"
                  placeholder="Select Your Time"
                  className="first-form"
                />
                <BsChevronDown/>
              </div>
            </div>
            <div>
 
            </div>
          </div>
        </div>



        <div className="pickupp">
          <img src={mark2} alt="" />
          <span className="third-heading2">Drop-Off</span>
        </div>
        <div className="forms">
          <div>
            <div>
              <label htmlFor="" className="third-heading2">
                Locations
              </label>
              <div className="input-width">
                <input
                  type="text"
                  placeholder="Select your city"
                  className="first-form"
                />
                <BsChevronDown/>
              </div>
            </div>
            <div>
              <label htmlFor="" className="third-heading2">
                Date
              </label>
              <div className="input-width">
                <input
                  type="text"
                  placeholder="Select your date"
                  className="first-form"
                />
                <BsChevronDown/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="" className="third-heading2">
                Time
              </label>
              <div className="input-width">
                <input
                  type="number"
                  placeholder="Select Your Time"
                  className="first-form"
                />
                <BsChevronDown/>
              </div>
            </div>
            <div>
 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formtwo;
