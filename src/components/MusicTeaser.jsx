import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Small preview of /music on the Home page, using the music page's warm palette.
const MusicTeaser = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-stage-950 py-16 md:py-20">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-ember-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-ember-600/10 blur-3xl" />
      <div className="relative container-width flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-400 mb-3">{t('home.music_teaser.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-3">{t('home.music_teaser.title')}</h2>
          <p className="text-cream/70 leading-relaxed">{t('home.music_teaser.text')}</p>
        </div>
        <Link
          to="/music"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ember-500 text-stage-950 font-semibold shadow-lg shadow-ember-500/20 hover:bg-ember-400 hover:-translate-y-0.5 transition-all duration-300"
        >
          {t('home.music_teaser.cta')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default MusicTeaser;
