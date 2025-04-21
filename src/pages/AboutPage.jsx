import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Discover the passion behind Noir</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Noir, we believe in delivering exceptional quality with a focus
            on sustainable and ethically sourced products. Our mission is to
            redefine online shopping by offering carefully curated collections
            that combine style, comfort, and durability.
          </p>
        </div>
        <div className="mission-image"></div>
      </section>

      <section className="about-team">
        <h2>Meet The Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image img-1"></div>
            <h3>Zeel</h3>
          </div>
          <div className="team-member">
            <div className="member-image img-2"></div>
            <h3>Sanyami</h3>
          </div>
          <div className="team-member">
            <div className="member-image img-3"></div>
            <h3>Ayushi</h3>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              We meticulously select materials and products that stand the test
              of time.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>
              Committed to eco-friendly practices from sourcing to packaging.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Constantly evolving to bring you the best in design and
              functionality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
