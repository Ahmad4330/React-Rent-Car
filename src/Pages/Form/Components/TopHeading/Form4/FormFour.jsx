import React from "react";
import "./formFour.css";

import TopHeading from "../TopHeading";
import safe from "./safe.png";

const FormFour = () => {
  return (
    <>
      <section className="from-four">
        <TopHeading />
        <div className="last-form">
          <div className="agree">
            <input type="checkbox" />
            <span className="third-heading1">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </span>
          </div>
        </div>
        <div className="last-form">
          <div className="agree">
            <input type="checkbox" />
            <span className="third-heading1">
              I agree with our terms and conditions and privacy policy.
            </span>
          </div>
        </div>
        <button className="btn colourr">Rent Now</button>
        <div className="last-form-section">
          <img src={safe} alt="" />
          <section className="top-headig ">
            <div className="last-safe">
              <p className="secondary-heading">All your data are safe</p>
              <span className="fourth-text">
              We are using the most advanced security to provide you the best experience ever.
              </span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default FormFour;
