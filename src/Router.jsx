import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';     
import Services from './pages/Services'; 
import Contact from './pages/Contact';   
import About from './pages/About';     

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
