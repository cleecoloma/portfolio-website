import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Contact.css';

function Contact({ id }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='contact-container' id={id}>
      <h4>CONTACT</h4>
      <div className='contact-body'>
        <div className='contact-left'>
          <p id='contact-description'>Together, let's bring ideas to life.</p>
          <img src='../../images/lawn.jpg' alt='contact' id='contact-img' />
        </div>

        <div className='form-container'>
          <Form
            className='contact'
            name='contact'
            method='POST'
            data-netlify='true'
            onSubmit={handleSubmit}
            action='#contact'
          >
            <input type='hidden' name='form-name' value='contact' />
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Name'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Name@example.com'
                required
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                name='message'
                rows={5}
                placeholder='Say hello'
                required
              />
            </Form.Group>
            <Button
              variant='outline-success'
              id='send-message-button'
              type='submit'
            >
              Send Message
            </Button>
          </Form>
        </div>
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
            <span>Chester Lee</span> <span>Coloma</span>
          </strong>
          <br />
          2023
        </p>
      </div>
    </div>
  );
}

export default Contact;
