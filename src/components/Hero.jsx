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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight mb-4">
            Rafael Quinteros
          </h1>
          <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-6">
            Business Engineer · Product Manager · Full Stack Developer
          </p>
          <p className="text-lg text-neutral-600 max-w-xl mb-4 leading-relaxed">
            I build things that work — for users, for teams, and for business.
          </p>
          <p className="text-base text-neutral-500 max-w-xl mb-8 leading-relaxed">
            I'm Rafa, a Business Engineer with experience across the full product spectrum: enterprise B2B sales, product management, and full-stack development. Based in Prague, open to the world. Whether I'm shipping code, defining a roadmap, or closing a deal — I bring the same thing to the table: a clear head and a builder's mindset.
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
              { number: '10+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Done' },
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
              <p className="text-sm font-semibold text-neutral-800">Business Engineer</p>
              <p className="text-xs text-neutral-500">Product & Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
