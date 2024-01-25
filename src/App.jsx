'use strict';

import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import HamburgerMenu from './Components/HamburgerMenu';
import Hero from './Components/Hero';
import Background from './Components/Background';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ProjectsDesktop from './Components/ProjectsDesktop';
import Contact from './Components/Contact';
import ThemeProvider from './context/Theme';
import './styles/App.css';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopQuery = window.matchMedia('(min-width: 1000px)').matches;
      setIsDesktop(isDesktopQuery);

      const showMenuQuery = window.matchMedia('(max-width: 800px)').matches;
      setShowMenu(showMenuQuery);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <ThemeProvider>
      <div className='content'>
        <Header />
        {showMenu && <HamburgerMenu />}
        <Hero id='home' />
        <Background id='background' />
        <Skills id='skills' />
        {isDesktop ? (
          <ProjectsDesktop id='projects' />
        ) : (
          <Projects id='projects' />
        )}
        <Contact id='contact' />
      </div>
    </ThemeProvider>
  );
}

export default App;
