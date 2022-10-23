import React from "react";
import { useDispatch } from "react-redux";
import { RegisterCoureAction } from "redux/Courses/courseAction";
import user1 from "assets/images/inner/user1.jpg";

import swal from "sweetalert";

function CourseDetail() {
  const dispatch = useDispatch();
  let course = {};
  let user = {};
  if (localStorage.getItem("courseDetails")) {
    course = JSON.parse(localStorage.getItem("courseDetails"));
  }
  if (localStorage.getItem("USER_LOGIN")) {
    user = JSON.parse(localStorage.getItem("USER_LOGIN"));
  }

  var registerCourse = {
    maKhoaHoc: course.maKhoaHoc,
    taiKhoan: user.taiKhoan,
  };

  const registerCourseAction = async () => {
    await dispatch(RegisterCoureAction(registerCourse));
  };

  return (
    <div>
      <section className="space-ptb course-details">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xl-8">
              <img className="img-fluid  mb-4" src={course.hinhAnh} alt="" />
              <h4 className="news-title mb-2">{course.tenKhoaHoc}</h4>
              <div className="d-flex align-items-center">
                <span className="text-warning h6 mb-0 me-2">3.5</span>
                <ul className="list-unstyled d-flex mb-0 me-2">
                  <li>
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li>
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li>
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li>
                    <i className="far fa-star text-warning" />
                  </li>
                </ul>
              </div>
              <div>
                <b className="me-2">Created by </b>
                <a href="#">{course.nguoiTao.hoTen}</a>
              </div>
              <ul className="list-unstyled d-sm-flex mt-3 mb-4">
                <li className="d-inline">
                  <a
                    className="btn btn-outline-dark-hover btn-sm me-3 mb-sm-0 mb-3"
                    href="#"
                  >
                    Wishlist
                  </a>
                </li>
                <li className="d-inline social-share">
                  <a
                    className="btn btn-outline-primary-hover btn-sm me-3 mb-sm-0 mb-3"
                    href="#"
                  >
                    Share
                  </a>
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
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-inline">
                  <a className="btn btn-outline-dark-hover btn-sm" href="#">
                    Gift this course
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled d-flex flex-wrap mb-5">
                <li className="course-d-Teacher me-3 me-lg-5 mb-2 mb-lg-0">
                  <div className="d-flex">
                    <img
                      className="me-2 me-lg-3 mt-2"
                      src={user1}
                      alt=""
                    />
                    <div className="d-block">
                      <p className="mb-0">Teacher</p>
                      <span className="lead fw-6 text-dark">
                        {course.nguoiTao.hoTen}
                      </span>
                    </div>
                  </div>
                </li>
                <li className="me-3 me-lg-5 mb-2 mb-lg-0">
                  <div className="d-flex">
                    <i className="flaticon-bookmark fa-3x mt-2 me-2 me-lg-3 text-primary" />
                    <div className="d-block">
                      <p className="mb-0">Categories</p>
                      <span className="lead fw-6 text-dark">
                        {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <i className="flaticon-student fa-3x mt-2 me-2 me-lg-3 text-primary" />
                    <div className="d-block">
                      <p className="mb-0">Students</p>
                      <span className="lead fw-6 text-dark">
                        {course.soLuongHocVien} (Registered)
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">
                  Description
                </h6>
                <div className="p-4 border-top">
                  <span className="lead text-dark fw-6">
                    Course Description
                  </span>
                  <p className="mt-2">{course.moTa}</p>
                </div>
              </div>
              <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">
                  Curriculum
                </h6>
                <div className="p-4 border-top">
                  <span className="lead text-dark fw-6">Overview</span>
                  <ul className="list-unstyled mt-3">
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm me-2 text-primary" />
                      <span className="me-4">Lecture 1 :</span>
                      <span>Getting Started</span>
                      <div className="ms-auto">
                        <i className="far fa-clock text-primary me-2" />
                        <span>45 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm me-2 text-primary" />
                      <span className="me-4">Lecture 2 :</span>
                      <span>YouTube Video</span>
                      <div className="ms-auto">
                        <i className="far fa-clock text-primary me-2" />
                        <span>30 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm me-2 text-primary" />
                      <span className="me-4">Lecture 3 :</span>
                      <span>Live lesson - zoom</span>
                      <div className="ms-auto">
                        <i className="far fa-clock text-primary me-2" />
                        <span>20 min</span>
                      </div>
                    </li>
                  </ul>
                  <span className="lead text-dark fw-6">Beginner</span>
                  <ul className="list-unstyled mt-3 mb-0">
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm me-2 text-primary" />
                      <span className="me-4">Lecture 1 :</span>
                      <span>Getting Started</span>
                      <div className="ms-auto">
                        <i className="far fa-clock text-primary me-2" />
                        <span>45 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm me-2 text-primary" />
                      <span className="me-4">Lecture 2 :</span>
                      <span>YouTube Video</span>
                      <div className="ms-auto">
                        <i className="far fa-clock text-primary me-2" />
                        <span>30 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center">
                      <i className="flaticon-list-1 fa-sm me-2 text-primary" />
                      <span className="me-4">Lecture 3 :</span>
                      <span>Live lesson - zoom</span>
                      <div className="ms-auto">
                        <i className="far fa-clock text-primary me-2" />
                        <span>20 min</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">
                  Student feedback{" "}
                </h6>
                <div className="p-4 border-top">
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-auto">
                      <span>40 Reviews</span>
                      <ul className="list-unstyled d-flex mb-0">
                        <li>
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li>
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li>
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li>
                          <i className="fas fa-star-half-alt text-warning" />
                        </li>
                        <li>
                          <i className="far fa-star text-warning" />
                        </li>
                      </ul>
                    </div>
                    <b className="display-4 text-warning fw-bold">3.5</b>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 me-auto">5 Stars</div>
                      <span>14</span>
                    </div>
                    <div className="progress rounded" style={{ height: 6 }}>
                      <div
                        className="progress-bar bg-warning rounded"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 me-auto">4 Stars</div>
                      <span>12</span>
                    </div>
                    <div className="progress rounded" style={{ height: 6 }}>
                      <div
                        className="progress-bar bg-warning rounded"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 me-auto">3 Stars</div>
                      <span>3</span>
                    </div>
                    <div className="progress rounded" style={{ height: 6 }}>
                      <div
                        className="progress-bar bg-warning rounded"
                        role="progressbar"
                        style={{ width: "67%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 me-auto">2 Stars</div>
                      <span>4</span>
                    </div>
                    <div className="progress rounded" style={{ height: 6 }}>
                      <div
                        className="progress-bar bg-warning rounded"
                        role="progressbar"
                        style={{ width: "32%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress-item">
                    <div className="d-flex">
                      <div className="progress-title mb-1 me-auto">1 Stars</div>
                      <span>7</span>
                    </div>
                    <div className="progress rounded" style={{ height: 6 }}>
                      <div
                        className="progress-bar bg-warning rounded"
                        role="progressbar"
                        style={{ width: "10%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">
                  Listing 5 Reviews For PMP Exam Prep Seminar - PMBOK Guide 6{" "}
                </h6>
                <div className="p-4 border-top">
                  <div className="mb-4 d-xl-inline-flex">
                    <img
                      className="me-3 media-img"
                      src="images/avatar/06.jpg"
                      alt
                    />
                    <div className="media-body">
                      <div className="px-xl-4 mt-3 mt-xl-0">
                        <div className="d-flex align-items-center">
                          <h6 className="mt-0">Felica Queen </h6>
                          <div className="d-flex ms-auto mb-3">
                            <span className="px-2 border text-success rounded-sm d-inline-block me-2">
                              4.0
                            </span>
                            <ul className="list-unstyled d-flex mb-0">
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="far fa-star text-warning" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          Then work backwards to develop the plan. What steps
                          are required to get you to the goals? Make the plan as
                          detailed as possible. Try to visualize and then plan.
                        </p>
                        <div className="d-sm-flex">
                          <a
                            className="bg-light text-dark rounded-sm px-3 py-1 me-2 me-xl-4 font-sm d-inline-block mb-2 mb-sm-0"
                            href="#"
                          >
                            {" "}
                            <i className="fas fa-reply pe-1" /> Reply Review{" "}
                          </a>
                          <a
                            className="bg-success-soft text-success rounded-sm px-3 py-1 me-2 me-xl-4 font-sm d-inline-block"
                            href="#"
                          >
                            {" "}
                            <i className="far fa-thumbs-up pe-1" /> 56 Votes
                          </a>
                          <a
                            className="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block"
                            href="#"
                          >
                            {" "}
                            <i className="far fa-thumbs-down pe-1" /> 06
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-xl-inline-flex mt-4 mb-4">
                    <img
                      className="me-3 media-img"
                      src="images/avatar/11.jpg"
                      alt
                    />
                    <div className="media-body">
                      <div className="px-xl-4 mt-3 mt-xl-0">
                        <div className="d-flex align-items-center">
                          <h6 className="mt-0">Alice Williams </h6>
                          <div className="d-flex ms-auto mb-3">
                            <span className="px-2 border text-success border-radius d-inline-block me-2">
                              3.0
                            </span>
                            <ul className="list-unstyled d-flex mb-0">
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="far fa-star text-warning" />
                              </li>
                              <li>
                                <i className="far fa-star text-warning" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          Along with your plans, you should consider developing
                          an action orientation that will keep you motivated to
                          move forward at all times This requires a little.
                        </p>
                        <div className="d-sm-flex">
                          <a
                            className="bg-light text-dark rounded-sm px-3 py-1 me-2 me-xl-4 font-sm d-inline-block mb-2 mb-sm-0"
                            href="#"
                          >
                            {" "}
                            <i className="fas fa-reply pe-1" /> Reply Review{" "}
                          </a>
                          <a
                            className="bg-success-soft text-success rounded-sm px-3 py-1 me-2 me-xl-4 font-sm d-inline-block"
                            href="#"
                          >
                            {" "}
                            <i className="far fa-thumbs-up pe-1" /> 67 Votes
                          </a>
                          <a
                            className="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block"
                            href="#"
                          >
                            {" "}
                            <i className="far fa-thumbs-down pe-1" /> 04
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-xl-inline-flex">
                    <img
                      className="me-3 media-img"
                      src="images/avatar/05.jpg"
                      alt
                    />
                    <div className="media-body">
                      <div className="px-xl-4 mt-3 mt-xl-0">
                        <div className="d-flex align-items-center">
                          <h6 className="mt-0">Mellissa Doe</h6>
                          <div className="d-flex ms-auto mb-3">
                            <span className="px-2 border text-success rounded-sm d-inline-block me-2">
                              5.0
                            </span>
                            <ul className="list-unstyled d-flex mb-0">
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li>
                                <i className="fas fa-star text-warning" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          I coach my clients to practice the 3 D’s – Defer,
                          Delegate or Delete. Can the particular activity be
                          done later? Defer it! Can it be done by someone else?
                          Delegate
                        </p>
                        <div className="d-sm-flex">
                          <a
                            className="bg-light text-dark rounded-sm px-3 py-1 me-2 me-xl-4 font-sm d-inline-block mb-2 mb-sm-0"
                            href="#"
                          >
                            {" "}
                            <i className="fas fa-reply pe-1" /> Reply Review{" "}
                          </a>
                          <a
                            className="bg-success-soft text-success rounded-sm px-3 py-1 me-2 me-xl-4 font-sm d-inline-block"
                            href="#"
                          >
                            {" "}
                            <i className="far fa-thumbs-up pe-1" /> 48 Votes
                          </a>
                          <a
                            className="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block"
                            href="#"
                          >
                            {" "}
                            <i className="far fa-thumbs-down pe-1" /> 09
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="border">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">
                  Add a Review
                </h6>
                <div className="p-4 border-top">
                  <form className="form-flat-style">
                    <div className="row">
                      <div className="form-group mb-3 col-md-12">
                        <div className="ratings">
                          <input
                            type="radio"
                            id="star5"
                            name="ratings"
                            defaultValue={5}
                          />
                          <label
                            className="full"
                            htmlFor="star5"
                            title="Awesome - 5 stars"
                          />
                          <input
                            type="radio"
                            id="star4half"
                            name="ratings"
                            defaultValue="4 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star4half"
                            title="Pretty good - 4.5 stars"
                          />
                          <input
                            type="radio"
                            id="star4"
                            name="ratings"
                            defaultValue={4}
                          />
                          <label
                            className="full"
                            htmlFor="star4"
                            title="Pretty good - 4 stars"
                          />
                          <input
                            type="radio"
                            id="star3half"
                            name="ratings"
                            defaultValue="3 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star3half"
                            title="Meh - 3.5 stars"
                          />
                          <input
                            type="radio"
                            id="star3"
                            name="ratings"
                            defaultValue={3}
                          />
                          <label
                            className="full"
                            htmlFor="star3"
                            title="Meh - 3 stars"
                          />
                          <input
                            type="radio"
                            id="star2half"
                            name="ratings"
                            defaultValue="2 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star2half"
                            title="Kinda bad - 2.5 stars"
                          />
                          <input
                            type="radio"
                            id="star2"
                            name="ratings"
                            defaultValue={2}
                          />
                          <label
                            className="full"
                            htmlFor="star2"
                            title="Kinda bad - 2 stars"
                          />
                          <input
                            type="radio"
                            id="star1half"
                            name="ratings"
                            defaultValue="1 and a half"
                          />
                          <label
                            className="half"
                            htmlFor="star1half"
                            title="Meh - 1.5 stars"
                          />
                          <input
                            type="radio"
                            id="star1"
                            name="ratings"
                            defaultValue={1}
                          />
                          <label
                            className="full"
                            htmlFor="star1"
                            title="Sucks big time - 1 star"
                          />
                          <input
                            type="radio"
                            id="starhalf"
                            name="ratings"
                            defaultValue="half"
                          />
                          <label
                            className="half"
                            htmlFor="starhalf"
                            title="Sucks big time - 0.5 stars"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 col-lg-4">
                        <label className="form-label">Your name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group mb-3 col-lg-4">
                        <label className="form-label">Your email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="form-group mb-3 col-lg-4">
                        <label className="form-label">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group mb-3 col-lg-12">
                        <label className="form-label">Your message</label>
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Your message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12">
                        <a className="btn btn-primary" href="#">
                          Submit review
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xl-4 mt-5 mt-md-0">
              <div className="widgets">
                <div className="widget widget-price">
                  <h6 className="widget-title">Price</h6>
                  <div className="widget-content">
                    <a
                      onClick={() => {
                        swal({
                          title: "Are you sure?",
                          text: "Are you sure that you want to register this course?",
                          icon: "success",
                          dangerMode: true,
                        }).then((willDetele) => {
                          if (willDetele) {
                            registerCourseAction();
                          }
                        });
                      }}
                      className="btn btn-primary"
                      href="#"
                    >
                      Get course
                    </a>
                    <span className="fw-bold text-success lead ms-3">Free</span>
                  </div>
                </div>
                <div className="widget widget-course-instructor">
                  <h6 className="widget-title">Course Instructor</h6>
                  <div className="widget-content">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="rounded-circle img-fluid mb-2"
                          src={user1}
                          alt
                        />
                      </div>
                    </div>
                    <span className="lead fw-6 text-dark">
                      {course.nguoiTao.hoTen}
                    </span>
                    <p className="mb-0">Member Since May 2009</p>
                    <ul className="d-flex mb-0 list-unstyled mt-2">
                      <li>
                        <a
                          className="btn btn-outline-dark-hover btn-sm py-1 px-2 mx-1"
                          href="#"
                        >
                          497 Views
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-primary-hover btn-sm py-1 px-2 mx-1"
                          href="#"
                        >
                          795 Courses
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-dark-hover btn-sm py-1 px-2 mx-1"
                          href="#"
                        >
                          See all course
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-course-info">
                  <h6 className="widget-title">Course info</h6>
                  <div className="widget-content">
                    <ul className="list">
                      <li>
                        <b>Course Date : </b>
                        <span>{course.ngayTao}</span>
                      </li>
                      <li>
                        <b>Time :</b>
                        <span>09:00 - 01:00</span>
                      </li>
                      <li>
                        <b>Duration :</b>
                        <span>90 Hours</span>
                      </li>
                      <li>
                        <b>Lectures :</b>
                        <span>23</span>
                      </li>
                      <li>
                        <b>Levels :</b>
                        <span>Beginner</span>
                      </li>
                      <li>
                        <b>Enrolled :</b>
                        <span>{course.soLuongHocVien}</span>
                      </li>
                      <li>
                        <b>Video :</b>
                        <span>12 Hours</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h6 className="widget-title">Social share</h6>
                  <div className="widget-content">
                    <div className="social-icon-round">
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
                </div>
                <div className="widget widget-tag">
                  <h6 className="widget-title">Popular Classes</h6>
                  <div className="widget-content">
                    <ul className="list">
                      <li>
                        <a href="#">MBA</a>
                      </li>
                      <li>
                        <a href="#">Bachelor</a>
                      </li>
                      <li>
                        <a href="#">BSc</a>
                      </li>
                      <li>
                        <a href="#">BA</a>
                      </li>
                      <li>
                        <a href="#">BBA</a>
                      </li>
                      <li>
                        <a href="#">Diploma</a>
                      </li>
                      <li>
                        <a href="#">Library</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h6 className="widget-title">Map location</h6>
                  <div className="widget-content">
                    <iframe
                      className="w-100 border-0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185456!2d144.95373631584474!3d-37.81720974201458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1598418458630!5m2!1sen!2sin"
                      style={{ border: 0, width: "100%", height: 250 }}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
