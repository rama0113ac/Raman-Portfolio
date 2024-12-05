import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <section className="hobbies-section container my-5">
        <h2 className="hobbies-title text-white">My Hobbies</h2>
        <div className="hobbies-cards">
          <div className="hobby-card swimming-card">
            <i className="bi bi-swim"></i>
            <h3>Swimming</h3>
            <p>I love swimming as it helps me relax and stay fit.</p>
          </div>
          <div className="hobby-card dancing-card">
            <i className="bi bi-music-note-beamed"></i>
            <h3>Dancing</h3>
            <p>One of my favorite ways to express myself creatively.</p>
          </div>
          <div className="hobby-card singing-card">
            <i className="bi bi-mic"></i>
            <h3>Singing</h3>
            <p>Singing helps me connect with my emotions and is a great form of expression.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
