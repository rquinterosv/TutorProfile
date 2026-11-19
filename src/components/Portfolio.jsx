import { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import { featuredProject, heroProjects, gridProjects } from '../data/projects';

// ---------- Small UI atoms ----------

const StackTag = ({ label, dark = false }) => (
  <span
    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${
      dark ? 'bg-white/10 text-white ring-white/20' : 'bg-primary-50 text-primary-700 ring-primary-200/50'
    }`}
  >
    {label}
  </span>
);

const ExternalArrow = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const Favicon = ({ domain, size = 32 }) => (
  <img
    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
    alt=""
    width={size}
    height={size}
    loading="lazy"
    className="rounded-md bg-neutral-100 p-1 ring-1 ring-neutral-200"
  />
);

// ---------- Featured (cloud architecture) ----------

const ArchNode = ({ label, sub, highlight = false }) => (
  <div
    className={`flex-1 min-w-0 rounded-xl px-4 py-3 text-center ring-1 ${
      highlight ? 'bg-primary-500/20 ring-primary-400/50' : 'bg-white/5 ring-white/15'
    }`}
  >
    <p className="text-sm font-semibold text-white">{label}</p>
    <p className="text-xs text-neutral-400">{sub}</p>
  </div>
);

const Connector = () => (
  <div className="flex items-center justify-center text-primary-300 shrink-0" aria-hidden="true">
    <svg className="w-6 h-6 rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4" />
    </svg>
  </div>
);

const FeaturedProject = () => {
  const { t } = useTranslation();
  const base = `home.portfolio.projects.${featuredProject.id}`;
  const highlights = t(`${base}.highlights`, { returnObjects: true });

  return (
    <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 p-8 md:p-12 mb-12 shadow-2xl">
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="relative grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white">{t('home.portfolio.featured')}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-neutral-200 ring-1 ring-white/20">
              {t(`home.portfolio.categories.${featuredProject.category}`)}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{featuredProject.title}</h3>
          <p className="text-primary-200 font-medium mb-4">{t(`${base}.subtitle`)}</p>
          <p className="text-neutral-300 leading-relaxed mb-6">{t(`${base}.description`)}</p>
          {Array.isArray(highlights) && (
            <ul className="space-y-2 mb-6">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-neutral-300">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2">
            {featuredProject.stack.map((s) => (
              <StackTag key={s} label={s} dark />
            ))}
          </div>
        </div>

        {/* Simplified architecture sketch */}
        <figure className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-6">
          <figcaption className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
            {t(`${base}.arch.caption`)}
          </figcaption>
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <ArchNode label={t(`${base}.arch.web`)} sub={t(`${base}.arch.web_sub`)} />
            <Connector />
            <ArchNode label={t(`${base}.arch.cloud`)} sub={t(`${base}.arch.cloud_sub`)} highlight />
            <Connector />
            <ArchNode label={t(`${base}.arch.geometry`)} sub={t(`${base}.arch.geometry_sub`)} />
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
            <svg className="w-4 h-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t(`${base}.arch.cost`)}
          </p>
        </figure>
      </div>
    </article>
  );
};

// ---------- Hero card ----------

const ProjectHeroCard = ({ id, title, image, link, stack, category, domain }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-1/2 p-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl ring-1 ring-neutral-100 hover:ring-primary-200 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="relative overflow-hidden">
          <img src={image} alt={title} loading="lazy" className="w-full h-64 sm:h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur text-neutral-700 ring-1 ring-white/50">
            {t(`home.portfolio.categories.${category}`)}
          </span>
        </div>

        <div className="p-6 text-left">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <Favicon domain={domain} size={36} />
              <h3 className="text-xl font-bold text-neutral-800 truncate group-hover:text-primary-600 transition-colors">{title}</h3>
            </div>
            <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
              {t('home.portfolio.visit')}
              <ExternalArrow className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">{t(`home.portfolio.projects.${id}.description`)}</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <StackTag key={s} label={s} />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

// ---------- Mini card ----------

const ProjectMiniCard = ({ id, title, link, stack, category, domain }) => {
  const { t } = useTranslation();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full p-5 rounded-xl bg-white shadow-md hover:shadow-xl ring-1 ring-neutral-100 hover:ring-primary-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <Favicon domain={domain} size={28} />
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary-50 text-primary-600 ring-1 ring-primary-100">
            {t(`home.portfolio.categories.${category}`)}
          </span>
        </div>
        <ExternalArrow className="text-neutral-400 shrink-0 transition-all duration-300 group-hover:text-primary-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <h4 className="text-base font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">{title}</h4>
      <p className="text-neutral-500 text-sm leading-relaxed mb-3 line-clamp-3 flex-grow">{t(`home.portfolio.projects.${id}.description`)}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {stack.map((s) => (
          <StackTag key={s} label={s} />
        ))}
      </div>

      <div className="pt-3 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 group-hover:text-primary-600 transition-colors truncate">{domain}</p>
      </div>
    </a>
  );
};

// ---------- Filters ----------

const FilterPill = ({ label, count, active, onClick }) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ring-1 ${
      active ? 'bg-primary-600 text-white ring-primary-600 shadow-md' : 'bg-white text-neutral-600 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300'
    }`}
  >
    {label}
    <span className={`ml-2 text-xs ${active ? 'text-primary-200' : 'text-neutral-400'}`}>{count}</span>
  </button>
);

// ---------- Main component ----------

const categoryCounts = Object.entries(
  gridProjects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {})
).sort((a, b) => b[1] - a[1]);

const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const categories = useMemo(
    () => [
      { label: t('home.portfolio.filter_all'), value: 'all', count: gridProjects.length },
      ...categoryCounts.map(([value, count]) => ({ label: t(`home.portfolio.categories.${value}`), value, count })),
    ],
    [t]
  );

  const filtered = filter === 'all' ? gridProjects : gridProjects.filter((p) => p.category === filter);

  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" className="section-padding bg-neutral-50">
      <div className="container-width">
        <SectionHeader
          eyebrow={t('home.portfolio.eyebrow')}
          title={t('home.portfolio.title')}
          subtitle={t('home.portfolio.subtitle')}
          className="mb-14"
        />

        <FeaturedProject />

        <div className="flex flex-wrap -mx-3 mb-12">
          {heroProjects.map((p) => (
            <ProjectHeroCard key={p.id} {...p} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((c) => (
            <FilterPill key={c.value} label={c.label} count={c.count} active={filter === c.value} onClick={() => setFilter(c.value)} />
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <ProjectMiniCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
