import React from "react";
import "../index.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="hero">
      
      <div className="hero-image">
        <img src="/photo.jpg" alt="profile" />
      </div>

      <p className="hero-hi">Hi, I'm</p>

      <h1 className="hero-name">ANSONA PETER</h1>

      <h2 className="hero-role">Java Full Stack Developer</h2>

      <p className="hero-desc">
        I create secure and scalable web applications using modern technologies.
        Passionate about clean architecture, performance, and continuous learning.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">View Projects</button>
        <button className="outline-btn">Contact Me</button>
      </div>

      {/* 🔥 Social Icons */}
      <div className="hero-socials">
        <a 
          href="https://github.com/ansonapeter" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a 
          href="https://linkedin.com/in/ansonapeter-ap1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:ansonapeter16@gmail.com">
          <FaEnvelope />
        </a>
      </div>

    </div>
  );
}

export default Home;