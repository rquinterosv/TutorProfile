import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import InstagramVideos from '../components/music/InstagramVideos';
import BookingForm from '../components/music/BookingForm';
import MusicFooter from '../components/music/MusicFooter';
import ScrollLink from '../components/music/ScrollLink';
import { heroPhoto, musicProjects, originalSongs, instagramUrl } from '../data/musicVideos';
import { INSTAGRAM_ICON } from '../data/social';

const LINEUPS = ['solo', 'duo', 'band'];
const SETS = ['party', 'calm'];

// ---------- Atoms ----------

const Heading = ({ eyebrow, title, text, center = false }) => (
  <div className={`mb-10 md:mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-400 mb-3">{eyebrow}</p>
    <h2 className="font-display text-3xl md:text-5xl text-cream leading-tight">{title}</h2>
    {text && <p className="mt-4 text-cream/65 leading-relaxed">{text}</p>}
  </div>
);

// Scrolls to the booking form further down this page.
const BookButton = ({ children, className = '' }) => (
  <ScrollLink
    to="booking"
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ember-500 text-stage-950 font-semibold shadow-lg shadow-ember-500/25 hover:bg-ember-400 hover:-translate-y-0.5 transition-all duration-300 ${className}`}
  >
    {children}
  </ScrollLink>
);

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container-width">{children}</div>
  </section>
);

// ---------- Sections ----------

const Hero = () => {
  const { t } = useTranslation();
  const chips = t('music.hero.chips', { returnObjects: true });

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-ember-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[26rem] w-[26rem] rounded-full bg-ember-600/10 blur-3xl" />

      <div className="relative container-width grid lg:grid-cols-2 gap-12 items-center pt-10 pb-20 md:pt-16 md:pb-28">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember-400 mb-5">{t('music.hero.tagline')}</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6">
            {t('music.hero.title')}
          </h1>
          <p className="font-display italic text-xl sm:text-2xl text-ember-200 leading-snug mb-6">{t('music.hero.genre')}</p>
          <p className="text-cream/70 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">{t('music.hero.text')}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <BookButton>{t('music.hero.cta_book')}</BookButton>
            <ScrollLink
              to="videos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full ring-1 ring-cream/25 text-cream font-semibold hover:bg-cream/5 hover:ring-cream/40 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t('music.hero.cta_watch')}
            </ScrollLink>
          </div>

          {Array.isArray(chips) && (
            <ul className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {chips.map((chip) => (
                <li key={chip} className="px-3 py-1 rounded-full text-xs font-medium text-cream/75 bg-cream/5 ring-1 ring-cream/10">
                  {chip}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-ember-500/30 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-cream/15 shadow-2xl shadow-black/50">
            {heroPhoto ? (
              <img src={heroPhoto} alt={t('music.hero.photo_alt')} className="h-full w-full object-cover" />
            ) : (
              // Placeholder until a live photo is added in src/data/musicVideos.js
              <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_at_top,_#57412f_0%,_#1a130f_55%,_#110c09_100%)]">
                <svg className="w-16 h-16 text-ember-300/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                <p className="text-xs uppercase tracking-[0.25em] text-cream/50">{t('music.hero.photo_placeholder')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section className="bg-stage-900">
      <Heading eyebrow={t('music.projects.eyebrow')} title={t('music.projects.title')} />
      <div className="grid md:grid-cols-2 gap-6">
        {musicProjects.map((p) => (
          <article key={p.id} className="flex flex-col p-8 rounded-3xl bg-stage-800/70 ring-1 ring-cream/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-400 mb-3">{t(`music.projects.${p.id}.label`)}</p>
            <h3 className="font-display text-3xl text-cream mb-3">{p.name}</h3>
            <p className="text-cream/70 leading-relaxed mb-6 flex-grow">{t(`music.projects.${p.id}.text`)}</p>
            <a
              href={instagramUrl(p.handle)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit text-ember-300 font-semibold hover:text-ember-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={INSTAGRAM_ICON} />
              </svg>
              @{p.handle}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
};

const Formats = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Heading eyebrow={t('music.formats.eyebrow')} title={t('music.formats.title')} text={t('music.formats.text')} />

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {LINEUPS.map((key) => (
          <div key={key} className="p-6 rounded-2xl bg-cream/[0.04] ring-1 ring-cream/10">
            <h3 className="font-display text-2xl text-cream mb-2">{t(`music.formats.lineups.${key}.title`)}</h3>
            <p className="text-sm text-cream/65 leading-relaxed">{t(`music.formats.lineups.${key}.text`)}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {SETS.map((key) => (
          <div key={key} className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-ember-500/15 to-transparent ring-1 ring-ember-400/20">
            <h3 className="font-display text-2xl text-ember-200 mb-2">{t(`music.formats.sets.${key}.title`)}</h3>
            <p className="text-cream/70 leading-relaxed">{t(`music.formats.sets.${key}.text`)}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 flex items-center gap-2 text-sm text-cream/60">
        <svg className="w-4 h-4 text-ember-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {t('music.formats.duration')}
      </p>
    </Section>
  );
};

const Repertoire = () => {
  const { t } = useTranslation();
  const genres = t('music.repertoire.genres', { returnObjects: true });
  const songs = t('music.repertoire.songs', { returnObjects: true });
  return (
    <Section className="bg-stage-900">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <Heading eyebrow={t('music.repertoire.eyebrow')} title={t('music.repertoire.title')} text={t('music.repertoire.text')} />
          {Array.isArray(genres) && (
            <ul className="flex flex-wrap gap-3">
              {genres.map((g) => (
                <li key={g} className="px-4 py-2 rounded-full bg-ember-500/10 text-ember-200 ring-1 ring-ember-400/30 font-medium">
                  {g}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-8 rounded-3xl bg-stage-800/70 ring-1 ring-cream/10 self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50 mb-5">{t('music.repertoire.songs_title')}</p>
          {Array.isArray(songs) && (
            <ul className="space-y-4">
              {songs.map((s) => (
                <li key={s.title} className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-4 last:border-0 last:pb-0">
                  <span className="font-display text-xl text-cream">{s.title}</span>
                  <span className="text-sm text-cream/50 text-right">{s.artist}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-5 text-sm text-cream/50">{t('music.repertoire.more')}</p>
          <ScrollLink
            to="booking"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full ring-1 ring-ember-400/50 text-ember-300 font-semibold hover:bg-ember-400/10 transition-colors"
          >
            {t('music.repertoire.request')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </Section>
  );
};

const Original = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 bg-gradient-to-br from-stage-700 via-stage-800 to-stage-950 ring-1 ring-ember-400/20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember-500/20 blur-3xl" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-ember-400 mb-4">{t('music.original.eyebrow')}</p>
        <h2 className="relative font-display text-3xl md:text-5xl text-cream leading-tight mb-4">{t('music.original.title')}</h2>
        <p className="relative max-w-2xl text-cream/70 leading-relaxed mb-8">{t('music.original.text')}</p>
        <ol className="relative grid sm:grid-cols-2 gap-x-10 border-t border-cream/10 mb-8">
          {originalSongs.map((song, i) => (
            <li key={song} className="flex items-baseline gap-5 py-4 border-b border-cream/10">
              <span className="text-sm tabular-nums text-ember-400/70">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-display italic text-2xl md:text-3xl text-cream">{song}</span>
            </li>
          ))}
        </ol>
        <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/5 ring-1 ring-cream/15 text-sm text-cream/80">
          <span className="h-2 w-2 rounded-full bg-ember-400 animate-pulse" aria-hidden="true" />
          {t('music.original.status')}
        </span>
      </div>
    </Section>
  );
};

const Booking = () => {
  const { t } = useTranslation();
  return (
    <Section id="booking" className="relative overflow-hidden bg-stage-900 scroll-mt-16 md:scroll-mt-20">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-80 w-[40rem] max-w-full rounded-full bg-ember-500/15 blur-3xl" />
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-400 mb-4">{t('music.booking.eyebrow')}</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-5">{t('music.booking.title')}</h2>
          <p className="text-cream/70 leading-relaxed">{t('music.booking.text')}</p>
        </div>
        <BookingForm />
      </div>
    </Section>
  );
};

// ---------- Page ----------

const Music = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-stage-950 text-cream overflow-x-hidden">
      {/* Display font only for this page. Title/description/OG come from seo.music via PageSEO. */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&display=swap"
        />
      </Helmet>

      <Hero />

      <Section id="videos" className="scroll-mt-16 md:scroll-mt-20">
        <Heading eyebrow={t('music.videos.eyebrow')} title={t('music.videos.title')} text={t('music.videos.text')} />
        <InstagramVideos />
      </Section>

      <Projects />
      <Formats />
      <Repertoire />
      <Original />
      <Booking />
      <MusicFooter />
    </div>
  );
};

export default Music;
