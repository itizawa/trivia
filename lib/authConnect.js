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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export default firebase;
