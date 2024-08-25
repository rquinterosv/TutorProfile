import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';     
import Services from './components/Services'; 
import Contact from './components/Contact';   
import About from './components/About';     

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
