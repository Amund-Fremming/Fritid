import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApvqhgOpTUrRR0Kh08GjfAyKoDnoqMuyg",
  authDomain: "drikkelek-db.firebaseapp.com",
  projectId: "drikkelek-db",
  storageBucket: "drikkelek-db.appspot.com",
  messagingSenderId: "144723892656",
  appId: "1:144723892656:web:93600dbe0c0f369b3b9e75",
  measurementId: "G-5NZ2493TF2"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);