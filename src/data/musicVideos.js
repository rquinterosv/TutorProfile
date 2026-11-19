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
export const BEHOLD_FEED_ID = 'VNRkLFnrNHGUqfLFwiOe';

// How many of the latest posts to show.
export const INSTAGRAM_POST_COUNT = 3;

// Hero photo (4:5). Taken from the Instagram post https://www.instagram.com/p/Dfxe52glBMJ/
// and stored locally so the hero never depends on the feed being up.
// Set to null to show the styled placeholder instead.
import livePhoto from '../assets/img/music/live.jpg';
export const heroPhoto = livePhoto;

// Music projects (handles are proper nouns; descriptions are in music.projects.<id>).
export const musicProjects = [
  { id: 'solo', name: 'Rafael Quinteros', handle: 'rafaquinteros.music' },
  { id: 'nomads', name: 'Nomads Collective', handle: 'nomadscollective_' },
];

// Original songs (titles are proper names, not translated). Add new titles to the end.
export const originalSongs = [
  'Empezando el viaje',
  'Lo que siento en verdad',
  'Manteniendo a Chile en alto',
  'Pensando en ti',
];

export const instagramUrl =(handle) => `https://www.instagram.com/${handle}/`;
