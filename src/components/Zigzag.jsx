import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';

import czechgroup from '../assets/img/czechgroup.svg';
import adl from '../assets/img/adl.png';
import ts from '../assets/img/ts.svg';
import huawei from '../assets/img/huawei.svg';
import ecom from '../assets/img/ecom.png';

// Newest first. Title, company, period and text are translated under experience.items.<id>.
const data = [
  { id: 'freelance', imageUrl: null, clients: ['bikespezl', 'cayman'] },
  { id: 'czechgroup', imageUrl: czechgroup },
  { id: 'desafio', imageUrl: adl },
  { id: 'product', imageUrl: adl },
  { id: 'huawei', imageUrl: huawei },
  { id: 'ecom', imageUrl: ecom },
  { id: 'travel', imageUrl: ts },
];

const FreelanceMark = ({ label }) => (
  <div className="flex flex-col items-center gap-2 text-primary-600">
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    <span className="text-sm font-semibold uppercase tracking-wider">{label}</span>
  </div>
);

const ZigzagItem = ({ id, imageUrl, clients, index }) => {
  const { t } = useTranslation();
  const flip = index % 2 === 1;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const base = `experience.items.${id}`;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className={`w-full py-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className={`flex flex-col ${flip ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
        <div className="w-full md:w-2/5">
          <div className="p-8 min-h-[9rem] rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt={t(`${base}.company`)} loading="lazy" className="max-h-20 w-auto object-contain" />
            ) : (
              <FreelanceMark label={t(`${base}.company`)} />
            )}
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <span className="inline-block text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">{t(`${base}.period`)}</span>
          <h2 className="text-2xl font-bold text-neutral-800 mb-1">{t(`${base}.title`)}</h2>
          <p className="text-sm font-medium text-neutral-500 mb-3">{t(`${base}.company`)}</p>
          <p className="text-neutral-600 leading-relaxed">{t(`${base}.text`)}</p>

          {clients && (
            <ul className="mt-5 space-y-3">
              {clients.map((client) => (
                <li key={client} className="p-4 rounded-xl bg-neutral-50 ring-1 ring-neutral-100">
                  <p className="text-sm font-semibold text-neutral-800 mb-1">{t(`${base}.clients.${client}.name`)}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{t(`${base}.clients.${client}.text`)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

export default function ZigzagList() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader
          as="h1"
          eyebrow={t('experience.eyebrow')}
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
          className="mb-16"
        />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />
          {data.map((item, index) => (
            <ZigzagItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
