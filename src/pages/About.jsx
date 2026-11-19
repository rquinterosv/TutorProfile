import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import perfilImage from '../assets/img/perfil.jpeg';
import SectionHeader from '../components/SectionHeader';

const SKILL_GROUPS = ['business', 'frontend', 'backend', 'cloud'];
const INFO = ['location', 'experience', 'projects', 'languages'];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader as="h1" eyebrow={t('about.eyebrow')} title={t('about.title')} subtitle={t('about.subtitle')} className="mb-16" />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          <div className="flex-1 flex justify-center animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-accent-100 rounded-3xl blur-2xl opacity-40" />
              <img
                src={perfilImage}
                alt={t('common.photo_alt')}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl object-cover ring-4 ring-white shadow-2xl"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left animate-slide-in-right">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">{t('about.greeting')}</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">{t('about.bio1')}</p>
            <p className="text-neutral-600 leading-relaxed mb-4">{t('about.bio2')}</p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              <Trans
                i18nKey="about.music_line"
                components={{ musicLink: <Link to="/music" className="font-semibold text-primary-600 hover:text-primary-700 underline underline-offset-4" /> }}
              />
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link to="/contact" className="btn-primary">
                {t('about.cta_contact')}
              </Link>
              <Link to="/experience" className="btn-secondary">
                {t('about.cta_experience')}
              </Link>
            </div>

            <dl className="grid grid-cols-2 gap-4">
              {INFO.map((key) => (
                <div key={key} className="p-3 rounded-xl bg-neutral-50">
                  <dt className="text-xs text-neutral-500 uppercase tracking-wide">{t(`about.info.${key}`)}</dt>
                  <dd className="text-sm font-semibold text-neutral-800">{t(`about.info.${key}_val`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-800 text-center mb-10">{t('about.skills_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group) => {
              const items = t(`about.skills.${group}.items`, { returnObjects: true });
              return (
                <div key={group} className="p-6 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <h3 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-4">{t(`about.skills.${group}.title`)}</h3>
                  <ul className="space-y-2">
                    {Array.isArray(items) &&
                      items.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-neutral-600">
                          <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {skill}
                        </li>
                      ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
