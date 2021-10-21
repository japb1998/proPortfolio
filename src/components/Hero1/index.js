import React from 'react'
import {Link}  from 'react-router-dom';
import heroimg from '../../images/slider/hero-shape.png'
import myimg from '../../images/slider/myimg.jpg'

import './style.css'

const Hero1 = () => {
    return (
      <section className="wpo-hero-style-2">
        <div className="wpo-slide-wrap">
          <div className="container">
            <div className="row">
              <div className="col col-md-8 slide-caption">
                <h2 className="wow fadeInLeftSlow" data-wow-delay="1.0s">
                  I’m <span>Javier</span> Perez
                </h2>
                <p className="wow fadeInUp" data-wow-delay="1.5s">
                  Web Developer
                </p>
                <div className="bg-social wow fadeInUp" data-wow-delay="2.0s">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/juan.shaw.7161"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://linkedin.com/in/javier-perez-a0b0a81b3"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/japb1802/"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="wpo-slide-right-img">
            <div
              className="slide-img wow fadeInRightSlow"
              data-wow-duration="2000ms"
            >
              <img src={myimg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}
export default Hero1;