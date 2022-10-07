import React from "react";

function Carousel() {
  return (
    <div>
      {" "}
      <section className="slider-01">
        <div className="container-fluid px-0">
          <div id="main-slider" className="swiper-container">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide slide-01 align-items-center d-flex bg-overlay-black-50 header-position"
                style={{
                  backgroundImage: "url(images/slider/home-01/01.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 position-relative">
                      <div className="banner-content">
                        <div className="content text-center">
                          <h1
                            className="animated text-white mb-3"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.0s"
                          >
                            A great place for learning
                          </h1>
                          <h6
                            className="animated text-white"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.5s"
                          >
                            A best and cheapest way of getting know learning to
                            make a better tomorrow.
                          </h6>
                          <a
                            className="btn btn-md btn-primary mt-4 animated"
                            href="#"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="2.0s"
                          >
                            Ready to get started?{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide slide-02 align-items-center d-flex bg-overlay-black-50"
                style={{
                  backgroundImage: "url(images/slider/home-01/02.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 offset-md-2 position-relative">
                      <div className="banner-content">
                        <div className="content text-center">
                          <h1
                            className="animated text-white mb-3"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.0s"
                          >
                            Best education from your home{" "}
                          </h1>
                          <h6
                            className="animated text-white"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.5s"
                          >
                            Don’t change your learning just change a way of.
                          </h6>
                          <a
                            className="btn btn-md btn-primary mt-4 animated"
                            href="#"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="2.0s"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-button-prev"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left" />
            </div>
            <div
              className="swiper-button-next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
