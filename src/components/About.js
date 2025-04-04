// src/components/About.js
import React from 'react';
import './About.css';
import { FaCode, FaDatabase, FaBrain, FaLaptopCode, FaTableTennis, FaPlane } from 'react-icons/fa';

function About() {
  return (
    <section id="about-section" className="about">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-left">
            <p>
              
              Hi, I'm <span className="highlight">Ushan Ghosh</span>, a passionate <span className="highlight">competitive programmer</span> and <span className="highlight">problem solver</span>. I have a deep interest in solving complex problems and optimizing algorithms. Over the years, I have participated in numerous coding competitions. I have reached <span className="highlight">Master rank in Codeforces (Top 1.5% in the world)</span> and am a <span className="highlight">2-time ICPC Asia West Continent Finalist</span>.
              <br /> <br />
              Besides competitive programming, I enjoy building full-stack projects and have worked on a few. I'm also a big <span className="highlight">Table Tennis enthusiast</span> and love <span className="highlight">Traveling</span> whenever I get the chance. 

            </p>
          </div>
          <div className="about-right">
            <div className="code-animation">
              <div className="code-line">
                <FaCode className="tech-icon" />
                <span className="typing-text">{'class Life {'}</span>
              </div>
              <div className="code-line indent">
                <FaLaptopCode className="tech-icon" />
                <span className="typing-text">{'code();'}</span>
              </div>
              <div className="code-line indent">
                <FaBrain className="tech-icon" />
                <span className="typing-text">{'learn();'}</span>
              </div>
              <div className="code-line indent">
                <FaDatabase className="tech-icon" />
                <span className="typing-text">{'improve();'}</span>
              </div>
              <div className="code-line indent">
                <FaTableTennis className="tech-icon" />
                <span className="typing-text">{'playTableTennis();'}</span>
              </div>
              <div className="code-line indent">
                <FaPlane className="tech-icon" />
                <span className="typing-text">{'explore();'}</span>
              </div>
              <div className="code-line">
                <span className="typing-text">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
