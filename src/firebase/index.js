import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAK9aBnt83bc0pEuRVni0WJZ3bYjFwIu_A',
  authDomain: 'abogado-laboral-web.firebaseapp.com',
  projectId: 'abogado-laboral-web',
  storageBucket: 'abogado-laboral-web.appspot.com',
  messagingSenderId: '254605430166',
  appId: '1:254605430166:web:625a1adf511da6036521b7',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
