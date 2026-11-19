import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { musicProjects, instagramUrl } from '../../data/musicVideos';
import { INSTAGRAM_ICON } from '../../data/social';
import ScrollLink from './ScrollLink';

// Footer used only on /music (the site-wide Footer is hidden there, see App.jsx).
const MusicFooter = () => {
  const { t, i18n } = useTranslation();
  const other = (i18n.resolvedLanguage || 'en') === 'es' ? 'en' : 'es';

  return (
    <footer className="relative border-t border-cream/10 bg-stage-950 text-cream">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-400/40 to-transparent" />
      <div className="container-width py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl text-cream">{t('music.hero.title')}</p>
            <p className="mt-2 text-sm text-cream/55">{t('music.footer.tagline')}</p>
            <ScrollLink
              to="booking"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-ember-500 text-stage-950 font-semibold hover:bg-ember-400 transition-colors"
            >
              {t('music.footer.book')}
            </ScrollLink>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-400 mb-4">{t('music.footer.follow')}</p>
            <ul className="flex flex-col items-center md:items-end gap-3">
              {musicProjects.map((p) => (
                <li key={p.id}>
                  <a
                    href={instagramUrl(p.handle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cream/75 hover:text-ember-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={INSTAGRAM_ICON} />
                    </svg>
                    @{p.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/45">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-cream transition-colors">
              {t('music.footer.back_home')}
            </Link>
            <button type="button" onClick={() => i18n.changeLanguage(other)} className="hover:text-cream transition-colors">
              {t(`languages.${other}`)}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MusicFooter;
