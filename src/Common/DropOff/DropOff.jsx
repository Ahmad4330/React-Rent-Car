import React from "react";
import "./DropOff.css";
import Card from "./SectionDropOff";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
// import { DropOffData } from "./DropOffData";

const DropOff = () => {
  return (
    <>
      <section className="drop-off">
        <div className="container dropOff-container">
          <Card>
            <div className="pick">
              <div></div>
              <span className="third-heading2">Pick-Up</span>
            </div>
            <div className="pick-detail">
              <div className="location div">
                <span className="third-heading1">Location</span>
                <div>
                  <span className="secondary-text">Select Your City</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="date div">
                <span className="third-heading1">Date</span>
                <div>
                  <span className="secondary-text">Select Your Date</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="time div">
                <span className="third-heading1">Time</span>
                <div>
                  <span className="secondary-text">Select Your Time</span>
                  <BiChevronDown />
                </div>
              </div>
            </div>
          </Card>

          <div className="center">
            <BsArrowUp/>
            <BsArrowDown/>
          </div>

          <Card>
            <div className="drop">
              <div></div>
              <span className="third-heading2">Drop-Off</span>
            </div>
            <div className="pick-detail">
              <div className="location div">
                <span className="third-heading1">Location</span>
                <div>
                  <span className="secondary-text">Select Your City</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="date div">
                <span className="third-heading1">Date</span>
                <div>
                  <span className="secondary-text">Select Your Date</span>
                  <BiChevronDown />
                </div>
              </div>
              <div className="time div">
                <span className="third-heading1">Time</span>
                <div>
                  <span className="secondary-text">Select Your Time</span>
                  <BiChevronDown />
                </div>
              </div>
            </div>
          </Card>

          {/* <div className="cards">
            {DropOffData.map((planed, i) => (
              <div key={i}>
                <Card>
                  <div className="pick">
                    <div></div>
                    <span className="third-heading2">{planed.heading1}</span>
                  </div>
                  <div className="pick-detail">
                    <div className="location div">
                      <span className="third-heading1">{planed.heading2}</span>
                      <div>
                        <span className="secondary-text">{planed.detail1}</span>
                        {planed.image}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default DropOff;
