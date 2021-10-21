import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import profolio1 from "../../images/protfolio/social-media.png";
import profolio2 from "../../images/protfolio/pandora.png";
import profolio3 from "../../images/protfolio/img-3.jpg";
import profolio4 from "../../images/protfolio/img-4.jpg";

const PortfolioSub = (props) => {
  return (
    <div
      className={`wpo-protfolio-area section-padding ${props.subclass}`}
      id="portfolio"
    >
      <div className="container">
        <div className="col-12">
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="wpo-protfolio-item">
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="wpo-protfolio-left">
                    <div className="wpo-protfolio-single">
                      <div className="wpo-protfolio-img">
                        <img src={profolio1} alt="" />
                      </div>
                      <div className="wpo-protfolio-text">
                        <h2>Social Media App</h2>
                        <span>MERGN Stack App with User Authentication</span>
                        <a
                          target="_blank"
                          href="https://helloworld-social-app.netlify.app/"
                        >
                          View App
                        </a>
                      </div>
                    </div>
                    {/* <div className="wpo-protfolio-single">
                      <div className="wpo-protfolio-img">
                        <img src={profolio2} alt="" />
                      </div>
                      <div className="wpo-protfolio-text">
                        <h2>Pandora</h2>
                        <span>E-commerce app MERN Stack</span>
                        <Link to="/projectDetails">View App</Link>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="wpo-protfolio-right">
                    {/* <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio3} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link to="/projectDetails">View Work</Link>
                                            </div>
                                        </div> */}
                    <div className="wpo-protfolio-single">
                      <div className="wpo-protfolio-img">
                        <img src={profolio2} alt="" />
                      </div>
                      <div className="wpo-protfolio-text">
                        <h2>Pandora</h2>
                        <span>E-commerce app MERN Stack</span>
                        <a
                          target="_blank"
                          href="https://pandora-e-commerce.herokuapp.com/"
                        >
                          View App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="protfolio-btn">
                <Link to="/">Coming soon...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSub;
