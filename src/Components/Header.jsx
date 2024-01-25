'use strict';

import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import '../styles/Header.css';

function Header() {

  const [isMode, setMode] = useState(false);

  return (
    <Navbar id='header-navbar' fixed='top'>
      <Navbar.Brand id='header-brand'>
        <span id='first-c'>C</span>
        <span id='second-c'>C</span>
      </Navbar.Brand>
      <Nav id='navigation-links' className='me-auto' variant='underline'>
        <div id='nav-left'>
          <Nav.Link href='#home' className='header-links'>
            Home
          </Nav.Link>
          <Nav.Link href='#background' className='header-links'>
            Background
          </Nav.Link>
          <Nav.Link href='#skills' className='header-links'>
            Skills
          </Nav.Link>
          <Nav.Link href='#projects' className='header-links'>
            Projects
          </Nav.Link>
          <Nav.Link href='#contact' className='header-links'>
            Contact
          </Nav.Link>
        </div>
        <div id='nav-right'>
          { isMode ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
      </Nav>
    </Navbar>
  );
}

export default Header;
