import React from "react";

function InfoBox() {
  return (
    <div>
      <section className="bg-primary">
        <div className="container">
          <div className="row feature-info-02">
            <div className="col-sm-4 py-4 text-center">
              <i className="fa-solid fa-graduation-cap fa-3x text-white" />
              <h4 className="fw-5 mt-3 mb-0 text-white">
                100,000 online courses
              </h4>
              <p className="mb-0 text-white">
                Focus is having the unwavering attention.
              </p>
            </div>
            <div className="col-sm-4 py-4 text-center">
              <i className="fa-solid fa-school-lock fa-3x text-white" />
              <h4 className="fw-5 mt-3 mb-0 text-white">Lifetime entrance</h4>
              <p className="mb-0 text-white">
                The best way is to develop and follow.
              </p>
            </div>
            <div className="col-sm-4 py-4 text-center">
              <i className="fa-solid fa-file-invoice fa-3x mt-2 text-white" />
              <h4 className="fw-5 mt-3 mb-0 text-white">Live learning</h4>
              <p className="mb-0 text-white">
                Start with your goals in mind and then work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoBox;
