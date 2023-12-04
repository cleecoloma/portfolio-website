import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css'

function Header() {
  return (
    <Navbar id='header-navbar'>
      <Container>
        <Navbar.Brand href='#home'>CC</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#background'>Background</Nav.Link>
          <Nav.Link href='#skills'>Skills</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header