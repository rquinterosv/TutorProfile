// src/pages/Home.jsx
import React, { useState } from 'react';
import LengSelect from '../components/LengSelect';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && <LengSelect onClose={handleCloseModal} />}
      {/* Contenido de la página de inicio */}
      <h1>Welcome to Rafa Tutoring</h1>
    </div>
  );
};

export default Home;
