import Login from "features/pages/Login";
import Register from "features/authentication/Register";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { SET_PROFILE, signInAtion } from "redux/User/authAction";
import logo from "assets/images/home/logoLearn.png";
import "../../../scss/style.scss";

function Header() {
  const [sticky, setSticky] = useState(false);
  const history = useHistory();
  let user = {};
  let categories = {};
  const dispatch = useDispatch();
  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  if (localStorage.getItem("CATEGORIES")) {
    categories = JSON.parse(localStorage.getItem("CATEGORIES"));
    console.log(categories);
  }
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("PROFILE_USER");
    localStorage.removeItem("token");
    localStorage.removeItem("USER_LOGIN");
    localStorage.removeItem("courseDetails");

    dispatch({
      type: SET_PROFILE,
      payload: null,
    });
    history.push("/");
  };
  const renderUserProfile = () => {
    if (localStorage.getItem("USER_LOGIN")) {
      user = JSON.parse(localStorage.getItem("USER_LOGIN"));
      return (
        <>
          <li className="dropdown nav-item">
            {/* <a
              style={{ paddingBottom: 50 }}
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user ps-2 text-primary" />
              Hi, {user.taiKhoan}
            </a> */}

            <ul className="nav navbar-nav">
              <li className="nav-item dropdown active">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    style={{ marginRight: 4 }}
                    className="fa fa-user ps-2 text-primary"
                  />
                  Hi, {user.taiKhoan}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      to="/profile"
                      className="dropdown-item"
                      href="index.html"
                    >
                      <span>Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleLogout}
                      href="index-02.html"
                    >
                      <span> Log out</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </>
      );
    }

    return (
      <>
        <NavLink style={{ color: "#ffffff" }} to="/login">
          Sign in
          <i className="fa fa-user ps-2 text-primary" />
        </NavLink>
      </>
    );
  };

  return (
    <header
      className={
        sticky
          ? "header header-sticky default-transparent is-sticky"
          : "header header-sticky default-transparent"
      }
    >
      <nav className="navbar navbar-static-top navbar-expand-lg px-3 px-md-5">
        <div className="container-fluid position-relative px-0">
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <i className="fas fa-align-left" />
          </button>
          <NavLink to="/" className="navbar-brand">
            <img className="img-fluid" src={logo} alt="logo" />
          </NavLink>
          <div className="search-category ms-auto">
            <div className="form-group select-border course-category">
              {/* <i className="fa fa-th text-primary me-2" aria-hidden="true" />
              <select className=" basic-select">
                <option selected="selected">Category</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
                <option>IT &amp; software</option>
                <option>Photography</option>
                <option>Music</option>
                <option>Personal Development</option>
                <option>Business</option>
              </select> */}
              {/* <span
                className="select2 select2-container select2-container--default select2-container--below select2-container--focus"
                dir="ltr"
                data-select2-id={2}
                style={{ width: "170.8px" }}
              >
                <span className="selection">
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex={0}
                    aria-labelledby="select2-d7rl-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-d7rl-container"
                      role="textbox"
                      aria-readonly="true"
                      title="Category"
                    >
                      Category
                    </span>
                    <span
                      className="select2-selection__arrow"
                      role="presentation"
                    >
                      <b role="presentation" />
                    </span>
                  </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true" />
              </span> */}
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search Courses..."
            />
            <button className="search-button" type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item dropdown active">
                <a
                  className="nav-link"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
              </li>
              <li className="dropdown nav-item">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="dropdown"
                >
                  Course
                  <i className="fas fa-chevron-down fa-xs" />
                </a>
                <ul className="dropdown-menu megamenu ">
                  <li>
                    <div className="row g-0">
                      <div className="col-sm-6">
                        <h6 className="nav-title">Course Pages</h6>
                        <ul className="list-unstyled mt-lg-1">
                          {/* {categories.map((item,index) =>{
                            return(
                              <li>
                              <a
                                className="dropdown-item"
                                href="#"
                              >
                                <span>{item.tenDanhMuc}</span>
                              </a>
                            </li>
                            )
                          })} */}
                          <li>
                            <a className="dropdown-item" href="#">
                              <span>{categories[0].tenDanhMuc}</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <span>{categories[1].tenDanhMuc}</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <span>{categories[2].tenDanhMuc}</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <span>{categories[3].tenDanhMuc}</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <span>{categories[4].tenDanhMuc}</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <span>{categories[5].tenDanhMuc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="dropdown"
                >
                  Pages
                  <i className="fas fa-chevron-down fa-xs" />
                </a>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <div className="row g-0">
                      <div className="col-sm-6 col-md-4">
                        <h6 className="nav-title">Basic Pages</h6>
                        <ul className="list-unstyled mt-lg-1">
                          <li>
                            <a className="dropdown-item" href="/">
                              <span>Home</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              <span>Course</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/profile">
                              <span>Profile</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/login">
                              <span>Login</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="dropdown"
                >
                  Contact us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                  <i className="fas fa-chevron-down fa-xs" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {/* <a className="dropdown-item" href="shop.html">
                      <span>Shop</span>
                    </a> */}
                  </li>
                  <li>
                    <a className="dropdown-item" href="cart.html">
                      <span>Cart</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="checkout.html">
                      <span>Checkout</span>
                    </a>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="shop-single.html">
                      <span>Shop single</span>
                    </a> */}
                  </li>
                </ul>
              </li>
              {/* <li>
                <a className="nav-link" href="contact-us.html">
                  Contact us
                </a>
              </li> */}
            </ul>
          </div>
          <div className="woo-action">
            <ul className="list-unstyled">
              <li className="user">{renderUserProfile()}</li>
              <div
                className="modal login fade"
                id="loginModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <h5 className="modal-title" id="loginModalLabel">
                        Log in &amp; Register
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <ul
                        className="nav nav-tabs nav-tabs-02 justify-content-center"
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
                            <span> Log in</span>
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
                            <span>Register</span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        {/* <Login />
                        <Register /> */}
                        {/* Login
                        Register */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <li className="cart dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="cart-icon">
                    <i className="fas fa-shopping-cart" />
                  </span>
                </button>
                {/* <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <ul className="cart-list ps-0">
                    <li className="d-flex">
                      <a className="remove-item" href="#">
                        <i className="fas fa-times text-danger" />
                      </a>
                      <img
                        className="img-fluid me-3"
                        src="images/shop/01.jpg"
                        alt
                      />
                      <div className="cart-info">
                        <a href="#">
                          Landscape Visitors Book - 122 Pages, A Design, A4
                        </a>
                        <span className="d-block">1 x 12.49</span>
                      </div>
                    </li>
                    <li className="d-flex">
                      <a className="remove-item" href="#">
                        <i className="fas fa-times text-danger" />
                      </a>
                      <img
                        className="img-fluid me-3"
                        src="images/shop/02.jpg"
                        alt
                      />
                      <div className="cart-info">
                        <a href="#">
                          Leather Visitors Notebook True-Ally A4 Faux
                        </a>
                        <span className="d-block">1 x 28.72</span>
                      </div>
                    </li>
                  </ul>
                  <div className="cart-footer">
                    <div className="d-flex mb-3">
                      <b className="me-auto text-dark">Subtotal:</b>
                      <span>$41.21</span>
                    </div>
                    <div className="d-inline-block d-sm-flex">
                      <a
                        className="btn btn-sm btn-primary text-white me-2 px-4"
                        href="#"
                      >
                        View cart
                      </a>
                      <a
                        className="btn btn-sm btn-dark text-white ms-0 mt-1 mt-sm-0 ms-sm-2 px-4"
                        href="#"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
