'use strict';

import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../context/Theme';
import '../styles/Header.css';

function Header() {
  const { isMode, toggleMode } = useContext(ThemeContext);

  const linkClass = isMode ? null : 'header-link-dark';

  return (
    <Navbar
      className={isMode ? 'header-navbar-light' : 'header-navbar-dark'}
      fixed='top'
    >
      <Navbar.Brand id='header-brand'>
        <span id='first-c'>C</span>
        <span id={isMode ? 'second-c-light' : 'second-c-dark'}>C</span>
      </Navbar.Brand>
      <Nav id='navigation-links' variant='underline'>
        <div id='nav-left'>
          <Nav.Link href='#home' className={`header-links ${linkClass}`}>
            Home
          </Nav.Link>
          <Nav.Link href='#background' className={`header-links ${linkClass}`}>
            Background
          </Nav.Link>
          <Nav.Link href='#skills' className={`header-links ${linkClass}`}>
            Skills
          </Nav.Link>
          <Nav.Link href='#projects' className={`header-links ${linkClass}`}>
            Projects
          </Nav.Link>
          <Nav.Link href='#contact' className={`header-links ${linkClass}`}>
            Contact
          </Nav.Link>
        </div>
        <div id={isMode ? 'nav-right' : 'nav-right-dark'} className='ml-auto' onClick={toggleMode}>
          {isMode ? (
            <DarkModeIcon fontSize='large' />
          ) : (
            <LightModeIcon
              fontSize='large'
            />
          )}
        </div>
      </Nav>
    </Navbar>
  );
}

export default Header;
