import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCvjdreW12WEgAkE1FhfCDjPY5r0d6UEMg",
  authDomain: "react-49890-2bf98.firebaseapp.com",
  projectId: "react-49890-2bf98",
  storageBucket: "react-49890-2bf98.appspot.com",
  messagingSenderId: "237614561500",
  appId: "1:237614561500:web:dc4d8368d268c073319c19"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);