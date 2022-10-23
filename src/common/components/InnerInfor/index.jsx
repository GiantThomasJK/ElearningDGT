import React from "react";
import user1 from "assets/images/inner/user1.jpg";
import background from "assets/images/inner/background.webp";


function InnerInfo() {
  let user = JSON.parse(localStorage.getItem("PROFILE_USER"));

  return (
    <section
      className="inner-header bg-holder bg-overlay-black-90"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="container position-relative">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <h1 className="breadcrumb-title mb-0 text-white">User Profile</h1>
          </div>
          <div className="col-md-6">
            <ol className="breadcrumb d-flex justify-content-center justify-content-md-end ms-auto">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="fas fa-home me-1" />
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">
                <span>{user?.hoTen}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerInfo;
