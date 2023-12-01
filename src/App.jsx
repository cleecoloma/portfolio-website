import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Background from './Components/Background';
import What from './Components/What';
import Projects from './Components/Projects';
import ProjectsDesktop from './Components/ProjectsDesktop';
import Contact from './Components/Contact';
import './App.css';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopQuery = window.matchMedia('(min-width: 835px)').matches;
      setIsDesktop(isDesktopQuery);

      const showHeaderQuery = window.matchMedia('(min-width: 425px)').matches;
      setShowHeader(showHeaderQuery);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      {showHeader && <Header />}
      <Hero />
      <Background />
      <What />
      {isDesktop ? <ProjectsDesktop /> : <Projects />}
      <Contact />
    </>
  );
}

export default App;
