// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import LengSelect from '../components/LengSelect';
import Hero from '../components/Hero'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setIsModalOpen(false); // Si ya hay un idioma guardado, no mostrar el modal
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && <LengSelect onClose={handleCloseModal} />}
      <Hero />
    </div>
  );
};

export default Home;
