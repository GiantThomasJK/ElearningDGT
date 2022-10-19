import React from "react";
import bg from "assets/images/bg/05.jpg"
function FooterPage() {
  return (
    <footer className="footer">
      <div
        className="space-ptb bg-overlay-white-97"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="row position-relative">
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <div className="footer-contact-info">
                <div className="footer-logo mb-2">
                  <a href="index.html">
                    <img className="img-fluid" src={bg} alt="" />
                  </a>
                </div>
                <div className="contact-address">
                  <div className="contact-item mb-3 mb-md-4">
                    <p>
                      17504 Carlton Cuevas Rd, <br />
                      Gulfport, MS, 39503
                    </p>
                  </div>
                  <div className="contact-item mb-3 mb-md-4">
                    <h4 className="mb-0 fw-normal">
                      <a href="#">+(704) 16071072</a>
                    </h4>
                  </div>
                  <div className="contact-item">
                    <a href="#">giathinhkg1@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-4 mb-4 mb-lg-0">
              <h5 className="footer-title">Explore</h5>
              <div className="footer-link">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Success story</a>
                  </li>
                  <li>
                    <a href="#">Teachers</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Our news</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 col-lg-2 mb-4 mb-sm-0">
              <h5 className="footer-title">Resources</h5>
              <div className="footer-link">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Donors</a>
                  </li>
                  <li>
                    <a href="#">Educators</a>
                  </li>
                  <li>
                    <a href="#">Professionals</a>
                  </li>
                  <li>
                    <a href="#">Become A Teacher</a>
                  </li>
                  <li>
                    <a href="#">Student Profile</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h5 className="footer-title">Subscribe us</h5>
              <p>
                Sign up to our newsletter to get the latest news and offers.
              </p>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                  />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="social-icon text-md-start text-center mb-3 mb-md-0">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="copyright text-md-end text-center">
                <p className="mb-0 small">
                  © Copyright 2022 <a href>ThinhgiaDoan</a> All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
