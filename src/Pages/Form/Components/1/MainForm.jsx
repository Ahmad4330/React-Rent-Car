import React from 'react'
import './MainForm.css'

import LeftDetail from '../2/LeftDetail'
import FormOne from '../TopHeading/Form1/FormOne'
import Formtwo from '../TopHeading/Form2/Formtwo'
import FormThree from '../TopHeading/Form3/FormThree'
import FormFour from '../TopHeading/Form4/FormFour'

const MainForm = (props) => {

  const submithandler = (event) => {
    event.preventDefault();
    
  }

  return (
    <>
    <section className="form">
      <div className="form-left">
        <form action="" onSubmit={submithandler}>
        <FormOne/>
        <Formtwo/>
        <FormThree/>
        <FormFour/>
        </form>
      </div>
      <div className="form-right">
        <LeftDetail/>
      </div>
    </section>
      
    </>
  )
}

export default MainForm
