import React from 'react';
import './Education.css';
import '../components/shared.css';
import { FaGraduationCap } from 'react-icons/fa';

// Import institution logos
import SUSTLogo from '../assets/images/sust-logo.png';
import SCPSCLogo from '../assets/images/scpsc-logo.png';

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Shahjalal University of Science and Technology (SUST)",
      year: "2020 - Now",
      logo: SUSTLogo,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Savar Cantonment Public School and College",
      year: "2017 - 2019",
      logo: SCPSCLogo,
    }
  ];

  return (
    <section id="education-section" className="education">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-list">
          {educationList.map((edu, index) => (
            <div className="education-card" key={index}>
              <img src={edu.logo} alt={`${edu.institution} Logo`} className="education-logo" />
              <div className="education-details">
                <h3 className="education-title">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-year">{edu.year}</p>
              </div>
              <FaGraduationCap className="education-icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
