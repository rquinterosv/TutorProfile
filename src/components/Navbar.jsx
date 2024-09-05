import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/img/rlogo.png'

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-0 relative">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-4xl">
            <span className="text-[#252a9c] font-bold">R</span>
            <span className="text-white font-light">afaQuinteros</span>
          </h1>
        </a>

        {/* Menu y Botón de Idioma */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Botón de Idioma */}
          <div className="relative hidden md:block">
            <button
              onClick={toggleDropdown}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t('navbar.language')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 w-40 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 z-50">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLanguage('es')}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Español
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Menú de Navegación */}
          <div className="hidden md:flex space-x-4 rtl:space-x-reverse">
            <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              {t('navbar.home')}
            </Link>
            <Link to="/services" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              {t('navbar.services')}
            </Link>
            <Link to="/contact" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              {t('navbar.contact')}
            </Link>
          </div>
          {/* Menú Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center p-2 bg-blue-600 rounded-lg text-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Hamburguesa desplegable */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-700 w-64 flex flex-col p-8 space-y-2 z-50">
          {/* Botón de Cierre */}
          <button
            onClick={toggleMenu}
            className="self-end mb-4 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>
            {t('navbar.home')}
          </Link>
          <Link to="/services" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>
            {t('navbar.services')}
          </Link>
          <Link to="/contact" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>
            {t('navbar.contact')}
          </Link>
          {/* Botón de Idioma en versión móvil */}
          <div className="mt-4">
            <button
              onClick={toggleDropdown}
              className="w-full px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t('navbar.language')}
              <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 z-50">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white w-full text-left"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLanguage('es')}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white w-full text-left"
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