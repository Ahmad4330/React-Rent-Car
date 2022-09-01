import React from 'react'
import './DropOff.css'

import { BiChevronDown } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";

const DropOff = () => {
  return (
    <>
      <section className="drop-offf">
        <div className="container dropOff-containerr">
          <div className='Card'>
            <div className="pick">
              <div></div>
              <span className="third-heading2">Pick-Up</span>
            </div>
            <div className="piick-detail">
              <div className="locaation diiv">
                <span className="third-heading1">Location</span>
                <div>
                  <span className="secondary-text">Select Your City</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="daate diiv">
                <span className="third-heading1">Date</span>
                <div>
                  <span className="secondary-text">Select Your Date</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="time diiv">
                <span className="third-heading1">Time</span>
                <div>
                  <span className="secondary-text">Select Your Time</span>
                  <BiChevronDown />
                </div>
              </div>
            </div>
          </div>

          <div className="centerr">
            <BsArrowUp/>
            <BsArrowDown/>
          </div>

          <div className='Card'>
            <div className="drop">
              <div></div>
              <span className="third-heading2">Drop-Off</span>
            </div>
            <div className="piick-detail">
              <div className="locaation diiv">
                <span className="third-heading1">Location</span>
                <div>
                  <span className="secondary-text">Select Your City</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="daate diiv">
                <span className="third-heading1">Date</span>
                <div>
                  <span className="secondary-text">Select Your Date</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="time diiv">
                <span className="third-heading1">Time</span>
                <div>
                  <span className="secondary-text">Select Your Time</span>
                  <BiChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DropOff
