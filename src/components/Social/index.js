import React from "react";
import "./style.css";

const SocialBr = () => {
  return (
    <div className="social-tab">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12d col-12">
          <a target="_blank" href="https://www.facebook.com/juan.shaw.7161">
            <div className="wpo-social-wrap">
              <div className="wpo-social-icon">
                <i className="fa fa-facebook"></i>
              </div>
              <div className="wpo-social-text">
                <h2>Facebook</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  col-12">
          <a target="_blank" href="https://www.instagram.com/japb1802/">
            <div className="wpo-social-wrap">
              <div className="wpo-social-icon-2">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
              <div className="wpo-social-text">
                <h2>Instagram</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <a target="_blank" href="https://twitter.com/JAVIERP53482346">
            <div className="wpo-social-wrap">
              <div className="wpo-social-icon-3">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div className="wpo-social-text">
                <h2>Twitter</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <a target="_blank" href="https://github.com/japb1998">
            <div className="wpo-social-wrap">
              <div className="wpo-social-icon-4">
                <i class="fa fa-github"></i>
              </div>
              <div className="wpo-social-text">
                <h2>Github</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <a target="_blank" href="linkedin.com/in/javier-perez-a0b0a81b3">
            <div className="wpo-social-wrap">
              <div className="wpo-social-icon-5">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
              <div className="wpo-social-text">
                <h2>Linkedin</h2>
              </div>
            </div>
          </a>
        </div>
        {/* <div className="col-lg-4 col-md-6 col-sm-6 custom-grid col-12">
                    <div className="wpo-social-wrap">
                        <div className="wpo-social-icon-6">
                            <i className="fa fa-behance" aria-hidden="true"></i>
                        </div>
                        <div className="wpo-social-text">
                            <h2>Behance</h2>
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default SocialBr;
