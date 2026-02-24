import React from "react";
import "../index.css";

function About() {
  return (
    <section className="about-section">

      <h1 className="about-title">About Me</h1>

      <div className="about-container">

        <div className="about-image">
          <img src="/photo.jpg" alt="profile" />
        </div>

        <div className="about-content">
          <p>
            I’m a passionate <span>Java Full Stack Developer</span> who loves turning ideas into
            fully functional web applications. From designing secure REST APIs
            with Spring Boot to building dynamic user interfaces with React,
            I enjoy working across the entire stack.
          </p>

          <p>
            I specialize in building scalable backend systems, implementing
            secure authentication using JWT, and crafting responsive frontend
            experiences.
          </p>

          <p>
            I believe great software is not just about features — it’s about
            clean architecture, performance, and seamless user experience.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;