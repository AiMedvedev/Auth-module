import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

export const firebaseConfig = {
  apiKey: "AIzaSyCBIcDPknkGxmwf4UZ44iv9J2SwsJc9Q68",
  authDomain: "auth-module-e9a14.firebaseapp.com",
  projectId: "auth-module-e9a14",
  storageBucket: "auth-module-e9a14.appspot.com",
  messagingSenderId: "614329792925",
  appId: "1:614329792925:web:247a105f7af8d60b305774"
}

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();


