import React from 'react'
import './HeroComponent.css'
import leftImg from './left-img.png'

const HeroComponent = () => {
  return (
    <>
      <div className='hero'>
      <div className="hro-heading">
              <span className="primary-heading">The Best Platform</span>
              <span className="primary-heading">for Car Rental</span>
            </div>
            <div className="hero-text">
              <span className="primary-text">
                Ease of doing a car rental safely and
              </span>
              <span className="primary-text">
                reliably. Of course at a low price.
              </span>
            </div>
            <button className="btn hero-btn">Rental Car</button>
            <div>
              <img src={leftImg} alt="" />
            </div>
      </div>
    </>
  )
}

export default HeroComponent
