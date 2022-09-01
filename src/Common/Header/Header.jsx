import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import header from "./header.png";
import svg from "./filter.svg";
import heart from "./heart.svg";
import notification from "./notification.svg";
import setting from "./setting.svg";
import search from "./search.svg";

const Header = ({ showInput }) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="headers">
          <div className="header-left">
            <h3 className="logo-heading">Morent</h3>
            {/* {showInput === !true && (
              <div className="search-bar">
                <img src={search} alt="" />
                <input type="text" placeholder="Search something here" />
                <img src={svg} alt="" className="setting-hide" />
              </div>
            )} */}
              <div className="search-bar">
                <img src={search} alt="" />
                <input type="text" placeholder="Search something here" />
                <img src={svg} alt="" className="setting-hide" />
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
              <img src={header} alt="" className="head-img" />
            </Link>
            <Link to="/Form">
              <div className="important">
                <img src={svg} alt="" className="setting-img" />
              </div>
            </Link>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
