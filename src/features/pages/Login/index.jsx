import FooterPage from "common/components/Footer";
import Header from "common/components/Header";
import React from "react";
import SignIn from "../../authentication/SignIn";
import background from "assets/images/inner/background.webp";
import Register from "features/authentication/Register";

function Login() {
  return (
    <>
      <Header />
      <section
        className="inner-header bg-holder bg-overlay-black-90"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <h1 className="breadcrumb-title mb-0 text-white">Login</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb d-flex justify-content-center justify-content-md-end ms-auto">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fas fa-home me-1" />
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  <span>Login</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

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
                <Register />
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
