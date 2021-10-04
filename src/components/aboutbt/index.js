import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'

import abimg from '../../images/about/about.png'

const Abmain = () => {
    return (
      <div className="wpo-about-item">
        <div className="row">
          <div className="col-lg-6">
            <div className="wpo-about-img">
              <img src={abimg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wpo-about-text">
              <h2>MERN Full Stack Developer</h2>
              <p>
                Full stack web developer with experience in customer service,
                strengths in front-end functionality and backend logic, strong
                problem-solving skills with the ability to combine creativity
                with logic. Stellar communication skills with ability to connect
                with people and provide excellent service.{" "}
              </p>
              <Link to="/about" className="theme-btn">
                Lets Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Abmain;