import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import { Link as ScrollLink } from "react-scroll";
import "./style.css";
import resume from '../../resume/javier.pdf'
const Header = (props) => {
  return (
    <div className="header-style-1">
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
              {/* <li>
                <Link to="/about" title="">
                  About
                </Link>
              </li> */}
              <li>
                <ScrollLink
                  to="portfolio"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Portfolio
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <div className="contact">
            <div className="cart-search-contact">
              <Link to={resume} target='_blank' download className="theme-btn">
               Download CV
              </Link>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
