import React, { useState } from 'react';
import './App.css';
import PortfolioFrontPage from './Pages/PortfolioFrontPage';
import AboutSection from './Pages/About';
import SkillsPage from './Pages/Skills';
import Navbar from './Pages/Navbar';
import ProjectsPage from './Pages/Project';
import ContactPage from './Pages/contact';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (

    <div className="App">
      <Navbar />
      <div className="main-content">
        <PortfolioFrontPage />
        <AboutSection />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
