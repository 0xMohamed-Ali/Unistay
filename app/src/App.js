import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image1 from "./images/about_image1.jpg";
import Image2 from "./images/house1.jpg";
import Image3 from "./images/hous2.jpg";
import Image4 from "./images/about3.jpg";
import icon1 from "./images/house_icon.jpg";
import icon2 from "./images/book_icon.jpg";
import icon3 from "./images/photo_2025-04-30_17-48-49.jpg";
import icon4 from "./images/knowledge.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      {/* Section 1 */}
      <section className="about-section">
        <div className="about-row">
          <section className="about-hero">
            <img src={Image1} alt="Student Housing" className="about-image" />
            <h1>"Education and collaboration build stronger communities."</h1>
            <p></p>
          </section>

          <div className="about-text">
            <h2>
              Why <u>SwapLearn</u> is the Future of Student Collaboration?
            </h2>
            <p>
              SwapLearn is a platform designed to help university students find
              suitable housing while also facilitating a knowledge exchange
              system based on mutual benefit. Our goal is to create a community
              where students can support each other in both accommodation and
              learning.
            </p>
            <div class="Icons">
              <div class="about1_icon">
                <img src={icon1} />
                <p>
                  Easy Housing <br /> Solutions
                </p>
              </div>
              <div class="about1_icon">
                <img src={icon2} />
                <p>
                  Knowledge
                  <br /> Exchange
                </p>
              </div>
            </div>
            <ul>
              <li>
                <strong>Verified Listings</strong> – Safe and trusted
                accommodations.
              </li>
              <li>
                <strong>Student-Friendly Prices</strong> – Affordable housing
                options.
              </li>
              <li>
                <strong>Seamless Booking</strong> – Easy communication with
                landlords and roommates.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <div className="row bg-light py-5" data-aos="fade-down">
        <div className="col-md-6 mb-4 mb-md-0">
          <h3 className="fw-bold text-dark highlight-text">
            Find and share <span className="text-warning">housing</span>{" "}
            effortlessly with verified students.
          </h3>
          <div className="d-flex align-items-center my-3">
            <img src={icon3} alt="" width="80" className="me-3" />
            <p className="fw-bold mb-0">
              Find Your Perfect Student <br />
              Home with Ease
            </p>
          </div>
          <p>
            SwapLearn helps university students find safe, affordable, and
            comfortable housing. Whether you’re looking for a shared apartment
            or a private room, we make the search easy and reliable.
          </p>
          <img src={Image3} alt="" className="img-fluid rounded shadow mt-3" />
        </div>
        <div className="col-md-6 text-white bg-primary p-4 rounded shadow">
          <img src={Image2} alt="" className="img-fluid rounded mb-3" />
          <div>
            <p className="fs-5">
              🔹 Verified Listings – Safe and trusted accommodations.
              <br />
              🔹 Student-Friendly Prices – Affordable housing options.
              <br />
              🔹 Seamless Booking – Easy communication with landlords and
              roommates.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="row align-items-center py-5" data-aos="zoom-in">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={Image4}
            alt=""
            className="img-fluid rounded shadow-lg transform-scale"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-center fw-bold mb-3 text-shadow">
            <span className="text-warning">Offer</span> and receive free courses
            to enhance your skills.
          </h3>
          <div className="d-flex align-items-center mb-3">
            <img src={icon4} alt="" width="80" className="me-3" />
            <p className="fw-bold mb-0">
              Knowledge Exchange –<br />
              Learn and Share for Free!
            </p>
          </div>
          <p>
            We believe that knowledge should be accessible to everyone —
            regardless of background, location, or budget. That's why we created
            a platform where people can share what they know, and learn what
            they need — all for free.
          </p>
          <p>
            You can enjoy the same seamless learning experience whether you're
            using a mobile device, a desktop, or browsing the web. Our platform
            supports this flexibility, ensuring that learning is always at your
            fingertips. Join a growing community of learners and educators
            exchanging knowledge freely — anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
