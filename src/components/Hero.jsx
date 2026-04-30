import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import perfilImage from '../assets/img/perfil.jpeg';

const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      <div className={`container-width flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary-700 bg-primary-50 rounded-full">
            {t('home.hero.eyebrow') || 'Web Developer & Tutor'}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight mb-6">
            <span className="text-primary-600">{t('home.hero.title_prefix')}</span>
            <br className="hidden sm:block" />
            <span className="sm:ml-2">{t('home.hero.title_suffix')}</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl mb-4 leading-relaxed">
            {t('home.hero.roles')}
          </p>
          <p className="text-base text-neutral-400 max-w-xl mb-8 leading-relaxed">
            {t('home.mentor_profile')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/services" className="btn-primary text-base px-8 py-3.5">
              {t('home.info')}
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-8 py-3.5">
              {t('home.contact')}
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-neutral-200 justify-center lg:justify-start">
            {[
              { number: '5+', label: t('home.hero.experience_years') || 'Years Experience' },
              { number: '15+', label: t('home.hero.projects_done') || 'Projects Done' },
              { number: '100%', label: t('home.hero.client_satisfaction') || 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-primary-600">{stat.number}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-accent-100 rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
              <img
                src={perfilImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-xl shadow-lg ring-1 ring-neutral-100">
              <p className="text-sm font-semibold text-neutral-800">React & Node.js</p>
              <p className="text-xs text-neutral-500">Full Stack Dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
