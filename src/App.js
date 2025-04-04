import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import OnlineProfiles from './components/OnlineProfiles';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <OnlineProfiles />
      {/* <Education /> */}
      <Contact />
    </div>
  );
}

export default App;
