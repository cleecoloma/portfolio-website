import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BuildIcon from '@mui/icons-material/Build';
import './What.css';

function What() {
  return (
    <div className='what-container'>
      <h4>WHAT I DO</h4>
      <div id='what-text'>
        <p id='what-description'>
          I’m a <strong>full-stack software developer</strong> with a focus on
          responsive design and user interface (UI) development.
        </p>
        <Container id='tool-container'>
          <Row>
            <Col xs={6} className='grid-col'>
              <strong>LANGUAGES</strong>
              <ul>
                <li>JavaScript</li>
              </ul>
            </Col>
            <Col xs={6} className='grid-col'>
              <strong>MARKUP LANGUAGES</strong>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className='grid-col'>
              <strong>FRAMEWORKS/ LIBRARIES</strong>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Redux</li>
              </ul>
            </Col>
            <Col xs={6} className='grid-col'>
              <strong>REACT HOOKS</strong>
              <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>useContext</li>
                <li>useReducer</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className='grid-col'>
              <strong>TOOLS/ TECHNOLOGIES</strong>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Auth0</li>
                <li>RESTful API</li>
                <li>Bootstrap</li>
                <li>React Native</li>
                <li>Render</li>
                <li>Netlify</li>
                <li>Jest</li>
                <li>Supertest</li>
                <li>Thunder Client</li>
                <li>Trello</li>
                <li>VS Code</li>
              </ul>
            </Col>
            <Col xs={6} className='grid-col'>
              <strong>CLOUD SERVICES</strong>
              <ul>
                <li>
                  AWS Cloud Services (Elastic Beanstalk, S3, Lambda, API
                  Gateway, DynamoDB, SNS, and SQS)
                </li>
                <li>Google Cloud Storage</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <img src='../../images/lawn.jpg' alt='lawn' id='lawn-img' />
      <div id='icon-container'>
        <BuildIcon id='build-icon' />
      </div>
    </div>
  );
}

export default What;
