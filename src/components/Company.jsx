import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const companies = [
  { name: 'Czech Group', color: 'text-primary-600' },
  { name: 'Desafío Latam', color: 'text-primary-600' },
  { name: 'Huawei', color: 'text-primary-600' },
  { name: 'Ecom Energía', color: 'text-primary-600' },
  { name: 'Travel Security', color: 'text-primary-600' },
];

const LogoGrid = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
          {t('home.company.eyebrow') || 'Trusted by'}
        </span>
        <h2 className="section-title">{t('home.company.title')}</h2>

        <div className="mt-8 mb-10 flex flex-wrap justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <Link
              key={index}
              to="/experience"
              className="flex items-center justify-center px-6 py-4 rounded-xl hover:bg-neutral-50 transition-all duration-300"
            >
              <span className={`text-lg font-bold ${company.color}`}>{company.name}</span>
            </Link>
          ))}
        </div>

        <Link to="/experience" className="btn-primary">
          {t('home.company.more')}
        </Link>
      </div>
    </section>
  );
};

export default LogoGrid;
