import React, { useRef } from "react";
import './FormOne.css'
import { useDispatch } from "react-redux";
import { FormAction } from "../../../../../Store/FormSlice";

import TopHeading from "../TopHeading";

const FormOne = (props) => {
  const dispatch = useDispatch()
   const name = useRef('');
   const phone = useRef('');
   const adress = useRef('');
   const city = useRef('');
    


  const forms = {
    namee : name.current.value,
    phonee : phone.current.value,

    // dispatch(FormAction.FormData())
   }
    console.log(forms)

  return (
      <section className="from-one">
    
        <TopHeading />
        <div className="forms">
          <div>
          <div>
            <label htmlFor="" className="third-heading2">Name</label>
            <div className="input-width">
            <input type="text" placeholder="Your name" className="first-form" ref={name}/>
            </div>
          </div>
          <div>
            <label htmlFor="" className="third-heading2">Adress</label>
            <div className="input-width">
            <input type="text" placeholder="Adress" className="first-form" ref={adress}/>
            </div>
          </div>
          </div>
          <div>
          <div>
            <label htmlFor="" className="third-heading2">Phone Number</label>
            <div className="input-width">
            <input type="number" placeholder="Phone Number" className="first-form" ref={phone}/>
            </div>
          </div>
          <div>
            <label htmlFor="" className="third-heading2">Town / City</label>
            <div className="input-width">
            <input type="text" placeholder="Town or City" className="first-form" ref={city}/>
            </div>
          </div>
          <button>Submit</button>
          </div>
        </div>
      </section>
  );
};

export default FormOne;
