import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';

function Projects() {
  return (
    <div className='projects-container'>
      <h4>FEATURED PROJECTS</h4>
      <Card className='projects-card'>
        <Card.Img src='../../public/images/job-application-tracker.png' />
        <Card.Body>
          <div className='card-header'>
            <Card.Title id='card-title'>Job Application Tracker</Card.Title>
            <Button variant='primary'>DEMO</Button>
            <Button variant='primary'>CODE</Button>
          </div>
          <Card.Text id='card-text'>
            A mobile-responsive job application tracker web application using
            the MERN (MongoDB, Express, React, Node) stack, enabling users to
            seamlessly create, manage, and track job listings across four
            categories (Interested, Applied, Interview, Rejected).
          </Card.Text>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
        </Card.Body>
      </Card>
      <Card className='projects-card'>
        <Card.Img src='../../public/images/job-application-tracker.png' />
        <Card.Body>
          <div className='card-header'>
            <Card.Title id='card-title'>Job Application Tracker</Card.Title>
            <Button variant='primary'>DEMO</Button>
            <Button variant='primary'>CODE</Button>
          </div>
          <Card.Text id='card-text'>
            A mobile-responsive job application tracker web application using
            the MERN (MongoDB, Express, React, Node) stack, enabling users to
            seamlessly create, manage, and track job listings across four
            categories (Interested, Applied, Interview, Rejected).
          </Card.Text>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
        </Card.Body>
      </Card>
      <Card className='projects-card'>
        <Card.Img src='../../public/images/job-application-tracker.png' />
        <Card.Body>
          <div className='card-header'>
            <Card.Title id='card-title'>Job Application Tracker</Card.Title>
            <Button variant='primary'>DEMO</Button>
            <Button variant='primary'>CODE</Button>
          </div>
          <Card.Text id='card-text'>
            A mobile-responsive job application tracker web application using
            the MERN (MongoDB, Express, React, Node) stack, enabling users to
            seamlessly create, manage, and track job listings across four
            categories (Interested, Applied, Interview, Rejected).
          </Card.Text>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
          <Button variant='primary'>TOOLS</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Projects;