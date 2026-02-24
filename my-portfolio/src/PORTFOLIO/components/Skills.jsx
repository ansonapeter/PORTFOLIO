import React from "react";
import "../index.css";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

const skills = [
  { name: "Java", color: "#f89820", icon: <FaJava /> },
  { name: "Spring Boot", color: "#6DB33F", icon: <SiSpringboot /> },
  { name: "Spring Security", color: "#6DB33F", icon: <SiSpringboot /> },
  { name: "React JS", color: "#61DBFB", icon: <FaReact /> },
  { name: "MySQL", color: "#00758F", icon: <SiMysql /> },
  { name: "HTML5", color: "#E34C26", icon: <FaHtml5 /> },
  { name: "CSS3", color: "#264de4", icon: <FaCss3Alt /> },
  { name: "JavaScript", color: "#F7DF1E", icon: <FaJs /> },
  { name: "Git", color: "#F1502F", icon: <FaGitAlt /> }
];

function Skills() {
  return (
    <section className="skills-section">
      <h1 className="skills-title">Skills & Technologies</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card-modern" key={index}>
            
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;