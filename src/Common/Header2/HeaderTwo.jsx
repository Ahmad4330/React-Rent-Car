import React from 'react'
import './HeaderTwo.css'

import { Link } from "react-router-dom";


import header from "./header.png";
import svg from "./filter.svg";
import heart from "./heart.svg";
import notification from "./notification.svg";
import setting from "./setting.svg";
import search from './search.svg'

const HeaderTwo = () => {
  return (
    <>
           <header className='header-two'>
        <div className="headers">
          <div className="header-left">
            <h3 className="logo-heading">Morent</h3>
            <div className="search-bar hideeee">
              <img src={search} alt="" />
              <input type="text" placeholder="Search something here" />
              <img src={svg} alt="" className="setting-hide"/>
            </div>
          </div>
          <div className="header-right">
            <div>
              <Link to="/">
                <img src={heart} alt="" />
              </Link>
            </div>
            <div>
              <Link to="/Category">
                <img src={notification} alt="" />
              </Link>
            </div>
            <div>
              <Link to="/Details">
                <img src={setting} alt="" />
              </Link>
            </div>

            <Link to="/Form">
              <img src={header} alt="" className="head-img"/>
            </Link>
            <Link to="/Form">
              <div className="important hideeeee">
              <img src={svg} alt="" className="setting-img hideeee"/>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderTwo
