// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'react-feather'; // Icons for mobile menu

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { path: '/', label: t('navbar.home') },
    { path: '/services', label: t('navbar.services') },
    { path: '/about', label: t('navbar.about') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl text-white font-bold">Rafa Tutoring</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white hover:text-gray-200 transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 text-white hover:bg-blue-500 transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu after click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
