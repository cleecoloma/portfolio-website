import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
            <Form.Control type='text' placeholder='name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' rows={5} />
          </Form.Group>
        </Form>
        <Button>Send Message</Button>
      </div>
      <div id='link-container'></div>
    </div>
  );
}

export default Contact;
