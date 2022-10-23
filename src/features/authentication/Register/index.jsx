import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addUsersAction } from "redux/User/authAction";
import { useHistory } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
    },
    onSubmit: (values) => {
      values.maNhom = "GP01";
      if (localStorage.getItem("USER_LOGIN")) {
      }
      console.log(values);
      handleAddUser(values);
    },
  });

  const handleAddUser = async (user) => {
    await dispatch(addUsersAction(user));
    history.push("/login");
  };

  return (
    <div
      className="tab-pane fade"
      id="register"
      role="tabpanel"
      aria-labelledby="register-tab"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit(event);
        }}
        className="row my-4 align-items-center"
      >
        <div className="mb-3 col-sm-12">
          <label class="form-label">Username:</label>
          <input
            name="taiKhoan"
            onChange={formik.handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-12">
          <label class="form-label">Email Address:</label>

          <input
            onChange={formik.handleChange}
            name="email"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-12">
          <label class="form-label">Full Name:</label>
          <input
            name="hoTen"
            onChange={formik.handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-12">
          <label class="form-label">Phone Number:</label>
          <input
            name="soDT"
            onChange={formik.handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-12">
          <label class="form-label">Password:</label>
          <input
            name="matKhau"
            type="Password"
            onChange={formik.handleChange}
            className="form-control"
          />
        </div>
        <div className="col-sm-6 d-grid">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
        <div className="col-sm-6">
          <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
            <li className="me-1">
              <a className="text-dark" href="#">
                <b>Already Registered User? Click here to login</b>
              </a>
            </li>
          </ul>
        </div>
      </form>
      {/* <div className="login-social-media border ps-4 pe-4 pb-4 pt-0 rounded-sm">
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
            <a className="btn twitter-bg social-bg-hover d-block mb-3" href="#">
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
            <a className="btn linkedin-bg social-bg-hover d-block" href="#">
              <span>
                <i className="fab fa-linkedin-in me-2" />
                Login with Linkedin
              </span>
            </a>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default Register;
