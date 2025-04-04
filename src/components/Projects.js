// src/components/Projects.js
import React from 'react';
import './Projects.css';
import '../components/shared.css';

function Projects() {
  const techLogos = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "JavaFX": "https://upload.wikimedia.org/wikipedia/en/c/cc/JavaFX_Logo.png",
    "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "JWT": "https://jwt.io/img/pic_logo.svg",
    "Vercel": "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png"
  };

  const projects = [
    {
      title: "Sexual Harassment Prevention & Protection Cell",
      description: "A comprehensive web platform for SUST to handle harassment cases with secure authentication, case management, and admin dashboard. Built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Vercel"],
      link: "https://github.com/mmmim24/CSE350",
      role: "Full Stack Developer"
    },
    {
      title: "RxHub",
      description: "A healthcare procurement platform connecting suppliers and providers. Features include inventory management, order processing, and real-time analytics.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS", "JWT"],
      link: "https://github.com/PealHassan/RxHub",
      role: "Backend Developer"
    },
    {
      title: "CodinWithPo",
      description: "An interactive coding platform with storyline-based challenges and verdict simulation. Built using JavaFX for a robust user interface.",
      tech: ["Java", "JavaFX", "C++", "CSS"],
      link: "https://github.com/MituChowdhury/CodinWithPo",
      role: "Core Developer"
    }
  ];

  return (
    <section id="projects-section" className="projects">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="role">{project.role}</p>
                  <p className="description">{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="tech-tag" title={tech}>
                        <img 
                          src={techLogos[tech]} 
                          alt={tech} 
                          className="tech-logo"
                        />
                      </div>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
