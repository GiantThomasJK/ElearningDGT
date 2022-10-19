import FooterPage from "common/components/Footer";
import Header from "common/components/Header";
import React from "react";
import SignIn from "../../authentication/SignIn";

function Login() {
  return (
    <>
      <Header />
      <section className="space-ptb login">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>Create an account</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 col-sm-11">
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="login-tab"
                    data-bs-toggle="tab"
                    href="#login"
                    role="tab"
                    aria-controls="login"
                    aria-selected="false"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="register-tab"
                    data-bs-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="true"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <SignIn />
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form className="row mt-4 mb-4 mb-sm-5 align-items-center form-flat-style">
                    <div className="mb-3 col-sm-12">
                      <label className="form-label">Username:</label>
                      <input type="text" className="form-control" placeholder />
                    </div>
                    <div className="mb-3 col-sm-12">
                      <label className="form-label">Email Address:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder
                      />
                    </div>
                    <div className="mb-3 col-sm-12">
                      <label className="form-label">Password:</label>
                      <input
                        type="Password"
                        className="form-control"
                        placeholder
                      />
                    </div>
                    <div className="mb-3 col-sm-12">
                      <label className="form-label">Confirm Password:</label>
                      <input
                        type="Password"
                        className="form-control"
                        placeholder
                      />
                    </div>
                    <div className="col-sm-6 d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-flat"
                      >
                        Sign up
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                        <li className="me-1">
                          <a href="#">
                            Already Registered User? Click here to login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </form>
                  <div className="login-social-media border ps-4 pe-4 pb-4 pt-0 rounded-sm">
                    <div className="mb-4 d-block text-center">
                      <b className="bg-white ps-2 pe-2 mt-3 d-block">
                        Login or Sign in with
                      </b>
                    </div>
                    <form className="row">
                      <div className="col-sm-6">
                        <a
                          className="btn facebook-bg social-bg-hover d-block mb-3"
                          href="#"
                        >
                          <span>
                            <i className="fab fa-facebook-f me-2" />
                            Login with Facebook
                          </span>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a
                          className="btn twitter-bg social-bg-hover d-block mb-3"
                          href="#"
                        >
                          <span>
                            <i className="fab fa-twitter me-2" />
                            Login with Twitter
                          </span>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a
                          className="btn instagram-bg social-bg-hover d-block mb-3 mb-sm-0"
                          href="#"
                        >
                          <span>
                            <i className="fab fa-instagram me-2" />
                            Login with Instagram
                          </span>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a
                          className="btn linkedin-bg social-bg-hover d-block"
                          href="#"
                        >
                          <span>
                            <i className="fab fa-linkedin-in me-2" />
                            Login with Linkedin
                          </span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
}

export default Login;
