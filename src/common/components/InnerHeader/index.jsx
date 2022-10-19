import React from "react";

function InnerHeader() {
    let course = {};
    if (localStorage.getItem("courseDetails")) {
      course = JSON.parse(localStorage.getItem("courseDetails"));
    }

  return (
   <div>
  <section className="inner-header bg-holder bg-overlay-black-90" style={{backgroundImage: `url(${course.hinhAnh})`,backgroundSize: "initial"}}>
    <div className="container">
      <div className="row align-items-center position-relative">
        <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
          <h1 className="breadcrumb-title mb-0 text-white">
          {course.tenKhoaHoc}
          </h1>
        </div>
        <div className="col-md-6">
          <ol className="breadcrumb d-flex justify-content-center justify-content-md-end ms-auto">
            <li className="breadcrumb-item">
              <a href="index.html">
                <i className="fas fa-home me-1" />Home
              </a>
            </li>
            <li className="breadcrumb-item active">
              <span>Course</span>
            </li>
            <li className="breadcrumb-item active">
              <span>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}

export default InnerHeader;
