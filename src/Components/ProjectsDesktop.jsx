import React from 'react';
import Button from 'react-bootstrap/Button';
import './ProjectsDesktop.css';

function ProjectsDesktop() {
  return (
    <div className='projects-container'>
      <h4>FEATURED PROJECTS</h4>
      <div className='projects-card'>
        <img
          className='card-img'
          src='../../public/images/job-application-tracker.png'
        />
        <div className='card-right'>
          <div className='card-header'>
            <p id='card-title'>Job Application Tracker</p>
          </div>
          <div className='card-links'>
            <Button variant='primary'>DEMO</Button>
            <Button variant='primary'>CODE</Button>
          </div>
          <div id='card-text'>
            A mobile-responsive job application tracker web application using
            the MERN (MongoDB, Express, React, Node) stack, enabling users to
            seamlessly create, manage, and track job listings across four
            categories (Interested, Applied, Interview, Rejected).
          </div>
          <div className='card-skills'>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
          </div>
        </div>
      </div>
      <div className='projects-card'>
        <img
          className='card-img'
          src='../../public/images/job-application-tracker.png'
        />
        <div className='card-right'>
          <div className='card-header'>
            <p id='card-title'>Job Application Tracker</p>
          </div>
          <div className='card-links'>
            <Button variant='primary'>DEMO</Button>
            <Button variant='primary'>CODE</Button>
          </div>
          <div id='card-text'>
            A mobile-responsive job application tracker web application using
            the MERN (MongoDB, Express, React, Node) stack, enabling users to
            seamlessly create, manage, and track job listings across four
            categories (Interested, Applied, Interview, Rejected).
          </div>
          <div className='card-skills'>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
          </div>
        </div>
      </div>
      <div className='projects-card'>
        <img
          className='card-img'
          src='../../public/images/job-application-tracker.png'
        />
        <div className='card-right'>
          <div className='card-header'>
            <p id='card-title'>Job Application Tracker</p>
          </div>
          <div className='card-links'>
            <Button variant='primary'>DEMO</Button>
            <Button variant='primary'>CODE</Button>
          </div>
          <div id='card-text'>
            A mobile-responsive job application tracker web application using
            the MERN (MongoDB, Express, React, Node) stack, enabling users to
            seamlessly create, manage, and track job listings across four
            categories (Interested, Applied, Interview, Rejected).
          </div>
          <div className='card-skills'>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
            <Button variant='primary'>TOOLS</Button>
          </div>
        </div>
      </div>
      <Button variant='success' id='see-more-button'>
        SEE MORE PROJECTS
      </Button>
    </div>
  );
}

export default ProjectsDesktop;
