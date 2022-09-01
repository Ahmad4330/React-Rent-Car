import React from 'react';

import Header from '../../Common/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection';
import DropOff from '../../Common/DropOff/DropOff'
import PopularCar from './Components/PopularCars/PopularCar';
import Recmendation from './Components/Recmendation/Recmendation';
import Footer from './Components/Footer/Footer';


function Home() {
  return (
    <React.Fragment>
      <Header/>
      <HeroSection/>
      <DropOff/>
      <PopularCar/>
      <Recmendation/>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
