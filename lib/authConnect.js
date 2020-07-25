import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: process.env.GOOGLE_AUTH_DOMAIN,
  databaseURL: process.env.GOOGLE_DATABASE_URL,
  projectId: process.env.GOOGLE_PROJECT_ID,
  storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
  appId: process.env.GOOGLE_APP_ID,
};

// Check that `window` is in scope for the analytics module!
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  if ('measurementId' in firebaseConfig) firebase.analytics();
}

export default firebase;
