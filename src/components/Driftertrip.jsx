import React from 'react';
import { useTranslation } from 'react-i18next';

const Driftertrip = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-100 rounded-full ring-1 ring-orange-300">
            {t('home.driftertrip.eyebrow')}
          </span>

          {/* Logo text */}
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 select-none">
            <span className="text-stone-900 font-normal">DRIFTER</span>
            <span className="text-orange-600 italic font-normal">TRIP</span>
          </h2>

          {/* Tagline */}
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            {t('home.driftertrip.tagline')}
          </p>
          <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            {t('home.driftertrip.description')}
          </p>

          {/* CTA */}
          <a
            href="https://friendsaround.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-medium rounded-lg shadow-lg hover:bg-orange-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            {t('home.driftertrip.cta')}
            <svg
              width="18"
              height="18"
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
          </a>

          {/* URL hint */}
          <p className="mt-5 text-xs text-stone-400 tracking-wide">
drifter-trip.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Driftertrip;
