import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Background from './Components/Background';
import What from './Components/What';
import Projects from './Components/Projects';
import ProjectsDesktop from './Components/ProjectsDesktop';
import Contact from './Components/Contact';
import './styles/App.css';

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
    <div className='content'>
      {showHeader && <Header />}
      <Hero id='home' />
      <Background id='background' />
      <What id='skills' />
      {isDesktop ? (
        <ProjectsDesktop id='projects' />
      ) : (
        <Projects id='projects' />
      )}
      <Contact id='contact' />
    </div>
  );
}

export default App;
