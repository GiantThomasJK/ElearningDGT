import React, { useEffect } from "react";
import { Tabs, Row, Col } from "antd";
import c2 from "assets/images/categories/categories6.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoriesAction,
  fetchCourseAction,
} from "redux/Courses/courseAction";
import { useHistory } from "react-router-dom";

function CourseList(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectCourses = useSelector((state) => state.course.courses);
  const fetchCourses = async () => {
    dispatch(fetchCourseAction(props.tabTitle));
  };
  console.log(props.tabTitle);

  const goToDetail = (id) => {
    history.push("/detail/" + id);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="my-shuffle-container grid-4">
        <Row gutter={15}>
          {selectCourses?.map((item, index) => {
            return (
              <Col
                onClick={() => {
                  goToDetail(item.maKhoaHoc);

                  localStorage.setItem("courseDetails", JSON.stringify(item));
                }}
                key={index}
                xs={24}
                sm={12}
                md={8}
                lg={6}
              >
                <div className="course">
                  <div className="course-img">
                    <img style={{height: 215}} className="img-fluid" src={item.hinhAnh} alt="" />
                    <a href="#" className="course-category">
                      <i className="far fa-bookmark" />
                      {item.tenKhoaHoc}
                    </a>
                  </div>
                  <div className="course-info">
                    <div className="course-title">
                      <a href="#">{item.moTa.substr(0, 60)}</a>
                    </div>
                    <div className="course-instructor">
                      by
                      <a href="#"> {item.nguoiTao.hoTen}</a>
                    </div>
                    <div className="course-rate-price">
                      <div className="rating">
                        <span>4.4</span>
                        <a href="#">{item.luotXem} Views</a>
                      </div>
                      <div className="price">$59</div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
          {/* <Col xs={24} sm={12} md={8} lg={6}>
            <div className="course">
              <div className="course-img">
                <img className="img-fluid" src={c2} alt />
                <a href="#" className="course-category">
                  <i className="far fa-bookmark" />
                  Development
                </a>
              </div>
              <div className="course-info">
                <div className="course-title">
                  <a href="#">
                    Basic web development &amp; coding online course
                  </a>
                </div>
                <div className="course-instructor">
                  by
                  <a href="#">Alice Williams</a>
                </div>
                <div className="course-rate-price">
                  <div className="rating">
                    <span>4.4</span>
                    <a href="#">578 Ratings</a>
                  </div>
                  <div className="price">$59</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className="course">
              <div className="course-img">
                <img className="img-fluid" src={c2} alt />
                <a href="#" className="course-category">
                  <i className="far fa-bookmark" />
                  Development
                </a>
              </div>
              <div className="course-info">
                <div className="course-title">
                  <a href="#">
                    Basic web development &amp; coding online course
                  </a>
                </div>
                <div className="course-instructor">
                  by
                  <a href="#">Alice Williams</a>
                </div>
                <div className="course-rate-price">
                  <div className="rating">
                    <span>4.4</span>
                    <a href="#">578 Ratings</a>
                  </div>
                  <div className="price">$59</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div class="course">
              <div class="course-img">
                <img class="img-fluid" src={c2} alt="" />
                <a href="#" class="course-category">
                  <i class="far fa-bookmark"></i>Development
                </a>
              </div>
              <div class="course-info">
                <div class="course-title">
                  <a href="#">Basic web development & coding online course</a>
                </div>
                <div class="course-instructor">
                  by
                  <a href="#">Alice Williams</a>
                </div>
                <div class="course-rate-price">
                  <div class="rating">
                    <span>4.4</span>
                    <a href="#">578 Ratings</a>
                  </div>
                  <div class="price">$59</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div class="course">
              <div class="course-img">
                <img class="img-fluid" src={c2} alt="" />
                <a href="#" class="course-category">
                  <i class="far fa-bookmark"></i>Development
                </a>
              </div>
              <div class="course-info">
                <div class="course-title">
                  <a href="#">Basic web development & coding online course</a>
                </div>
                <div class="course-instructor">
                  by
                  <a href="#">Alice Williams</a>
                </div>
                <div class="course-rate-price">
                  <div class="rating">
                    <span>4.4</span>
                    <a href="#">578 Ratings</a>
                  </div>
                  <div class="price">$59</div>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}

export default CourseList;
