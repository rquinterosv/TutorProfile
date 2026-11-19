import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import webImage from '../assets/img/computer.jpg';
import consultingImage from '../assets/img/meeting.jpg';

const SERVICES = [
  { id: 'web', image: webImage, topic: 'development' },
  { id: 'consulting', image: consultingImage, topic: 'consulting' },
];

const ServiceCard = ({ id, image, topic, flip }) => {
  const { t } = useTranslation();
  const base = `services.items.${id}`;
  const points = t(`${base}.points`, { returnObjects: true });
  const tags = t(`${base}.tags`, { returnObjects: true });

  return (
    <article className={`flex flex-col ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full mb-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300`}>
      <div className="w-full lg:w-2/5 relative">
        <img src={image} alt="" loading="lazy" className="w-full h-64 lg:h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-8 lg:p-10 lg:w-3/5 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-neutral-800 mb-2">{t(`${base}.title`)}</h2>
        <p className="text-primary-600 font-medium mb-4">{t(`${base}.subtitle`)}</p>
        <p className="text-neutral-600 mb-5 leading-relaxed">{t(`${base}.description`)}</p>
        {Array.isArray(points) && (
          <ul className="space-y-2 mb-6">
            {points.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-neutral-600">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {Array.isArray(tags) &&
            tags.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full">
                {tech}
              </span>
            ))}
        </div>
        <Link to={`/contact?topic=${topic}`} className="btn-primary w-fit">
          {t(`${base}.cta`)}
        </Link>
      </div>
    </article>
  );
};

const Information = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-width">
        <SectionHeader
          as="h1"
          eyebrow={t('services.header.eyebrow')}
          title={t('services.header.title')}
          subtitle={t('services.header.subtitle')}
        />
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.id} {...s} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Information;
