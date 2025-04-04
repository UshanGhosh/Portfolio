// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 100; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-container" onClick={() => scrollToSection('home')}>
          <span className="logo">Ushan Ghosh</span>
        </div>
        <nav className="nav-links">
          <button onClick={() => scrollToSection('about-section')}>About</button>
          <button onClick={() => scrollToSection('skills-section')}>Technical Skills</button>
          <button onClick={() => scrollToSection('projects-section')}>Projects</button>
          <button onClick={() => scrollToSection('achievements')}>Achievements</button>
          <button onClick={() => scrollToSection('profiles-section')}>Profiles</button>
          <button onClick={() => scrollToSection('contact-section')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
