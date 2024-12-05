import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <header className="hero mt-4">
      <div className="hero-content">
        <div className="profile-container">
          <img
            src="https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/10d96879-6bd0-4cee-82b5-f818f02bd4b6_rw_1920.jpg?h=ae6b32ab76c34ed840f0a5d8c919423f"
            alt="Person's Profile Image"
            className="profile-image"
          />
        </div>
        <h1 className="hero-title">Ramanpreet Kaur</h1>
        <p className="hero-subtitle">Interactive Media Design Student at Algonquin College</p>
        <p className="hero-description">
          Hello, my name is Ramanpreet Kaur, and I hail from Amritsar, India. I recently completed my senior
          secondary education back home and then moved to Canada on April 20th to pursue my studies in the
          Interactive Media Design program at Algonquin College.
          <br />
          I come from a nuclear family, and in my leisure time, I enjoy swimming, dancing, and singing.
        </p>
        <a href="#about" className="btn-learn-more">Learn More</a>
      </div>
    </header>
  );
};

export default Hero;
