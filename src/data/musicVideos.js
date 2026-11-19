// ─────────────────────────────────────────────────────────────────────────────
// /music content that isn't translatable text.
//
// INSTAGRAM — the "Recent shows" section shows the latest 3 posts automatically
// through a free Behold.so feed (https://behold.so):
//   1. Sign in to Behold and connect the Instagram account.
//   2. Create a feed of type "JSON" and copy its Feed ID.
//   3. Paste it below, commit and push.
// The feed ID is public (the browser requests it directly), so it's fine in code.
// While it's empty the page shows "follow on Instagram" buttons instead.
// ─────────────────────────────────────────────────────────────────────────────
export const BEHOLD_FEED_ID = ''; // TODO(rafa): paste the Behold Feed ID here

// How many of the latest posts to show.
export const INSTAGRAM_POST_COUNT = 3;

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
