import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css'

function Projects() {
  return (
    <div className='projects-container'>
      <h4>FEATURED PROJECTS</h4>
      <Card className='projects-card'>
        <Card.Img src='../../public/images/job-application-tracker.png' />
        <Card.Body>
          <Card.Title>Job Application Tracker</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
} 

export default Projects