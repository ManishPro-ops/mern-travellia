import React from "react";
import "./About.css";
import img1 from '../assets/image/first.jpg'
import img2 from '../assets/image/second.png'
import img3 from '../assets/image/third.jpg'

const About = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-subtitle">
          Discover more about who we are and what drives us.
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            We strive to provide our customers with the best travel experiences,
            ensuring that every journey is unique and unforgettable. Our passion is
            travel, and we want to share that with you.
          </p>
        </div>
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            To become a global leader in travel, offering personalized and curated
            services for all types of travelers. We are committed to sustainability
            and responsible tourism.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Meet the Team</h2>
        <div className="team-cards">
          {/* <div className="team-card">
            <img src={img3} alt="Team Member" />
            <h3>ANUSHREE CHAUSALKAR</h3>
            <p>MENTOR</p>
          </div> */}
          <div className="team-card">
            <img src={img2} alt="Team Member" />
            <h3>PRIYANSHU SINGH</h3>
            <p>MENTEE-1</p>
          </div>
          <div className="team-card">
            <img src={img1} alt="Team Member" />
            <h3>MANISH SRIVASTAV</h3>
            <p>MENTEE-2</p>
          </div>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>&copy; 2025 TravelCo - All rights reserved</p>
      </footer>
    </div>
  );
};

export default About;
