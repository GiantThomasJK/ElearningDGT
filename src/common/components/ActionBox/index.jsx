import React from "react";
import home1 from "../../../assets/images/slider/home-01/01.jpg";

function ActionBox() {
  return (
    <div>
      <section
        className="space-ptb bg-overlay-theme-90"
        data-jarallax='{"speed": 0.5}'
        style={{
          backgroundImage: `url(${home1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center my-4 position-relative">
              <div className="section-title mb-4">
                <h2 className="text-white">
                  Discover best classes for the best learning
                </h2>
                <p className="text-white mb-0">
                  If success is a process with a number of defined steps, then
                  it is just like any other process.
                </p>
              </div>
              <a className="btn btn-light" href>
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ActionBox;
