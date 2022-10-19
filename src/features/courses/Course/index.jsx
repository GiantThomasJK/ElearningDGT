import { Tabs, Row, Col } from "antd";
import React, { useEffect } from "react";
import "../../../scss/style.scss";
import c2 from "assets/images/categories/categories6.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "redux/Courses/courseAction";
import CourseList from "common/components/CourseList";

function Course() {
  const dispatch = useDispatch();
  const selectCategories = useSelector((state) => state.course.categories);
  const fetchCategories = async () => {
    dispatch(fetchCategoriesAction());
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  return (
    <>
      <section class="space-pb">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="section-title text-center">
                <h2>The greatest choice of courses</h2>
                <p>
                  Success isn’t really that difficult. There is a significant
                  portion of the population here in North America, that actually
                  want and need success to be hard! Why.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 position-relative">
              <div class="filters-group mb-2 mb-4">
                {/* <Tabs centered defaultActiveKey="1">
                  <Tabs.TabPane tab="Tab 1 " key="1">
                    <div className="my-shuffle-container grid-4">
                      <Row gutter={10}>
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
                                  Basic web development &amp; coding online
                                  course
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
                                  Basic web development &amp; coding online
                                  course
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
                                <a href="#">
                                  Basic web development & coding online course
                                </a>
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
                                <a href="#">
                                  Basic web development & coding online course
                                </a>
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
                      </Row>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </Tabs.TabPane>
                </Tabs> */}
                {/* <Tabs
                  onChange={onChange}
                  defaultActiveKey="0"
                  centered
                  items={new Array(selectCategories?.length)
                    .fill(selectCategories?.map((item) => item.tenDanhMuc))
                    .map((text, i) => {
                      const id = String(i++);
                      tabTitle = text;
                      return {
                        label: `${text[id]}`,
                        key: id,
                        children: <CourseList tenDM={tenDM}  />,
                      };
                    })}
                /> */}
                <Tabs centered>
                  {selectCategories?.map((item, index) => {
                    return (
                      <Tabs.TabPane tab={item.tenDanhMuc} key={index}>
                        <CourseList tabTitle={item.maDanhMuc} />
                      </Tabs.TabPane>
                    );
                  })}
                </Tabs>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;
