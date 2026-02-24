import React from "react";
import "../index.css";

const projects = [
  {
    image:"/ecommerce.jpg",
    title: "E-Commerce Platform",
    description:
      "Secure full-stack e-commerce application with JWT authentication and role-based order management.",
    technologies: ["React", "Spring Boot", "SQL", "JWT"],
    github: "https://github.com/ansonapeter/E-COMMERCE",
  },
  {
    image:"/task.jpg",
    title: "Task Management System",
    description:
      "Full-stack task management system with REST APIs and responsive UI for efficient workflow tracking.",
    technologies: ["React", "Spring Boot", "REST APIs","SQL"],
    github: "https://github.com/ansonapeter/Task-Management",
  },
  {
    image:"/flood.jpg",
    title: "Flood and LandSlide Detection System",
    description:
     "Disaster monitoring web app integrating backend prediction APIs with a dynamic frontend dashboard.",
    technologies: ["HTML", "OpenWeather API", "CSS3", "JavaScript", "Python"],
    github:
      "https://github.com/ansonapeter/GEOGUARD--FLOOD-AND-LANDSLIDE-DETECTION-USING-MACHINE-LEARNING",
  },
];

function Project() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Featured Projects</h1>

      <div className="projects-grid">
        {projects.map((item, index) => (
          <ProjectList
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            technologies={item.technologies}
            github={item.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;

/* ---------- Project Card Component ---------- */
function ProjectList({ title, description, technologies, github, image }) {
  return (
    <div className="project-card-modern">

      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="tech-list">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <a href={github} target="_blank" rel="noopener noreferrer">
        View on GitHub →
      </a>

    </div>
  );
}