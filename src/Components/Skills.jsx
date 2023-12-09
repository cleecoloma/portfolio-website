import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BuildIcon from '@mui/icons-material/Build';
import '../styles/Skills.css';

function Skills({ id }) {
  return (
    <div className='skills-container' id={id}>
      <h4>SKILLS</h4>
      <div className='skills'>
        <p>LANGUAGES</p>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p>FRAMEWORKS/LIBRARIES</p>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Redux</li>
        </ul>
        <p>REACT HOOKS</p>
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
          <li>useReducer</li>
        </ul>
        <p>CLOUD SERVICES</p>
        <ul>
          <li>
            AWS Cloud Services (Elastic Beanstalk, S3, Lambda, API Gateway,
            DynamoDB, SNS, and SQS)
          </li>
          <li>Google Cloud Storage</li>
        </ul>
        <p>TOOLS/TECHNOLOGIES</p>
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
      </div>
      <div id='icon-container'>
        <BuildIcon id='build-icon' />
      </div>
    </div>
  );
}

export default Skills;
