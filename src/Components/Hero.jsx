import React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <img src='../../images/chester.jpeg' alt='Chester' id='hero-img' />
      <h1>
        <span>CHESTER LEE</span> COLOMA
      </h1>
      <h3>Full-stack Software Developer</h3>
      <hr />
      <p id='hero-message'>
        I build <span id='hero-message-span'>digital bridges</span> that connect{' '}
        <strong>ideas</strong> with the <strong>world.</strong>
      </p>
      <Button id='project-button' className='button-style' variant='contained'>
        See my projects
      </Button>
      <Button id='contact-button' className='button-style' variant='outlined'>
        Contact me
      </Button>
      <div id='menu-icon-div'>
        <MenuIcon id='menu-icon' />
      </div>
    </div>
  );
}

export default Hero;
