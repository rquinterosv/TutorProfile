import React, { useState, useEffect } from 'react';
import LengSelect from '../components/LengSelect';
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Profile from '../components/Profile'

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
      <Courses />
      <Profile />
    </div>
  );
};

export default Home;
