import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import '../styles/Skills.css';

function Skills({ id }) {
  return (
    <div className='skills-container' id={id}>
      <h4>SKILLS</h4>
      <div className='skills'>
        <img className='skills-img' src='../../images/languages.gif' />
        <img className='skills-img' src='../../images/react-hooks.gif' />
        <img
          className='skills-img'
          src='../../images/frameworks-libraries.gif'
        />
        <img className='skills-img' src='../../images/cloud-services.gif' />
        <img className='skills-img' src='../../images/tools-technologies.gif' />
      </div>
      <div id='icon-container'>
        <BuildIcon id='build-icon' />
      </div>
    </div>
  );
}

export default Skills;
