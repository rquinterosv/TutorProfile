import React from 'react';
import { useTranslation } from 'react-i18next';

const Driftertrip = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="relative container-width">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-accent-500 bg-accent-500/10 rounded-full ring-1 ring-accent-500/20">
            {t('home.driftertrip.eyebrow')}
          </span>

           {/* Logo */}
           <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 select-none">
             <span className="text-white font-normal">DRIFTER</span>
             <span className="text-accent-500 italic font-normal">TRIP</span>
           </h2>

          {/* Tagline */}
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-3 max-w-2xl mx-auto">
            {t('home.driftertrip.tagline')}
          </p>
          <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            {t('home.driftertrip.description')}
          </p>

          {/* CTA */}
          <a
            href="https://drifter-trip.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-medium rounded-xl shadow-lg shadow-accent-500/20 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            {t('home.driftertrip.cta')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>

          <p className="mt-4 text-xs text-neutral-500 tracking-wide">
            drifter-trip.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Driftertrip;
