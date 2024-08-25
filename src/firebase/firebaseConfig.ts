import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shatter-b0750.firebaseapp.com",
  projectId: "shatter-b0750",
  storageBucket: "shatter-b0750.appspot.com",
  messagingSenderId: "205630338997",
  appId: "1:205630338997:web:29106394c978505ae78bfc",
  measurementId: "G-MRSMMR1LK8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
console.log(auth.currentUser);
