import InnerHeader from "common/components/InnerHeader";
import React, { useEffect, useState } from "react";
import c1 from "assets/images/categories/categories1.webp";
import { useDispatch } from "react-redux";
import { fetchUserProfileAction } from "redux/User/authAction";
import SignIn from "../../authentication/SignIn";
import { Tabs, Row, Col } from "antd";
import TabPane from "antd/lib/tabs/TabPane";
import { useFormik } from "formik";
import Header from "common/components/Header";
import FooterPage from "common/components/Footer";

function Profile() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  let user = JSON.parse(localStorage.getItem("PROFILE_USER"));

  const fetchUserProfile = async () => {
    await dispatch(fetchUserProfileAction());
  };

  const onDelete = async (maKhoaHoc,taiKhoan) => {

  }

  const formik = useFormik({
    initialValues: {
      taiKhoan: user?.taiKhoan,
      matKhau: user?.matKhau,
      hoTen: user?.hoTen,
      email: user?.email,
      soDT: user?.soDT,
      maLoaiNguoiDung: user?.maLoaiNguoiDung,
      maNhom: user?.maNhom,
    },
    onSubmit: (values) => {
      values.maNhom = "GP01";
    },
  });

  const onEdit = () => {
    setIsEditing(true);
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    fetchUserProfile();
  }, [user]);

  return (
    <>
      <Header />
      <InnerHeader />
      <section className="space-pb teacher-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xl-4 position-relative z-index-1 mt-n5">
              <img className="img-fluid" src={c1} alt="" />
              <div className="border border-top-0 py-4 py-sm-5">
                <ul className="ps-0 mb-0">
                  <li className="d-flex align-items-center px-4 mb-4">
                    <i className="flaticon-mail-1 fa-3x mt-2 text-light me-3" />
                    <span className="h6 text-light fw-normal mb-0">
                      {user?.hoTen}
                    </span>
                  </li>
                  <li className="d-flex align-items-center px-4 mb-4">
                    <i className="flaticon-phone fa-3x mt-2 text-light me-3" />
                    <span className="h6 text-light fw-normal mb-0">
                      {user?.taiKhoan}
                    </span>
                  </li>
                  <li className="d-flex align-items-center px-4 mb-4">
                    <i className="flaticon-skype fa-3x mt-2 text-light me-3" />
                    <span className="h6 text-light fw-normal mb-0">
                      {user?.email}
                    </span>
                  </li>
                  <li className="d-flex align-items-center px-4 mb-4">
                    <i className="flaticon-link fa-3x mt-2 text-light me-3" />
                    <span className="h6 text-light fw-normal mb-0">
                      {user?.soDT}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="social-icon-round mt-4 mt-sm-5">
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
            <div className="col-md-7 col-xl-8 space-sm-pt">
              <h2>{user?.hoTen}</h2>
              <span className="text-primary lead fw-bold">
                {user?.maLoaiNguoiDung === "HV" ? "HỌC VIÊN" : "Anonymous"}
              </span>

              <Tabs>
                <TabPane tab="Setting" key="item-1">
                  <div
                    className="fade show"
                    id="register"
                    role="tabpanel"
                    aria-labelledby="register-tab"
                  >
                    <form
                      onSubmit={formik.handleSubmit}
                      className="row mt-4 mb-4 mb-sm-5 align-items-center form-flat-style"
                    >
                      <div className="mb-3 col-sm-12">
                        <label className="form-label">Username:</label>
                        <input
                          name="taiKhoan"
                          onChange={formik.handleChange}
                          value={formik.values.taiKhoan}
                          type="text"
                          className="form-control"
                          placeholder
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="mb-3 col-sm-12">
                        <label className="form-label">Fullname:</label>
                        <input
                          name="hoTen"
                          onChange={formik.handleChange}
                          value={formik.values.hoTen}
                          type="text"
                          className="form-control"
                          placeholder
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="mb-3 col-sm-12">
                        <label className="form-label">Email Address:</label>
                        <input
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          type="text"
                          className="form-control"
                          placeholder
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="mb-3 col-sm-12">
                        <label className="form-label">Phonenumber:</label>
                        <input
                          name="soDT"
                          onChange={formik.handleChange}
                          value={formik.values.soDT}
                          type="text"
                          className="form-control"
                          placeholder
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="mb-3 col-sm-12">
                        <label className="form-label">Password:</label>
                        <input
                          name="matKhau"
                          onChange={formik.handleChange}
                          value={formik.values.matKhau}
                          type="Password"
                          className="form-control"
                          placeholder
                          disabled={!isEditing}
                        />
                      </div>
                      {isEditing ? (
                        <>
                          <div className="col-sm-6 d-grid">
                            <button
                              type="submit"
                              className="btn btn-danger btn-flat"
                              onClick={() => onCancel()}
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="col-sm-6 d-grid">
                            <button
                              type="submit"
                              className="btn btn-primary btn-flat"
                            >
                              Save
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="col-sm-6 d-grid">
                          <button
                            type="submit"
                            className="btn btn-primary btn-flat"
                            onClick={() => onEdit()}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </TabPane>
                <TabPane tab="Course" key="item-2">
                  <div className="table-responsive">
                    <table className="table table-striped border mb-4">
                      <thead>
                        <tr>
                          <th>Course name</th>
                          <th>ID Course</th>
                          <th>Start date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user?.chiTietKhoaHocGhiDanh.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.tenKhoaHoc}</td>
                              <td>{item.maKhoaHoc}</td>
                              <td>{item.ngayTao}</td>
                              <td>
                                <button onClick={() => onDelete(item.maKhoaHoc,user.taiKhoan)} className="btn-danger">Delete</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
}

export default Profile;
