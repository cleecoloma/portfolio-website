import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/ProjectsDesktop.css';
import data from '../data/data.json';

function ProjectsDesktop({ id }) {
  const projects = data.projects.slice(0, 3);

  return (
    <div className='projects-desktop-container' id={id}>
      <h3>FEATURED PROJECTS</h3>
      {projects.map(project => (<div key={project.id} className='projects-desktop-card'>
        <img src={'/images/' + project.name + '.png'} />
        <div className='card-desktop-right'>
          <div className='card-desktop-header'>
            <p id='card-desktop-title'>{project.displayName}</p>
          </div>
          <div className='card-desktop-links'>
            <Button variant='primary'>DEMO</Button>
            <Button variant='primary'>CODE</Button>
          </div>
          <div id='card-desktop-text'>{project.description}
          </div>
          <div className='card-desktop-skills'>
            {project.techStack.map(skill => (
              <div key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </div>))}
      <Button id='desktop-see-more-button'>
        See more projects
      </Button>
    </div>
  );
}

export default ProjectsDesktop;
