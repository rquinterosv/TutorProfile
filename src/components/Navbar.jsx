import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Cierra el dropdown después de seleccionar
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">
          Rafa Tutoring
        </h1>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
          >
            {language === 'en' ? 'English' : 'Español'}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white">{language === 'en' ? 'Home' : 'Inicio'}</Link>
          <Link to="/services" className="text-white">{language === 'en' ? 'Service' : 'Servicio'}</Link>
          <Link to="/contact" className="text-white">{language === 'en' ? 'Contact' : 'Contacto'}</Link>
          <Link to="/about" className="text-white">{language === 'en' ? 'About Me' : 'Acerca de Mí'}</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
            >
              {language === 'en' ? 'English' : 'Español'}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className="block px-4 py-2 text-white hover:bg-gray-600 w-full text-left"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className="block px-4 py-2 text-white hover:bg-gray-600 w-full text-left"
                    >
                      Español
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-4 py-2 text-white">{language === 'en' ? 'Home' : 'Inicio'}</Link>
          <Link to="/services" className="block px-4 py-2 text-white">{language === 'en' ? 'Service' : 'Servicio'}</Link>
          <Link to="/contact" className="block px-4 py-2 text-white">{language === 'en' ? 'Contact' : 'Contacto'}</Link>
          <Link to="/about" className="block px-4 py-2 text-white">{language === 'en' ? 'About Me' : 'Acerca de Mí'}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
