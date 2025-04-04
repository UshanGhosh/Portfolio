import React from 'react';
import './Skills.css';
import '../components/shared.css';
import { DiPython, DiJava, DiJavascript1, DiReact, DiMongodb, DiMysql, DiGit, DiDocker } from 'react-icons/di';
import { SiTypescript, SiFastapi, SiExpress, SiNextdotjs, SiCplusplus } from 'react-icons/si';

function Skills() {
  const skillsList = [
    {
      label: "Languages",
      items: [
        { name: "C/C++", icon: <SiCplusplus style={{color: '#00599C'}} /> },
        { name: "Python", icon: <DiPython style={{color: '#3776AB'}} /> },
        { name: "Java", icon: <DiJava style={{color: '#007396'}} /> },
        { name: "JavaScript", icon: <DiJavascript1 style={{color: '#F7DF1E'}} /> },
        { name: "TypeScript", icon: <SiTypescript style={{color: '#3178C6'}} /> }
      ]
    },
    {
      label: "Frameworks",
      items: [
        { name: "FastAPI", icon: <SiFastapi style={{color: '#009688'}} /> },
        { name: "Express.js", icon: <SiExpress style={{color: '#000000'}} /> },
        { name: "React", icon: <DiReact style={{color: '#61DAFB'}} /> },
        { name: "Next.js", icon: <SiNextdotjs style={{color: '#000000'}} /> }
      ]
    },
    {
      label: "Databases",
      items: [
        { name: "MySQL", icon: <DiMysql style={{color: '#4479A1'}} /> },
        { name: "MongoDB", icon: <DiMongodb style={{color: '#47A248'}} /> }
      ]
    },
    {
      label: "DevOps",
      items: [
        { name: "Git", icon: <DiGit style={{color: '#F05032'}} /> },
        { name: "Docker", icon: <DiDocker style={{color: '#2496ED'}} /> }
      ]
    }
  ];

  return (
    <section id ="skills-section" className="skills">
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