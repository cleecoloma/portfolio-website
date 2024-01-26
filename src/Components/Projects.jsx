import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data/data.json';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeContext } from '../context/Theme';
import '../styles/Projects.css';

function Projects({ id }) {
  const projects = data.projects.slice(0, 3);
  const allProjects = data.projects.slice(3);
  const [seeMore, setSeeMore] = useState(false);
  const { isMode } = useContext(ThemeContext);

  const handleClick = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className='projects-container' id={id}>
      <h4>FEATURED PROJECTS</h4>
      {projects.map((project) => (
        <Card
          key={project.id}
          className={
            isMode ? 'projects-card' : 'projects-card projects-card-dark'
          }
        >
          <Card.Img
            src={'/images/' + project.name + '.png'}
            className='card-image'
          />
          <Card.Body id={isMode ? null : 'card-body-dark'}>
            <div
              className={
                isMode ? 'card-header' : 'card-header card-header-dark'
              }
            >
              <Card.Title
                id='card-title'
                className={isMode ? null : 'card-title-dark'}
              >
                {project.displayName}
              </Card.Title>
              <div className='card-links'>
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
            <Card.Text
              className={isMode ? 'card-text' : 'card-text card-text-dark'}
            >
              {project.description}
            </Card.Text>
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
      {seeMore
        ? allProjects.map((project) => (
            <Card
              key={project.id}
              className={
                isMode ? 'projects-card' : 'projects-card projects-card-dark'
              }
            >
              <Card.Img
                src={'/images/' + project.name + '.png'}
                className='card-image'
              />
              <Card.Body id={isMode ? null : 'card-body-dark'}>
                <div
                  className={
                    isMode ? 'card-header' : 'card-header card-header-dark'
                  }
                >
                  <Card.Title
                    id='card-title'
                    className={isMode ? null : 'card-title-dark'}
                  >
                    {project.displayName}
                  </Card.Title>
                  <div className='card-links'>
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
                <Card.Text
                  className={isMode ? 'card-text' : 'card-text card-text-dark'}
                >
                  {project.description}
                </Card.Text>
                <div className='card-skills'>
                  {project.techStack.map((skill) => (
                    <div className='each-skills' key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))
        : null}
      <Button variant='success' id='see-more-button' onClick={handleClick}>
        See {seeMore ? 'less' : 'more'} projects
        {seeMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
    </div>
  );
}

export default Projects;
