import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useInView from '../../hooks/useInView';
import { musicVideos, INSTAGRAM_POST_RE, musicProjects, instagramUrl } from '../../data/musicVideos';
import { INSTAGRAM_ICON } from '../../data/social';

const FEED_ID = import.meta.env.VITE_BEHOLD_FEED_ID;
const MAX_POSTS = 8;
const curated = musicVideos.filter((url) => INSTAGRAM_POST_RE.test(url));

// ---------- Behold feed ----------

// Behold returns either { posts: [...] } (current JSON feeds) or a bare array (legacy).
const normalizePosts = (data) => {
  const posts = Array.isArray(data) ? data : data?.posts;
  if (!Array.isArray(posts)) return [];
  return posts
    .map((p) => ({
      id: p.id,
      permalink: p.permalink,
      isVideo: p.mediaType === 'VIDEO' || p.isReel === true,
      image:
        p.sizes?.medium?.mediaUrl ||
        p.sizes?.small?.mediaUrl ||
        p.thumbnailUrl ||
        (p.mediaType !== 'VIDEO' ? p.mediaUrl : null),
      caption: p.prunedCaption || p.caption || '',
    }))
    .filter((p) => p.id && p.permalink && p.image)
    .slice(0, MAX_POSTS);
};

const PlayIcon = () => (
  <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
    <span className="w-14 h-14 rounded-full bg-stage-950/60 backdrop-blur ring-1 ring-cream/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <svg className="w-6 h-6 text-cream translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  </span>
);

const FeedGrid = ({ posts }) => {
  const { t } = useTranslation();
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-stage-800 ring-1 ring-cream/10 hover:ring-ember-400/60 transition-all duration-300"
            aria-label={post.isVideo ? t('music.videos.watch_on_instagram') : t('music.videos.view_on_instagram')}
          >
            <img
              src={post.image}
              alt={post.caption ? post.caption.slice(0, 120) : ''}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stage-950/90 via-stage-950/10 to-transparent" />
            {post.isVideo && <PlayIcon />}
            {post.caption && (
              <p className="absolute bottom-0 inset-x-0 p-3 text-xs text-cream/85 leading-snug line-clamp-2">{post.caption}</p>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

// ---------- Official embed fallback ----------

let embedScriptPromise;
const loadInstagramEmbed = () => {
  if (window.instgrm) return Promise.resolve(window.instgrm);
  if (!embedScriptPromise) {
    embedScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => resolve(window.instgrm);
      script.onerror = (e) => {
        embedScriptPromise = undefined;
        reject(e);
      };
      document.body.appendChild(script);
    });
  }
  return embedScriptPromise;
};

const EmbedGrid = ({ urls }) => {
  const { t } = useTranslation();
  const linkText = t('music.videos.view_on_instagram');

  useEffect(() => {
    let cancelled = false;
    loadInstagramEmbed()
      .then((instgrm) => {
        if (!cancelled) instgrm?.Embeds?.process();
      })
      .catch(() => {
        // Embed script blocked (ad-blocker/offline): the plain links stay visible.
      });
    return () => {
      cancelled = true;
    };
  }, [urls, linkText]);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {urls.map((url) => (
        // embed.js replaces the blockquote with an iframe, so React must not own
        // that node: render it as raw HTML (URLs are validated by INSTAGRAM_POST_RE).
        <li
          key={url}
          className="overflow-hidden rounded-2xl bg-cream/5 ring-1 ring-cream/10 min-h-[12rem]"
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="margin:0;min-width:0;width:100%;max-width:100%;background:transparent;border:0;"><a href="${url}" target="_blank" rel="noopener noreferrer" style="display:block;padding:2rem;text-align:center;color:#f3c08a;font-weight:600;">${linkText.replace(/</g, '&lt;')}</a></blockquote>`,
          }}
        />
      ))}
    </ul>
  );
};

// ---------- Empty state ----------

const FollowPlaceholder = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-3xl border border-dashed border-cream/20 bg-cream/[0.03] p-10 text-center">
      <p className="font-display text-2xl text-cream mb-2">{t('music.videos.placeholder_title')}</p>
      <p className="text-cream/60 mb-6">{t('music.videos.placeholder_text')}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {musicProjects.map((p) => (
          <a
            key={p.id}
            href={instagramUrl(p.handle)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full ring-1 ring-ember-400/50 text-ember-300 hover:bg-ember-400/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d={INSTAGRAM_ICON} />
            </svg>
            @{p.handle}
          </a>
        ))}
      </div>
    </div>
  );
};

// ---------- Main ----------

const Skeleton = () => (
  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" aria-hidden="true">
    {Array.from({ length: 4 }, (_, i) => (
      <li key={i} className="aspect-[4/5] rounded-2xl bg-cream/5 animate-pulse" />
    ))}
  </ul>
);

const InstagramVideos = () => {
  // Nothing (feed request, embed.js) loads until the section is near the viewport.
  const [ref, inView] = useInView({ rootMargin: '300px' });
  // 'loading' | 'feed' | 'fallback'
  const [status, setStatus] = useState(FEED_ID ? 'loading' : 'fallback');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!FEED_ID || !inView) return;
    const controller = new AbortController();
    fetch(`https://feeds.behold.so/${encodeURIComponent(FEED_ID)}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Behold feed responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const normalized = normalizePosts(data);
        if (normalized.length === 0) throw new Error('Behold feed is empty');
        setPosts(normalized);
        setStatus('feed');
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.warn('[music] Falling back to curated videos:', err.message);
        setStatus('fallback');
      });
    return () => controller.abort();
  }, [inView]);

  let content = <Skeleton />;
  if (inView && status === 'feed') content = <FeedGrid posts={posts} />;
  if (inView && status === 'fallback') content = curated.length ? <EmbedGrid urls={curated} /> : <FollowPlaceholder />;

  return (
    <div ref={ref} aria-busy={inView && status === 'loading'}>
      {content}
    </div>
  );
};

export default InstagramVideos;
