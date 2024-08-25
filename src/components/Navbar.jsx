import React, { useState } from 'react';

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Cierra el dropdown después de seleccionar
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          {language === 'en' ? 'My Website' : 'Mi Sitio Web'}
        </div>
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
    </nav>
  );
};

export default Navbar;
