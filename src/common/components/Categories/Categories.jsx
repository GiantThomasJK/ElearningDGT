import React from "react";
import c1 from "assets/images/categories/categories1.webp"
import c2 from "assets/images/categories/categories7.webp"
import c3 from "assets/images/categories/categories3.webp"
import c4 from "assets/images/categories/categories4.webp"
import c5 from "assets/images/categories/categories5.webp"
import c6 from "assets/images/categories/categories6.webp"

function Categories() {
  return (
    <div>
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title text-center">
                <h2>Choose your course &amp; learning</h2>
                <p>
                  We know this in our gut, but what can we do about it? How can
                  we motivate ourselves? One of the most difficult aspects of
                  achieving success is staying motivated over the long haul.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <a href>
                <div className="categories">
                  <img
                    className="img-fluid"
                    src={c1}
                    alt =""
                  />
                  <h6 className="categories-title">Lập trình Backend</h6>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6">
              <a href>
                <div className="categories">
                  <img
                    className="img-fluid"
                    src={c2}
                    alt =""
                  />
                  <h6 className="categories-title">Lập trình Backend</h6>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6">
              <a href>
                <div className="categories mb-md-0">
                  <img
                    className="img-fluid"
                    src={c3}
                    alt
                  />
                  <h6 className="categories-title">Lập trình Full Stack</h6>
                </div>
              </a>
            </div>
          </div>
          <div className="row">

            <div className="col-md-4 col-sm-6">
              <a href>
                <div className="categories mb-md-0">
                  <img
                    className="img-fluid"
                    src={c4}
                    alt
                  />
                  <h6 className="categories-title">Tư duy Lập trình</h6>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6">
              <a href>
                <div className="categories mb-sm-0">
                  <img
                    className="img-fluid"
                    src={c5}
                    alt =""
                  />
                  <h6 className="categories-title">Personal Development</h6>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6">
              <a href>
                <div className="categories mb-0">
                  <img
                    className="img-fluid"
                    src={c6}
                    alt =""
                  />
                  <h6 className="categories-title">Business</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
