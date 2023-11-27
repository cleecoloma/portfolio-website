import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './What.css';

function What() {
  return (
    <div className='what-container'>
      <h4>WHAT I DO</h4>
      <p id='what-description'>
        I’m a <strong>full-stack software developer</strong> with a focus on
        responsive design and user interface (UI) development.
      </p>
      <Container>
        <Row>
          <Col>LANGUAGES</Col>
          <Col>FRAMEWORKS/LIBRARIES</Col>
        </Row>
        <Row>
          <Col>TOOLS</Col>
          <Col>AWS</Col>
        </Row>
      </Container>
      <div id='tool-container'></div>
    </div>
  );
}

export default What;
