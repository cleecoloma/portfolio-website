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
          <p>JavaScript</p>
          <Col>MARKUP LANGUAGES</Col>
          <p>HTML, CSS</p>
          <Col>FRAMEWORKS/LIBRARIES</Col>
          <p>React, Node, Express, MongoDB, Mongoose, Redux</p>
        </Row>
        <Row>
          <Col>REACT HOOKS</Col>
          <p>useState, useEffect, useContext, useReducer</p>
          <Col>TOOLS/TECHNOLOGIES</Col>
          <p>
            Git, GitHub, Auth0, RESTful API, Bootstrap, React Native, Render,
            Netlify, Jest, Supertest, Thunder Client, Trello, VS Code
          </p>
          <Col>CLOUD SERVICES</Col>
          <p>
            AWS Cloud Services (Elastic Beanstalk, S3, Lambda, API Gateway,
            DynamoDB, SNS, and SQS), Google Cloud
          </p>
        </Row>
      </Container>
      <div id='tool-container'></div>
    </div>
  );
}

export default What;
