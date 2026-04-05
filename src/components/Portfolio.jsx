import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import heroImage1 from "../assets/img/por1.png";
import heroImage2 from "../assets/img/por2.png";

// ---------- Small UI atoms ----------

const StackTag = ({ label }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-400/20">
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
    className="rounded-md bg-white/90 p-1 ring-1 ring-white/10"
  />
);

// ---------- Hero card (featured) ----------

const ProjectHeroCard = ({ title, description, image, link, stack, category, domain }) => {
  const { t } = useTranslation();
  return (
  <div className="w-full lg:w-1/2 p-4">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden bg-slate-800/60 backdrop-blur ring-1 ring-white/10 hover:ring-blue-400/40 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white shadow-lg">
            {t('home.portfolio.featured')}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur text-white ring-1 ring-white/20">
            {t(`home.portfolio.categories.${category}`, category)}
          </span>
        </div>
      </div>

      <div className="p-6 text-left">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <Favicon domain={domain} size={36} />
            <h3 className="text-2xl font-bold text-white truncate group-hover:text-blue-300 transition-colors">
              {title}
            </h3>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 group-hover:text-blue-200 transition-colors">
            {t('home.portfolio.visit')}
            <ExternalArrow className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{description}</p>
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
    className="group relative flex flex-col text-left p-6 rounded-xl bg-slate-800/50 backdrop-blur ring-1 ring-white/10 hover:ring-blue-400/40 hover:bg-slate-800/80 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    {/* Top row: favicon + category + arrow */}
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="flex items-center gap-3 min-w-0">
        <Favicon domain={domain} size={32} />
        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20">
          {t(`home.portfolio.categories.${category}`, category)}
        </span>
      </div>
      <ExternalArrow className="text-slate-400 shrink-0 transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>

    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
      {title}
    </h4>
    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
      {description}
    </p>

    {/* Stack tags */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {stack.map((s) => (
        <StackTag key={s} label={s} />
      ))}
    </div>

    {/* Footer link name */}
    <div className="mt-auto pt-3 border-t border-white/5">
      <p className="text-xs text-slate-500 group-hover:text-blue-300 transition-colors truncate">
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
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ring-1 backdrop-blur ${
      active
        ? "bg-white text-blue-700 ring-white shadow-lg"
        : "bg-white/10 text-white ring-white/30 hover:bg-white/20"
    }`}
  >
    {label}
    <span
      className={`ml-2 text-xs ${
        active ? "text-blue-500" : "text-blue-100"
      }`}
    >
      {count}
    </span>
  </button>
);

// ---------- Main component ----------

const Projects = () => {
  const { t } = useTranslation();

  // Featured / hero projects
  const heroProjects = [
    {
      title: "Prohopo",
      description:
        "Real-estate platform built from the ground up with a fully dynamic CMS-style admin where content, listings and imagery can be updated in real time. Delivered a polished, responsive UX tuned for mobile browsing.",
      image: heroImage1,
      link: "https://www.prohopo.cz/",
      domain: "prohopo.cz",
      category: "Real Estate",
      stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      title: "Adam Růžička",
      description:
        "Bespoke real-estate website coded directly without a CMS. Custom design and tailored logic provide a dynamic, client-editable structure that adapts content based on user interaction.",
      image: heroImage2,
      link: "https://www.adamruzickareality.cz/",
      domain: "adamruzickareality.cz",
      category: "Real Estate",
      stack: ["JavaScript", "HTML/CSS", "PHP"],
    },
  ];

  // Mini projects — enriched with category + stack + rewritten descriptions
  const miniProjects = [
    {
      title: "Fencee",
      description:
        "Contributed across the full stack, shipping improvements to both the customer-facing storefront and back-office tooling for this Czech fencing brand.",
      link: "https://www.fencee.cz",
      linkname: "fencee.cz",
      domain: "fencee.cz",
      category: "E-commerce",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Dogtrace",
      description:
        "Worked end-to-end on new features and fixes for a GPS dog-tracking product site, balancing marketing content with technical product detail pages.",
      link: "https://www.dogtrace.com/",
      linkname: "dogtrace.com",
      domain: "dogtrace.com",
      category: "E-commerce",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Sysel Polak",
      description:
        "Built from scratch, implementing the full UX/UI handoff pixel-perfect across front and back end for this Czech legal-services firm.",
      link: "https://www.sysel-polak.cz/",
      linkname: "sysel-polak.cz",
      domain: "sysel-polak.cz",
      category: "Corporate",
      stack: ["PHP", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Doucebnice",
      description:
        "Delivered the entire platform from zero — UI fidelity, responsive behavior and data flow all implemented 1:1 against the design team's mockups.",
      link: "https://www.doucebnice.cz/",
      linkname: "doucebnice.cz",
      domain: "doucebnice.cz",
      category: "Education",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Autojeraby Horak",
      description:
        "Built the site from scratch for a Czech crane-rental company, translating the UX/UI team's graphics into a fully working front + back end.",
      link: "https://www.autojerabyhorak.cz/",
      linkname: "autojerabyhorak.cz",
      domain: "autojerabyhorak.cz",
      category: "Services",
      stack: ["PHP", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Starlux",
      description:
        "End-to-end build for a lighting brand: shipped the complete front and back end implementation matching the design system to the pixel.",
      link: "https://www.starlux.cz/",
      linkname: "starlux.cz",
      domain: "starlux.cz",
      category: "E-commerce",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Chytré střechy",
      description:
        "Created from scratch for a Czech roofing company — faithful UX/UI implementation plus the supporting back-end required to keep content editable.",
      link: "https://www.chytrestrechy.cz/",
      linkname: "chytrestrechy.cz",
      domain: "chytrestrechy.cz",
      category: "Services",
      stack: ["PHP", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Centrum veterinární péče",
      description:
        "Rebuilt the scheduling logic for a multi-location vet clinic network, focusing on date handling and per-clinic operating-hours configuration.",
      link: "https://www.veterinar-palan.cz/",
      linkname: "veterinar-palan.cz",
      domain: "veterinar-palan.cz",
      category: "Services",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
    {
      title: "Desafío Latam",
      description:
        "Tech tutor for aspiring full-stack developers — taught React and Node.js fundamentals and ran code reviews across student capstone projects.",
      link: "https://desafiolatam.com/full-stack-javascript-b/",
      linkname: "desafiolatam.com",
      domain: "desafiolatam.com",
      category: "Education",
      stack: ["React", "Node.js", "Teaching"],
    },
    {
      title: "Grime Fighters",
      description:
        "Developed the full site for a Canadian cleaning-services company. Clean HTML/CSS front end backed by solid, maintainable logic.",
      link: "https://grimefighters.ca/",
      linkname: "grimefighters.ca",
      domain: "grimefighters.ca",
      category: "Services",
      stack: ["HTML/CSS", "JavaScript"],
    },
    {
      title: "Pronachem",
      description:
        "Rebuilt the homepage — banners, calls-to-action and editable content blocks — and sharpened the responsive behavior for better mobile flow.",
      link: "https://www.pronachem.cz/",
      linkname: "pronachem.cz",
      domain: "pronachem.cz",
      category: "Corporate",
      stack: ["PHP", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Ekoplant",
      description:
        "Modernized the homepage and its editable content surface, plus improved responsive behavior so the marketing team can self-serve updates.",
      link: "https://www.ekoplant.cz/",
      linkname: "ekoplant.cz",
      domain: "ekoplant.cz",
      category: "Corporate",
      stack: ["PHP", "JavaScript", "HTML/CSS"],
    },
    {
      title: "MYJOYS",
      description:
        "Refreshed the homepage for a German bathroom-goods brand, shipping editable banners and intuitive UI updates for a smoother shopping flow.",
      link: "https://www.myjoysbad.de/",
      linkname: "myjoysbad.de",
      domain: "myjoysbad.de",
      category: "E-commerce",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
  ];

  // Categories derived from data
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
  const filtered =
    filter === "all"
      ? miniProjects
      : miniProjects.filter((p) => p.category === filter);

  // Stagger entry: reveal grid on mount with IntersectionObserver
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700">
      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/15 backdrop-blur rounded-full ring-1 ring-white/30">
            {t('home.portfolio.eyebrow')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            {t("home.portfolio.title")}
          </h2>
          <p className="text-blue-50/90 text-base md:text-lg leading-relaxed">
            {t("home.portfolio.subtitle")}
          </p>
        </div>

        {/* Hero cards */}
        <div className="flex flex-wrap -mx-4 mb-16">
          {heroProjects.map((p, i) => (
            <ProjectHeroCard
              key={p.title}
              {...p}
              description={t(`home.portfolio.hero${i + 1}_desc`, p.description)}
            />
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <ProjectMiniCard
                {...project}
                description={t(
                  `home.portfolio.descriptions.${project.title}`,
                  project.description
                )}
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
