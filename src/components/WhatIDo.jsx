import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const ICONS = {
  consulting: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  business: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  fullstack: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
};

const CARDS = ['consulting', 'business', 'fullstack'];

const WhatIDo = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader
          eyebrow={t('home.what_i_do.eyebrow')}
          title={t('home.what_i_do.title')}
          subtitle={t('home.what_i_do.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((key) => {
            const tags = t(`home.what_i_do.cards.${key}.tags`, { returnObjects: true });
            return (
              <article
                key={key}
                className="group flex flex-col p-8 rounded-2xl bg-neutral-50 ring-1 ring-neutral-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={ICONS[key]} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{t(`home.what_i_do.cards.${key}.title`)}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-grow">
                  {t(`home.what_i_do.cards.${key}.description`)}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {Array.isArray(tags) &&
                    tags.map((tag) => (
                      <li key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white text-neutral-600 ring-1 ring-neutral-200">
                        {tag}
                      </li>
                    ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            {t('home.what_i_do.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
