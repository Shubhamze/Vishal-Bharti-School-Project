// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Gallery />
      <Contact />
      <footer>
        <p>&copy; 2024 Vishal Bharti School | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
