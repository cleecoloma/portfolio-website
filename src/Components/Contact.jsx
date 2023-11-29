import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <h4>CONTACT</h4>
      <p id='contact-description'>Together, let's bring ideas to life.</p>
      <div className='form-container'>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Name@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' rows={5} placeholder='Say hello' />
          </Form.Group>
        </Form>
        <Button variant='outline-success'>Send Message</Button>
      </div>
      <div id='link-container'>
        <a
          href='https://www.linkedin.com/in/chesterleecoloma/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon id='linkedin-icon' />
        </a>
        <a
          href='https://github.com/cleecoloma'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon id='github-icon' />
        </a>
      </div>

      <div id='footer-container'>
        <p>
          Designed and built by
          <br />
          <strong>
            <span>CHESTER LEE</span> <span>COLOMA</span>
          </strong>
          <br />
          2023
        </p>
      </div>
    </div>
  );
}

export default Contact;
