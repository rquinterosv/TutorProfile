// ─────────────────────────────────────────────────────────────────────────────
// /music content that isn't translatable text.
//
// VIDEOS — two sources, in this order:
//   1. Behold feed (automatic): set VITE_BEHOLD_FEED_ID in .env.local and in the
//      Vercel project's environment variables. The page fetches
//      https://feeds.behold.so/<id> and renders the latest posts/reels itself.
//   2. This curated list (fallback): used when there's no feed ID or the fetch
//      fails. Rendered with Instagram's official embed (embed.js loads only on /music).
//
// TODO(rafa): paste reel/post URLs below, newest first. Format:
//   'https://www.instagram.com/reel/ABC123xyz/'
//   'https://www.instagram.com/p/ABC123xyz/'
// While this list is empty (and there's no feed ID) the page shows a
// "follow on Instagram" placeholder instead of videos.
// ─────────────────────────────────────────────────────────────────────────────
export const musicVideos = [
  // 'https://www.instagram.com/reel/REPLACE_ME/',
];

// Only well-formed Instagram post/reel URLs are embedded.
export const INSTAGRAM_POST_RE = /^https:\/\/(www\.)?instagram\.com\/(reel|reels|p|tv)\/[A-Za-z0-9_-]+\/?$/;

// TODO(rafa): live photo for the hero. Drop it in src/assets/img/music/ and import it here, e.g.
//   import livePhoto from '../assets/img/music/live.jpg';
//   export const heroPhoto = livePhoto;
// While null, the hero shows a styled placeholder.
export const heroPhoto = null;

// Music projects (handles are proper nouns; descriptions are in music.projects.<id>).
export const musicProjects = [
  { id: 'solo', name: 'Rafael Quinteros', handle: 'rafaquinteros.music' },
  { id: 'nomads', name: 'Nomads Collective', handle: 'nomadscollective_' },
];

export const instagramUrl = (handle) => `https://www.instagram.com/${handle}/`;
