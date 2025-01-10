import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-text">About Us</h1>
      </div>

      {/* Journey Section */}
      <div className="journey-section">
        <h2
          className="journey-title"
          style={{
            marginBottom: "0px",
          }}
        >
          OUR OBSESSION?
        </h2>
        <h2 className="journey-title">TO MAKE YOUR JOURNEY HASSLE FREE</h2>
        <div className="mission-container">
          <div className="mission-left">
            <h3>Our Mission</h3>
          </div>
          <div className="mission-right ">
            <p>
              At Germanywale, we empower aspiring minds with personalized
              support and expert guidance. We make studying in Germany seamless,
              fostering a community of ambitious individuals. Our mission is to
              turn academic dreams into reality. Together, we pave the way for a
              brighter future.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-section">
        <div className="vision-content">
          <div className="vision-left">
            <h3>Our Vision</h3>
          </div>
          <div className="vision-right">
            <p>
              Our vision at Germanywale is to bridge the gap between ambition
              and achievement, empowering students to pursue their dreams in
              Germany with ease. We're dedicated to delivering a seamless,
              supportive, and successful experience, from application to
              arrival. Your journey, simplified. Your future, empowered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
