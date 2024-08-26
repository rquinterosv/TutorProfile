// src/components/LengSelect.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LengSelect = ({ onClose }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    onClose(); // Cierra el modal después de seleccionar el idioma
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Select Language</h2>
        <button
          onClick={() => handleChangeLanguage('en')}
          className="block w-full mb-2 bg-blue-500 text-white py-2 rounded"
        >
          English
        </button>
        <button
          onClick={() => handleChangeLanguage('es')}
          className="block w-full bg-blue-500 text-white py-2 rounded"
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LengSelect;
