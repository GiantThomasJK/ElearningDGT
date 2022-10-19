import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { signInAtion } from "redux/User/authAction";
import { useHistory } from "react-router-dom";
function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    onSubmit: async (values) => {
        await dispatch(signInAtion(values));
        history.push("/");
    },
  });
  return (
    <div
      className="tab-pane fade show active"
      id="login"
      role="tabpanel"
      aria-labelledby="login-tab"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit(event);
        }}
        className="row mt-4 mb-4 mb-sm-5 align-items-center form-flat-style"
      >
        <div className="mb-3 col-sm-12">
          <label className="form-label">Username:</label>
          <input
            name="taiKhoan"
            onChange={formik.handleChange}
            type="text"
            className="form-control"
            placeholder
          />
        </div>
        <div className="mb-3 col-sm-12">
          <label className="form-label">Password:</label>
          <input
            name="matKhau"
            onChange={formik.handleChange}
            type="Password"
            className="form-control"
            placeholder
          />
        </div>
        <div className="col-sm-6 d-grid">
          <button type="submit" className="btn btn-primary btn-flat">
            Sign in
          </button>
        </div>
        <div className="col-sm-6">
          <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3 justify-content-sm-end">
            <li className="me-1">
              <a className="text-dark" href="#">
                Don't have an account? Click here
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
      </div>
    </div>
  );
}

export default SignIn;
