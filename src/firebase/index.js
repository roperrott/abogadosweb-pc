import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAdUWoDH7Ejx3RfLXwjJxwlbtanrkPgWjo',
  authDomain: 'abogados-web-beta.firebaseapp.com',
  projectId: 'abogados-web-beta',
  storageBucket: 'abogados-web-beta.appspot.com',
  messagingSenderId: '820339784945',
  appId: '1:820339784945:web:78a3246bb499f0f7297d50',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
