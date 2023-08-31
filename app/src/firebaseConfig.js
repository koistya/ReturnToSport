import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX05qbZxX_J3_gmWqXvpeqy2uYz96x4Ac",
  authDomain: "returntoski.firebaseapp.com",
  projectId: "returntoski",
  storageBucket: "returntoski.appspot.com",
  messagingSenderId: "1026838190551",
  appId: "1:1026838190551:web:a3a8b44e429165414d1392",
  measurementId: "G-HT4SEG2X4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;