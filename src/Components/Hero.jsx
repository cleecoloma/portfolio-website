import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Hero.css';

function Hero({ id }) {
  return (
    <div className='hero-container' id={id}>
      <div className='left-div'>
        <img src='../../images/chester.jpeg' alt='chester' id='hero-img' />
        <h1>
          <span>CHESTER LEE</span> COLOMA
        </h1>
        <h3>Full-stack Software Developer</h3>
        <hr />
      </div>
      <div className='right-div'>
        <p id='hero-message'>
          I build <span id='hero-message-span'>digital bridges</span> that
          connect <strong>ideas</strong> with the <strong>world.</strong>
        </p>
        <div id='button-container'>
          <Button
            id='project-button'
            className='button-style'
            variant='contained'
          >
            See my projects
          </Button>
          <Button
            id='contact-button'
            className='button-style'
            variant='outlined'
          >
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
