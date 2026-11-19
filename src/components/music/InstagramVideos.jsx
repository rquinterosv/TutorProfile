import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useInView from '../../hooks/useInView';
import { BEHOLD_FEED_ID, INSTAGRAM_POST_COUNT, musicProjects, instagramUrl } from '../../data/musicVideos';
import { INSTAGRAM_ICON } from '../../data/social';

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
    .slice(0, INSTAGRAM_POST_COUNT);
};

const GRID = 'grid grid-cols-1 sm:grid-cols-3 gap-4';

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
    <ul className={GRID}>
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

// Shown when there's no feed ID yet or the feed can't be loaded.
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

const Skeleton = () => (
  <ul className={GRID} aria-hidden="true">
    {Array.from({ length: INSTAGRAM_POST_COUNT }, (_, i) => (
      <li key={i} className="aspect-[4/5] rounded-2xl bg-cream/5 animate-pulse" />
    ))}
  </ul>
);

const InstagramVideos = () => {
  // The feed isn't requested until the section is near the viewport.
  const [ref, inView] = useInView({ rootMargin: '300px' });
  // 'loading' | 'feed' | 'empty'
  const [status, setStatus] = useState(BEHOLD_FEED_ID ? 'loading' : 'empty');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!BEHOLD_FEED_ID || !inView) return;
    const controller = new AbortController();
    fetch(`https://feeds.behold.so/${encodeURIComponent(BEHOLD_FEED_ID)}`, { signal: controller.signal })
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
        console.warn('[music] Instagram feed unavailable:', err.message);
        setStatus('empty');
      });
    return () => controller.abort();
  }, [inView]);

  let content = <Skeleton />;
  if (inView && status === 'feed') content = <FeedGrid posts={posts} />;
  if (inView && status === 'empty') content = <FollowPlaceholder />;

  return (
    <div ref={ref} aria-busy={inView && status === 'loading'}>
      {content}
    </div>
  );
};

export default InstagramVideos;
