import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(); // Hook para traducción

  return (
    <footer className="bg-blue-500 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Título y párrafo */}
        <div>
          <h4 className="text-lg font-semibold mb-2">{t('footer.about_us')}</h4>
          <p className="text-sm">
            {t('footer.about_us_text')}
          </p>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">{t('footer.follow_us')}</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-2">{t('footer.contact_us')}</h4>
          <p className="text-sm flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {t('footer.contact_email')}
          </p>
          <p className="text-sm flex items-center mt-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {t('footer.contact_phone')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
