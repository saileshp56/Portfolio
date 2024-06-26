import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('about'); // Set the default active tab

  const handleTabClick = (e, tabName) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    setActiveTab(tabName); // Update the active tab state

    const section = document.getElementById(tabName);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjust this value as needed
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Define your sections here
      const sections = ['about', 'projects', 'experience', 'repos', 'resume', 'achievements'];

      const offsets = sections.map(id => {
        const section = document.getElementById(id);
        return section ? section.offsetTop : 0;
      });

      // Adjust this to match the height of your navigation bar or any fixed elements
      const navBarHeight = 60;

      // Detect if user has scrolled to near the bottom of the page
      const scrollPosition = window.scrollY + navBarHeight + 5; // Add a small margin of error
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - navBarHeight;

      let activeSection = sections[0];
      for (let i = 0; i < sections.length; i++) {
        if (scrollPosition >= offsets[i]) {
          activeSection = sections[i];
        }
      }

      // If near the bottom, set the last section as active
      if (nearBottom) {
        activeSection = sections[sections.length - 1];
      }

      setActiveTab(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="nav-bar container void-background has-shadow is-fluid">
      <div className="nav-right nav-menu">
        <a 
          className={`nav-item is-tab ${activeTab === 'about' ? 'is-active' : ''}`} 
          onClick={(e) => handleTabClick(e, 'about')} 
          href="#about"
        >
          About
        </a>
        <a 
          className={`nav-item is-tab ${activeTab === 'projects' ? 'is-active' : ''}`} 
          onClick={(e) => handleTabClick(e, 'projects')} 
          href="#projects"
        >
          Projects
        </a>
        <a 
          className={`nav-item is-tab ${activeTab === 'experience' ? 'is-active' : ''}`} 
          onClick={(e) => handleTabClick(e, 'experience')} 
          href="#experience"
        >
          Experience
        </a>
        <a 
          className={`nav-item is-tab ${activeTab === 'repos' ? 'is-active' : ''}`} 
          onClick={(e) => handleTabClick(e, 'repos')} 
          href="#repos"
        >
          Repositories
        </a>
        <a 
          className={`nav-item is-tab ${activeTab === 'resume' ? 'is-active' : ''}`} 
          onClick={(e) => handleTabClick(e, 'resume')} 
          href="#resume"
        >
          Resume
        </a>
        <a 
          className={`nav-item is-tab ${activeTab === 'achievements' ? 'is-active' : ''}`} 
          onClick={(e) => handleTabClick(e, 'achievements')} 
          href="#achievements"
        >
          Awards
        </a>
      </div>

      {/* This "nav-toggle" hamburger menu is only visible on mobile */}
      {/* You need JavaScript to toggle the "is-active" class on "nav-menu" */}
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </nav>
  );
};

export default NavBar;
