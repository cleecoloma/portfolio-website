import React from 'react';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <h4>CONTACT</h4>
      <p id='contact-description'>
        Together, let's bring ideas to life.
      </p>
      <Button>Send Message</Button>
      <div id='link-container'>
      </div>
    </div>
  );
}

export default Contact