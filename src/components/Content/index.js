import React from 'react';
import AboutPage from '../../pages/About';
import ContactPage from '../../pages/Contact';
import ProjectPage from '../../pages/Projects';
import SkillsPage from '../../pages/Skills';
import './content.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
    </div>
  )
}

export default MainContent
