import React from 'react';
import { useTranslation } from 'react-i18next';
import perfilImage from '../assets/img/perfil.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();

  const skills = [
    { category: t('about.skills.frontend'), items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'] },
    { category: t('about.skills.backend'), items: ['Node.js', 'PHP', 'MongoDB', 'MySQL', 'REST APIs'] },
    { category: t('about.skills.tools'), items: ['Git', 'Jira', 'Power BI', 'Trello', 'Notion'] },
    { category: t('about.skills.soft'), items: ['Team Leadership', 'Teaching', 'Project Management', 'Problem Solving'] },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
            {t('about.eyebrow') || 'About Me'}
          </span>
          <h1 className="section-title">{t('about.title') || 'Sobre Mí'}</h1>
          <p className="section-subtitle">{t('about.subtitle') || 'Get to know me better'}</p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          <div className="flex-1 flex justify-center animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-accent-100 rounded-3xl blur-2xl opacity-40" />
              <img
                src={perfilImage}
                alt="Profile"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl object-cover ring-4 ring-white shadow-2xl"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left animate-slide-in-right">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">
              {t('about.greeting') || 'Hi, I\'m Rafael Quinteros'}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {t('about.bio1') || 'I\'m a Full Stack Developer with experience building web applications and teaching others.'}
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              {t('about.bio2') || 'I\'ve worked with companies across different industries, from real estate to e-commerce, delivering quality solutions.'}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link to="/contact" className="btn-primary">
                {t('contact.get_in_touch')}
              </Link>
              <Link to="/experience" className="btn-secondary">
                {t('navbar.experience')}
              </Link>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: t('about.info.location') || 'Location', value: t('about.info.location_val') || 'Remote / Chile' },
                { label: t('about.info.experience') || 'Experience', value: t('about.info.experience_val') || '5+ Years' },
                { label: t('about.info.projects') || 'Projects', value: t('about.info.projects_val') || '15+' },
                { label: t('about.info.languages') || 'Languages', value: t('about.info.languages_val') || 'ES / EN' },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-neutral-50">
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm font-semibold text-neutral-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neutral-800 text-center mb-10">
            {t('about.skills_title') || 'Skills & Expertise'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h4 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
