import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-container">
          <div className="footer-left">
            <h1 className="primary-heading2">
            MORENT
            </h1>
            <div>
            <p className="primary-text fter-text">Our vision is to provide convenience</p>
            <p className="primary-text fter-text"> and help increase your sales business.</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footr">
              <h3 className="secondary-heading2">About</h3>
              <div>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Bussiness Relation</li>
              </div>
            </div>
            <div className="footr">
              <h3 className="secondary-heading2">Community</h3>
              <div>
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </div>
            </div>
            <div className="footr">
              <h3 className="secondary-heading2">Socials</h3>
              <div>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </div>
            </div>
          </div>

      
        </div>
        <div className="container">
          <hr />
          <div className="last">
            <div className="last-left">
              <p className='third-heading2'>©2022 MORENT. All rights reserved</p>
            </div>
            <div className="last-right">
              <p className='third-heading2'>Privacy & Policy</p>
              <p className='third-heading2'>Terms & Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
