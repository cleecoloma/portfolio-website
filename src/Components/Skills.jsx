import React, { useContext } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import { ThemeContext } from '../context/Theme';
import '../styles/Skills.css';

function Skills({ id }) {
  const { isMode } = useContext(ThemeContext);

  return (
    <div className='skills-container' id={id}>
      <h4>SKILLS</h4>
      <div className='skills'>
        <img className={isMode ? 'skills-img' : 'skills-img skills-img-dark'} src='../../images/languages.gif' />
        <img className={isMode ? 'skills-img' : 'skills-img skills-img-dark'} src='../../images/react-hooks.gif' />
        <img
          className={isMode ? 'skills-img' : 'skills-img skills-img-dark'}
          src='../../images/frameworks-libraries.gif'
        />
        <img className={isMode ? 'skills-img' : 'skills-img skills-img-dark'} src='../../images/cloud-services.gif' />
        <img className={isMode ? 'skills-img' : 'skills-img skills-img-dark'} src='../../images/tools-technologies.gif' />
      </div>
      <div id='icon-container'>
        <BuildIcon id='build-icon' />
      </div>
    </div>
  );
}

export default Skills;
