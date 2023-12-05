'use strict';

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar id='header-navbar' fixed='top'>
      <Navbar.Brand id='header-brand'>
        <span id='first-c'>C</span>
        <span id='second-c'>C</span>
      </Navbar.Brand>
        <Nav className='me-auto' variant='underline'>
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
        </Nav>
    </Navbar>
  );
}

export default Header;
