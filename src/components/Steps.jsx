import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const steps = [
  {
    key: 'discover',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    key: 'propose',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    key: 'deliver',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    key: 'support',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
];

const Steps = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <SectionHeader
          eyebrow={t('services.steps.eyebrow')}
          title={t('services.steps.title')}
          subtitle={t('services.steps.description')}
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <li key={step.key} className="group p-8 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={step.icon} />
                </svg>
              </div>
              <span className="inline-block mb-3 text-3xl font-bold text-primary-100">0{i + 1}</span>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{t(`services.steps.${step.key}.title`)}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{t(`services.steps.${step.key}.description`)}</p>
            </li>
          ))}
        </ol>

        <Link to="/contact?topic=consulting" className="btn-primary text-base px-8 py-3.5">
          {t('services.steps.cta')}
        </Link>
      </div>
    </section>
  );
};

export default Steps;
