// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Ushan Ghosh</span></h1>
        <p>A passionate <span className="highlight">Competitive Programmer</span> and <span className="highlight">Problem Solver</span> exploring the intersection of code and creativity.</p>
        <button onClick={() => window.location.href = '#about-section'}>Know More About Me</button>
      </div>
    </section>
  );
}

export default Hero;
