import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from '../context/Theme';
import '../styles/Hero.css';

function Hero({ id }) {
  const { isMode } = useContext(ThemeContext);

  return (
    <div
      className={
        isMode ? 'hero-container' : 'hero-container hero-container-dark'
      }
      id={id}
    >
      <div className={isMode ? 'left-div' : 'left-div left-div-dark'}>
        <img src='../../images/chester.jpeg' alt='chester' id='hero-img' />
        <h1>
          <span>CHESTER LEE</span> COLOMA
        </h1>
        <h3>Full-stack Software Developer</h3>
        <hr />
      </div>
      <div className='right-div'>
        <p
          className={isMode ? 'hero-message' : 'hero-message hero-message-dark'}
        >
          I build <span id='hero-message-span'>digital bridges</span> that
          connect <strong>ideas</strong> with the <strong>world.</strong>
        </p>
        <div id='button-container'>
          <Button
            id='project-button'
            variant='contained'
            href='#projects'
          >
            See my projects
          </Button>
          <Button id='contact-button' variant='outlined' href='#contact'>
            Contact me
          </Button>
        </div>
      </div>
      <div id='menu-icon-div'>
        <MenuIcon id='menu-icon' />
      </div>
    </div>
  );
}

export default Hero;
