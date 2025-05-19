import React from 'react';
import './Skills.css';
import '../components/shared.css';

function Skills() {
  const skillsList = [
    {
      label: "Languages",
      items: [
        { name: "C/C++", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="skill-icon-img" /> },
        { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon-img" /> },
        { name: "Java", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="skill-icon-img" /> },
        { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon-img" /> },
        { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-icon-img" /> }
      ]
    },
    {
      label: "Frameworks",
      items: [
        { name: "Express.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="skill-icon-img" /> },
        { name: "FastAPI", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="skill-icon-img" /> },
        { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon-img" /> },
        { name: "Next.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="skill-icon-img" /> }
      ]
    },
    {
      label: "Databases",
      items: [
        { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-icon-img" /> },
        { name: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-icon-img" /> }
      ]
    },
    {
      label: "DevOps",
      items: [
        { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-icon-img" /> },
        { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="skill-icon-img" /> }
      ]
    }
  ];

  return (
    <section id="skills-section" className="skills">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillsList.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3 className="skill-title">{category.label}</h3>
              <ul className="skill-items">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="skill-icon">{item.icon}</span>
                    <span className="skill-name">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
