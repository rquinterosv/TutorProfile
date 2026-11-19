import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-14 md:px-16 text-center shadow-xl">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-4">{t('home.cta.title')}</h2>
          <p className="relative text-primary-100 max-w-2xl mx-auto mb-8 leading-relaxed">{t('home.cta.text')}</p>
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-primary-700 font-semibold shadow-md hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
