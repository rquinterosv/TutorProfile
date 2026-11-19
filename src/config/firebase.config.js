import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Public web config (safe to ship; access is enforced by firestore.rules).
const firebaseConfig = {
  apiKey: 'AIzaSyDbxTOjaOEwTgy-X3dmJZVeByg6_K1sK5w',
  authDomain: 'rafa-tutoring.firebaseapp.com',
  projectId: 'rafa-tutoring',
  storageBucket: 'rafa-tutoring.appspot.com',
  messagingSenderId: '319908968639',
  appId: '1:319908968639:web:449bc8d0a41a38c4adae0a',
  measurementId: 'G-CB9SFFMEB1',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Firestore is only needed when the contact form is submitted, so it's loaded on demand
// to keep it out of the main bundle.
export const loadFirestore = async () => {
  const firestore = await import('firebase/firestore');
  return { ...firestore, db: firestore.getFirestore(app) };
};
