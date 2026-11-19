import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/navigation';

const LANGS = ['en', 'es'];
const flag = (lang) => `https://flagcdn.com/24x18/${lang === 'es' ? 'es' : 'gb'}.png`;

const Brand = ({ dark }) => {
  const { t } = useTranslation();
  const brand = t('common.brand');
  return (
    <span className="text-xl md:text-2xl font-bold">
      <span className={dark ? 'text-ember-400' : 'text-primary-600'}>{brand.charAt(0)}</span>
      <span className={dark ? 'text-cream' : 'text-neutral-800'}>{brand.slice(1)}</span>
    </span>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  // /music has its own dark, warm look; the navbar follows it there.
  const dark = location.pathname === '/music';
  const current = i18n.resolvedLanguage || 'en';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const barClass = isScrolled
    ? dark
      ? 'bg-stage-950/85 backdrop-blur-lg shadow-lg shadow-black/30'
      : 'bg-white/80 backdrop-blur-lg shadow-md'
    : dark
      ? 'bg-stage-950'
      : 'bg-transparent';

  const linkClass = (active) =>
    dark
      ? active
        ? 'text-ember-300 bg-white/5'
        : 'text-cream/70 hover:text-cream hover:bg-white/5'
      : active
        ? 'text-primary-600 bg-primary-50'
        : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50';

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${barClass}`}>
      <div className="container-width flex items-center justify-between h-16 md:h-20">
        <Link to="/" aria-label={t('common.brand_full')}>
          <Brand dark={dark} />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? 'page' : undefined}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${linkClass(location.pathname === link.path)}`}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Language selector */}
          <div className="relative ml-2">
            <button
              onClick={() => setIsDropdownOpen((o) => !o)}
              aria-label={t('navbar.language')}
              aria-expanded={isDropdownOpen}
              className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${dark ? 'hover:bg-white/5' : 'hover:bg-primary-50'}`}
            >
              <img src={flag(current)} alt="" className="w-5 h-auto rounded-sm ring-1 ring-neutral-200" />
              <svg className={`w-3 h-3 transition-transform ${dark ? 'text-cream/60' : 'text-neutral-500'} ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-neutral-100 py-1 z-50 animate-fade-in">
                {LANGS.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors ${
                      current === lang ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <img src={flag(lang)} alt="" className="w-5 h-auto rounded-sm" />
                    {t(`languages.${lang}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${dark ? 'text-cream hover:bg-white/10' : 'text-neutral-700 hover:bg-neutral-100'}`}
        >
          <span className="sr-only">{t('navbar.open_menu')}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white animate-fade-in">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" aria-label={t('common.brand_full')}>
                <Brand />
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100">
                <span className="sr-only">{t('navbar.close_menu')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    location.pathname === link.path ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-neutral-100">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">{t('navbar.language')}</p>
              <div className="flex gap-2">
                {LANGS.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      current === lang
                        ? 'bg-primary-50 text-primary-600 ring-1 ring-primary-200'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <img src={flag(lang)} alt="" className="w-5 h-auto rounded-sm" />
                    {t(`languages.${lang}`)}
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
