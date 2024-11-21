// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Vishal Bharti School</h1>
      <p>Shaping minds for a brighter future</p>
      <button onClick={() => window.location.href = '#contact'}>Contact Us</button>
    </section>
  );
};

export default Hero;
