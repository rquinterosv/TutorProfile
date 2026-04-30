import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import heroImage1 from "../assets/img/por1.png";
import heroImage2 from "../assets/img/por2.png";

// ---------- Small UI atoms ----------

const StackTag = ({ label }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 ring-1 ring-primary-200/50">
    {label}
  </span>
);

const ExternalArrow = ({ className = "" }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
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

// ---------- Hero card (featured) ----------

const ProjectHeroCard = ({ title, description, image, link, stack, category, domain }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-1/2 p-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl ring-1 ring-neutral-100 hover:ring-primary-200 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 sm:h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-lg">
              {t('home.portfolio.featured')}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur text-neutral-700 ring-1 ring-white/50">
              {t(`home.portfolio.categories.${category}`, category)}
            </span>
          </div>
        </div>

        <div className="p-6 text-left">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <Favicon domain={domain} size={36} />
              <h3 className="text-xl font-bold text-neutral-800 truncate group-hover:text-primary-600 transition-colors">
                {title}
              </h3>
            </div>
            <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
              {t('home.portfolio.visit')}
              <ExternalArrow className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">{description}</p>
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

const ProjectMiniCard = ({ title, description, link, linkname, stack, category, domain, index }) => {
  const { t } = useTranslation();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl bg-white shadow-md hover:shadow-xl ring-1 ring-neutral-100 hover:ring-primary-200 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Top row: favicon + category + arrow */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <Favicon domain={domain} size={28} />
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary-50 text-primary-600 ring-1 ring-primary-100">
            {t(`home.portfolio.categories.${category}`, category)}
          </span>
        </div>
        <ExternalArrow className="text-neutral-400 shrink-0 transition-all duration-300 group-hover:text-primary-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <h4 className="text-base font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
        {title}
      </h4>
      <p className="text-neutral-500 text-sm leading-relaxed mb-3 line-clamp-2">
        {description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {stack.map((s) => (
          <StackTag key={s} label={s} />
        ))}
      </div>

      {/* Footer link name */}
      <div className="pt-3 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 group-hover:text-primary-600 transition-colors truncate">
          {linkname}
        </p>
      </div>
    </a>
  );
};

// ---------- Filters ----------

const FilterPill = ({ label, count, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ring-1 ${
      active
        ? "bg-primary-600 text-white ring-primary-600 shadow-md"
        : "bg-white text-neutral-600 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300"
    }`}
  >
    {label}
    <span className={`ml-2 text-xs ${active ? "text-primary-200" : "text-neutral-400"}`}>
      {count}
    </span>
  </button>
);

// ---------- Main component ----------

const Projects = () => {
  const { t } = useTranslation();

  const heroProjects = [
    {
      title: "Prohopo",
      description: "Real-estate platform built from the ground up with a fully dynamic CMS-style admin where content, listings and imagery can be updated in real time.",
      image: heroImage1,
      link: "https://www.prohopo.cz/",
      domain: "prohopo.cz",
      category: "Real Estate",
      stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      title: "Adam Růžička",
      description: "Bespoke real-estate website with custom design and tailored logic that adapts content based on user interaction.",
      image: heroImage2,
      link: "https://www.adamruzickareality.cz/",
      domain: "adamruzickareality.cz",
      category: "Real Estate",
      stack: ["JavaScript", "HTML/CSS", "PHP"],
    },
  ];

  const miniProjects = [
    { title: "Fencee", description: "Full stack improvements to storefront and back-office tooling for this Czech fencing brand.", link: "https://www.fencee.cz", linkname: "fencee.cz", domain: "fencee.cz", category: "E-commerce", stack: ["PHP", "JavaScript", "MySQL"] },
    { title: "Dogtrace", description: "End-to-end features for GPS dog-tracking product site with marketing and technical pages.", link: "https://www.dogtrace.com/", linkname: "dogtrace.com", domain: "dogtrace.com", category: "E-commerce", stack: ["PHP", "JavaScript", "MySQL"] },
    { title: "Sysel Polak", description: "Built from scratch with pixel-perfect UX/UI implementation for this Czech legal-services firm.", link: "https://www.sysel-polak.cz/", linkname: "sysel-polak.cz", domain: "sysel-polak.cz", category: "Corporate", stack: ["PHP", "JavaScript", "HTML/CSS"] },
    { title: "Doucebnice", description: "Complete platform from zero — UI, responsive behavior and data flow implemented 1:1 with mockups.", link: "https://www.doucebnice.cz/", linkname: "doucebnice.cz", domain: "doucebnice.cz", category: "Education", stack: ["PHP", "JavaScript", "MySQL"] },
    { title: "Autojeraby Horak", description: "Full site for crane-rental company with complete front + back end implementation.", link: "https://www.autojerabyhorak.cz/", linkname: "autojerabyhorak.cz", domain: "autojerabyhorak.cz", category: "Services", stack: ["PHP", "JavaScript", "HTML/CSS"] },
    { title: "Starlux", description: "End-to-end build for lighting brand with complete front and back end matching design system.", link: "https://www.starlux.cz/", linkname: "starlux.cz", domain: "starlux.cz", category: "E-commerce", stack: ["PHP", "JavaScript", "MySQL"] },
    { title: "Chytré střechy", description: "Created from scratch for roofing company with faithful UX/UI and editable back-end.", link: "https://www.chytrestrechy.cz/", linkname: "chytrestrechy.cz", domain: "chytrestrechy.cz", category: "Services", stack: ["PHP", "JavaScript", "HTML/CSS"] },
    { title: "Centrum veterinární péče", description: "Rebuilt scheduling logic for multi-location vet clinic network with date handling.", link: "https://www.veterinar-palan.cz/", linkname: "veterinar-palan.cz", domain: "veterinar-palan.cz", category: "Services", stack: ["PHP", "JavaScript", "MySQL"] },
    { title: "Desafío Latam", description: "Tech tutor teaching React and Node.js fundamentals with code reviews on capstone projects.", link: "https://desafiolatam.com/full-stack-javascript-b/", linkname: "desafiolatam.com", domain: "desafiolatam.com", category: "Education", stack: ["React", "Node.js", "Teaching"] },
    { title: "Grime Fighters", description: "Full site for Canadian cleaning-services company with clean front end and maintainable logic.", link: "https://grimefighters.ca/", linkname: "grimefighters.ca", domain: "grimefighters.ca", category: "Services", stack: ["HTML/CSS", "JavaScript"] },
    { title: "Pronachem", description: "Rebuilt homepage with banners, CTAs and improved responsive behavior for mobile flow.", link: "https://www.pronachem.cz/", linkname: "pronachem.cz", domain: "pronachem.cz", category: "Corporate", stack: ["PHP", "JavaScript", "HTML/CSS"] },
    { title: "Ekoplant", description: "Modernized homepage with editable content surface and improved responsive behavior.", link: "https://www.ekoplant.cz/", linkname: "ekoplant.cz", domain: "ekoplant.cz", category: "Corporate", stack: ["PHP", "JavaScript", "HTML/CSS"] },
    { title: "MYJOYS", description: "Refreshed homepage for German bathroom-goods brand with editable banners and UI updates.", link: "https://www.myjoysbad.de/", linkname: "myjoysbad.de", domain: "myjoysbad.de", category: "E-commerce", stack: ["PHP", "JavaScript", "MySQL"] },
  ];

  const categories = useMemo(() => {
    const counts = miniProjects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return [
      { label: t("home.portfolio.filter_all"), value: "all", count: miniProjects.length },
      ...Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([label, count]) => ({
          label: t(`home.portfolio.categories.${label}`, label),
          value: label,
          count,
        })),
    ];
  }, [t]);

  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? miniProjects : miniProjects.filter((p) => p.category === filter);

  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-slide-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
            {t('home.portfolio.eyebrow')}
          </span>
          <h2 className="section-title">
            {t("home.portfolio.title")}
          </h2>
          <p className="section-subtitle">
            {t("home.portfolio.subtitle")}
          </p>
        </div>

        {/* Hero cards */}
        <div className="flex flex-wrap -mx-3 mb-12">
          {heroProjects.map((p, i) => (
            <ProjectHeroCard
              key={p.title}
              {...p}
              description={t(`home.portfolio.hero${i + 1}_desc`, p.description)}
            />
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((c) => (
            <FilterPill
              key={c.value}
              label={c.label}
              count={c.count}
              active={filter === c.value}
              onClick={() => setFilter(c.value)}
            />
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <ProjectMiniCard
                {...project}
                description={t(`home.portfolio.descriptions.${project.title}`, project.description)}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
