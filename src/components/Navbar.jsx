import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/rlogo.png'

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { path: '/', label: t('navbar.home') },
    { path: '/experience', label: t('navbar.experience') },
    { path: '/services', label: t('navbar.services') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="container-width flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img src={logo} alt="Logo" className="h-8 w-auto md:h-10 transition-transform duration-300 group-hover:scale-105" />
          <h1 className="text-xl md:text-2xl font-bold">
            <span className={isScrolled ? 'text-primary-600' : 'text-primary-600'}>R</span>
            <span className={isScrolled ? 'text-neutral-800' : 'text-neutral-800'}>afaQuinteros</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-primary-600 bg-primary-50'
                  : isScrolled
                    ? 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Selector */}
          <div className="relative ml-2">
            <button
              onClick={toggleDropdown}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary-50"
            >
              <img
                src={`https://flagcdn.com/24x18/${i18n.language?.startsWith('es') ? 'es' : 'gb'}.png`}
                alt=""
                className="w-5 h-auto rounded-sm ring-1 ring-neutral-200"
              />
              <svg className={`w-3 h-3 text-neutral-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-neutral-100 py-1 z-50 animate-fade-in">
                {['en', 'es'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors ${
                      i18n.language === lang ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <img src={`https://flagcdn.com/24x18/${lang === 'es' ? 'es' : 'gb'}.png`} alt="" className="w-5 h-auto rounded-sm" />
                    {lang === 'en' ? 'English' : 'Español'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
        >
          <span className="sr-only">Open menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white animate-fade-in">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <h1 className="text-xl font-bold">
                  <span className="text-primary-600">R</span>
                  <span className="text-neutral-800">afaQuinteros</span>
                </h1>
              </Link>
              <button onClick={toggleMenu} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Language Selector */}
            <div className="mt-auto pt-6 border-t border-neutral-100">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Language</p>
              <div className="flex gap-2">
                {['en', 'es'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      i18n.language === lang
                        ? 'bg-primary-50 text-primary-600 ring-1 ring-primary-200'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <img src={`https://flagcdn.com/24x18/${lang === 'es' ? 'es' : 'gb'}.png`} alt="" className="w-5 h-auto rounded-sm" />
                    {lang === 'en' ? 'English' : 'Español'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;