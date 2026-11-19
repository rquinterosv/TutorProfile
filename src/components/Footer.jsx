import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/navigation';
import { SOCIAL_LINKS } from '../data/social';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage || 'en';
  const other = current === 'es' ? 'en' : 'es';

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-width py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-white">{t('common.brand')}</span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">{t('footer.about_text')}</p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={t(`social.${social.id}`)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact_title')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${t('contact.email_val')}`} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('contact.email_val')}
                </a>
              </li>
              <li>
                <a href={`tel:${t('contact.phone_val').replace(/\s/g, '')}`} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('contact.phone_val')}
                </a>
              </li>
              <li>
                <Link to="/music" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  {t('footer.music_link')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <button
            onClick={() => i18n.changeLanguage(other)}
            className="text-xs text-neutral-500 hover:text-white transition-colors"
          >
            {t(`languages.${other}`)}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
