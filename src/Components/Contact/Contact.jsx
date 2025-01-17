import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, TextField, Box, Typography } from '@mui/material';
import './Contact.css';

const ContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      console.log('Email sent successfully!');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'black',
    border: '2px solid pink',
    boxShadow: '50',
    p: 4,
    borderRadius: '1rem',
  };

  return (
    <section id="Contact">
      <h2 className="ContactTitle">Contact</h2>
      <span className="ContactTitles">Contact</span>
      <span className="ContactDesc">
        Please fill out the form below to discuss any work opportunities
      </span>

      <Modal
        open={isSubmitted}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" id="modal-modal-title">
            Form submitted successfully!
          </Typography>
          <Button onClick={closeModal} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>

      <form className="contactform" onSubmit={handleSubmit}>
        <input
        placeholder="Name"
                  className="name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
        />
        <input
            placeholder="Email"
                      className="email"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
        />
         <textarea
          placeholder="your Message"
          className="msg"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <button className="submitBtn" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      
      </form>
    </section>
  );
};

export default ContactForm;

