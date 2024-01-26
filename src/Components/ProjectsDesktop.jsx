import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import data from '../data/data.json';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeContext } from '../context/Theme';
import '../styles/ProjectsDesktop.css';

function ProjectsDesktop({ id }) {
  const projects = data.projects.slice(0, 3);
  const allProjects = data.projects.slice(3);
  const [seeMore, setSeeMore] = useState(false);
  const { isMode } = useContext(ThemeContext);

  const handleClick = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className='projects-desktop-container' id={id}>
      <h4>FEATURED PROJECTS</h4>
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            isMode
              ? 'projects-desktop-card'
              : 'projects-desktop-card projects-desktop-card-dark'
          }
        >
          <img
            src={'/images/' + project.name + '.png'}
            className='card-desktop-image'
          />
          <div className='card-desktop-right'>
            <div className='card-desktop-header'>
              <p
                id='card-desktop-title'
                className={isMode ? null : 'card-desktop-title-dark'}
              >
                {project.displayName}
              </p>
            </div>
            <div className='card-desktop-links'>
              <Button
                className='desktop-link-buttons'
                variant='secondary'
                size='sm'
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                DEMO
              </Button>
              <Button
                className='desktop-link-buttons'
                variant='success'
                size='sm'
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                CODE
              </Button>
            </div>
            <div
              className={
                isMode
                  ? 'card-desktop-text'
                  : 'card-desktop-text card-desktop-text-dark'
              }
            >
              {project.description}
            </div>
            <div className='card-desktop-skills'>
              {project.techStack.map((skill) => (
                <div className='each-skills' key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {seeMore
        ? allProjects.map((project) => (
            <div
              key={project.id}
              className={
                isMode
                  ? 'projects-desktop-card'
                  : 'projects-desktop-card projects-desktop-card-dark'
              }
            >
              <img
                src={'/images/' + project.name + '.png'}
                className='card-desktop-image'
              />
              <div className='card-desktop-right'>
                <div className='card-desktop-header'>
                  <p id='card-desktop-title'>{project.displayName}</p>
                </div>
                <div className='card-desktop-links'>
                  <Button
                    className='desktop-link-buttons'
                    variant='secondary'
                    size='sm'
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    DEMO
                  </Button>
                  <Button
                    className='desktop-link-buttons'
                    variant='success'
                    size='sm'
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    CODE
                  </Button>
                </div>
                <div id='card-desktop-text'>{project.description}</div>
                <div className='card-desktop-skills'>
                  {project.techStack.map((skill) => (
                    <div className='each-skills' key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        : null}
      <Button id='desktop-see-more-button' onClick={handleClick}>
        See {seeMore ? 'less' : 'more'} projects
        {seeMore ? (
          <KeyboardArrowUpIcon fontSize='large' />
        ) : (
          <KeyboardArrowDownIcon fontSize='large' />
        )}
      </Button>
    </div>
  );
}

export default ProjectsDesktop;
