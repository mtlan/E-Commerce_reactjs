import React from "react";

const HomeContent = () => {
  return (
    <section>
      <div className="sections section_one d-flex">
        <div className="section_one_img flex-full">
          <img src="./images/category-img-1.jpg" alt="category img" />
        </div>
        <div className="section_one_content flex-full">
          <div className="section_subtitle">Our Services</div>
          <h2 className="section_title">Responsive &amp; Professional</h2>
          <p className="section_desc">
            We go the extra mile on every project. The value we provide clients
            comes from our level of skill and performance, as well as our
            knowledge and professionalism. Rest assured, we put the same level
            of energy into every project we take on.
          </p>
          <div className="section_about_hotline">
            <strong className="hotline_title">Call us today</strong>
            <strong className="hotline_number">
              <i className="fa fa-phone"></i> 1900-111000
            </strong>
            <p className="section_desc">
              We're available 24/7, 365 days a year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
