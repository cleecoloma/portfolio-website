import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ForwardIcon from '@mui/icons-material/Forward';
import CodeIcon from '@mui/icons-material/Code';
// import './Background.css';

function Background({ id }) {
  return (
    <div className='background-container' id={id}>
      <h4>BACKGROUND</h4>
      <p id='background-description'>
        <div id='first-description'>
          Former <strong>mechanical engineer</strong> with an active secret
          clearance and{' '}
          <strong>8+ years of professional working experience</strong> in team
          oriented roles. Delivered technically sound solutions to restore US
          Navy submarines back to 100% operational condition. <br />
          <br /> I see myself as a <strong>results driven</strong> individual
          where I understand the importance of delivering solutions that meet
          the requirements and expectations. <br />
          <br />
          <strong>Fun fact:</strong> When I'm not coding, you'll find me diving
          into the world of lawn care - determined to have the best lawn in the
          neighborhood. It's my little green oasis project beyond the keyboard.
        </div>
        <img src='../../images/lawn.jpg' alt='lawn' id='lawn-img' />
      </p>
      <div id='icon-container'>
        <SettingsIcon id='gear-icon' />
        <ForwardIcon id='arrow-icon' />
        <CodeIcon id='code-icon' />
      </div>
    </div>
  );
}

export default Background;
