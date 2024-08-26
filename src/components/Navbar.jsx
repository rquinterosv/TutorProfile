import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false); // Cierra el dropdown después de seleccionar un idioma
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Rafa Tutoring</h1>
        <div className="flex md:hidden">
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
          <Link to="/" className="text-white">{t('navbar.home')}</Link>
          <Link to="/services" className="text-white">{t('navbar.services')}</Link>
          <Link to="/contact" className="text-white">{t('navbar.contact')}</Link>
          <Link to="/about" className="text-white">{t('navbar.about')}</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
            >
              {i18n.language === 'en' ? 'English' : 'Español'}
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
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLanguage('es')}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
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
          <Link to="/" className="block px-4 py-2 text-white">{t('navbar.home')}</Link>
          <Link to="/services" className="block px-4 py-2 text-white">{t('navbar.services')}</Link>
          <Link to="/contact" className="block px-4 py-2 text-white">{t('navbar.contact')}</Link>
          <Link to="/about" className="block px-4 py-2 text-white">{t('navbar.about')}</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block px-4 py-2 text-white"
            >
              {i18n.language === 'en' ? 'English' : 'Español'}
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
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLanguage('es')}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      Español
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
