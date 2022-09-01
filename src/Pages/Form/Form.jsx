import React from 'react'
// import Header from '../../Common/Header/Header'
import MainForm from './Components/1/MainForm'
import Footer from '../Home-Page/Components/Footer/Footer'
import HeaderTwo from '../../Common/Header2/HeaderTwo'


const Form = () => {
  return (
    <>
      <HeaderTwo/> 
      {/* <Header showInput={true}/> */}
      <MainForm/>
      <Footer/>
    </>
  )
}

export default Form
