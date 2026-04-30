import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    titleKey: 'services.steps.meet.title',
    descKey: 'services.steps.meet.description',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    titleKey: 'services.steps.schedule.title',
    descKey: 'services.steps.schedule.description',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    titleKey: 'services.steps.learn.title',
    descKey: 'services.steps.learn.description',
  },
];

const Steps = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
          {t('services.steps.eyebrow') || 'How it works'}
        </span>
        <h2 className="section-title">{t('services.steps.title')}</h2>
        <p className="section-subtitle mb-12">{t('services.steps.description')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <span className="inline-block mb-3 text-3xl font-bold text-primary-100">0{i + 1}</span>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{t(step.titleKey)}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{t(step.descKey)}</p>
            </div>
          ))}
        </div>

        <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
          {t('contact.get_in_touch')}
        </Link>
      </div>
    </section>
  );
};

export default Steps;