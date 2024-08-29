import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
      .then(() => {
        localStorage.setItem('language', lang);
        setIsDropdownOpen(false);
        window.location.reload(); // Recarga la página para reflejar el cambio de idioma
      })
      .catch(error => console.error('Error changing language:', error));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl lg:text-4xl font-bold">Rafael Quinteros</h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link to="/" className="text-white">{t('navbar.home')}</Link>
          <Link to="/services" className="text-white">{t('navbar.services')}</Link>
          <Link to="/contact" className="text-white">{t('navbar.contact')}</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
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
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block px-4 py-2 text-white hover:bg-gray-600 w-full text-left"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLanguage('es')}
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
        <div className="lg:hidden mt-4">
          <Link to="/" className="block text-white py-2" onClick={toggleMenu}>{t('navbar.home')}</Link>
          <Link to="/services" className="block text-white py-2" onClick={toggleMenu}>{t('navbar.services')}</Link>
          <Link to="/contact" className="block text-white py-2" onClick={toggleMenu}>{t('navbar.contact')}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;