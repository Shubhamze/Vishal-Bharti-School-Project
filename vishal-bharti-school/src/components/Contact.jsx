// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Valid email is required";
    if (!formData.message) formErrors.message = "Message cannot be empty";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted!");
      console.log(formData);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
