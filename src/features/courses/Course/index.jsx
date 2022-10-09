import { Tabs, Row, Col } from "antd";
import React from "react";
import "../../../scss/style.scss";
import c2 from "assets/images/categories/categories6.webp"

function Course() {
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
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Tab 1 " key="1">
                    <div className="my-shuffle-container grid-4">
                      <Row gutter={10}>
                        <Col xs={24} sm={12} md={8} lg={6}>
                          <div class="course">
                            <div class="course-img">
                              <img
                                class="img-fluid"
                                src={c2}
                                alt=""
                              />
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
                              <img
                                class="img-fluid"
                                src={c2}
                                alt=""
                              />
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
                              <img
                                class="img-fluid"
                                src={c2}
                                alt=""
                              />
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
                              <img
                                class="img-fluid"
                                src={c2}
                                alt=""
                              />
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
