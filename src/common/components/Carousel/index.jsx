import React from "react";
import home2 from "../../../assets/images/slider/home-01/02.jpg";
import home1 from "../../../assets/images/slider/home-01/01.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperAnimation } from "swiper-animation";
function Carousel() {
  return (
    <>
      <Swiper
        className="slider-01 "
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="container-fluid px-0">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide
                style={{
                  backgroundImage: `url(${home1})`,
                  backgroundColor: "#000000",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="swiper-slide slide-01 align-items-center d-flex bg-overlay-black-50 header-position"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 position-relative">
                      <div className="banner-content">
                        <div className="content text-center">
                          <h1
                            className="animate__animated animate__fadeInUp animate__delay-1s animate__duration-2s animated text-white mb-3 animate__delay-1s animate__duration-2s"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.0s"
                          >
                            A great place for learning
                          </h1>
                          <h6
                            className="animated text-white animate__animated animate__fadeInUp animate__delay-2s animate__duration-2s"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.5s"
                          >
                            A best and cheapest way of getting know learning to
                            make a better tomorrow.
                          </h6>
                          <a
                            className="animate__animated animate__fadeInUp animate__delay-2s animate__duration-2s btn btn-md btn-primary mt-4 animated"
                            href="#"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="2.0s"
                          >
                            Ready to get started?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
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
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundImage: `url(${home2})`,
                  backgroundColor: "#000000",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="swiper-slide slide-02 align-items-center d-flex bg-overlay-black-50 header-position"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 offset-md-2 position-relative">
                      <div className="banner-content">
                        <div className="content text-center">
                          <h1
                            className="animate__animated animate__fadeInUp animate__delay-1s animate__duration-2s animated text-white mb-3"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.0s"
                          >
                            Best education from your home
                          </h1>
                          <h6
                            className="animate__animated animate__fadeInUp animate__delay-2s animate__duration-2s animated text-white"
                            data-swiper-animation="fadeInUp"
                            data-duration="2.0s"
                            data-delay="1.5s"
                          >
                            Don’t change your learning just change a way of.
                          </h6>
                          <a
                            className="animate__animated animate__fadeInUp animate__delay-2s animate__duration-2s btn btn-md btn-primary mt-4 animated"
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
                <div>
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
              </SwiperSlide>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}

export default Carousel;
