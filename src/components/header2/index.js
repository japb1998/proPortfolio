import React from "react";
import { Link } from "react-router-dom";


const Header2 = (props) => {
  return (
    <div className={`header-style-1 ${props.headerclass}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" title="">
              <img src={props.Logo} alt="" />
            </Link>
          </div>
          <nav className="d-lg-block d-none header-b">
            <ul>
              <li>
                <Link className="active" to="/home" title="">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <MobileMenu/> */}
      </div>
    </div>
  );
};

export default Header2;
