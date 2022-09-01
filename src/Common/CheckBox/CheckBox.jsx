import React from "react";
import "./CheckBox.css";


// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { PopularData } from "../../Pages/Home-Page/Components/PopularCars/PopularData";
import { useRef } from "react";

const CheckBox = ({ fillterItem, setItem, item }) => {
  const valuee = useRef()
  // Our States
  const [value, setValue] = React.useState([0, 10]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };


  return (
    <>
      <section className="check-section">
        <div>
          <h3 className="secondary-text type">T Y P E</h3>
          <div className="check-boxs">
           
              <div className="check-box">
                <label class="containeer">
                  <input
                    type="checkbox"
                    onClick={() => fillterItem("Sport")}
                    value
                  />
                  <span class="checkmark"></span>
                </label>
                <p className="secondary-heading2 check-color">Sport</p>
               </div>
                <div className="check-box">
                <label class="containeer">
                  <input type="checkbox" onClick={() => fillterItem("Sedan")} />
                  <span class="checkmark"></span>
                </label>
                <p className="secondary-heading2 check-color">SUV</p>
              </div>
              <div className="check-box">
                <label class="containeer">
                  <input type="checkbox" onClick={() => setItem(PopularData)} />
                  <span class="checkmark"></span>
                </label>
                <p className="secondary-heading2 check-color">MPV</p>
              </div>
              <div className="check-box">
                <label class="containeer">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <p className="secondary-heading2 check-color">Couple</p>
              </div>
              <div className="check-box">
                <label class="containeer">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <p className="secondary-heading2 check-color">Hatchback</p>
              </div>
              <div className="check-box">
                <label class="containeer">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <p className="secondary-heading2 check-color">Sedan</p>
              </div>
              <div className="check-box">
                <label class="containeer">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <p className="secondary-heading2 check-color">SUV</p>
              </div>
          
          </div>
        </div>
        <div>
          <h3 className="secondary-text type">T Y P E</h3>
          <div className="check-boxs">
            <div className="check-box">
              <label class="containeer">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <p className="secondary-heading2 check-color">2 Person</p>
            </div>
            <div className="check-box">
              <label class="containeer">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <p className="secondary-heading2 check-color">4 Person</p>
            </div>
            <div className="check-box">
              <label class="containeer">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <p className="secondary-heading2 check-color">6 Person </p>
            </div>
            <div className="check-box">
              <label class="containeer">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <p className="secondary-heading2 check-color">8 or More</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="secondary-text type">PRICE</h3>

          <div className="price-div">
            <Slider
              value={value}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
              ref={valuee}
            />
            <span className="secondary-heading2">
              Max
              {value[10]} {value[1]} $
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckBox;
