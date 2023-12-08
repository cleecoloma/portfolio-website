import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Projects.css';
import data from '../data/data.json';

function Projects({ id }) {
  const projects = data.projects.slice(0, 3);

  return (
    <div className='projects-container' id={id}>
      <h4>FEATURED PROJECTS</h4>
      {projects.map((project) => (
        <Card key={project.id} className='projects-card'>
          <Card.Img
            src={'/images/' + project.name + '.png'}
            className='card-image'
          />
          <Card.Body>
            <div className='card-header'>
              <Card.Title id='card-title'>{project.displayName}</Card.Title>
              <div>
                <Button
                  className='link-buttons'
                  variant='secondary'
                  size='sm'
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  DEMO
                </Button>
                <Button
                  className='link-buttons'
                  variant='success'
                  size='sm'
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CODE
                </Button>
              </div>
            </div>
            <Card.Text id='card-text'>{project.description}</Card.Text>
            <div className='card-skills'>
              {project.techStack.map((skill) => (
                <div className='each-skills' key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
      <Button variant='success' id='see-more-button'>
        SEE MORE PROJECTS
      </Button>
    </div>
  );
}

export default Projects;
