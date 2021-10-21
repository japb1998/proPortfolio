import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll";
import logo from '../../images/logo-javier.png'
const Footer = (props) => {
    return (
      <div className={`wpo-footer-area ${props.Ftclass}`}>
        <div className="container">
          <div className="wpo-footer-top">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                <div className="footer-logo">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-9 col-sm-9 col-12">
                <div className="wpo-footer-menu">
                  <ul>
                    <li>
                      <ScrollLink
                        to="about"
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        About
                      </ScrollLink>
                    </li>
                    <li>
                      {" "}
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
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="wpo-footer-social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/juan.shaw.7161"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/JAVIERP53482346"
                        target="_blank"
                      >
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/japb1802/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`wpo-footer-bottom ${props.Fbclass}`}>
                <span>© 2020 Follio. All rights reserved</span>
            </div> */}
      </div>
    );
}

export default Footer;