import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "shatter-45ee0.firebaseapp.com",
  projectId: "shatter-45ee0",
  storageBucket: "shatter-45ee0.appspot.com",
  messagingSenderId: "1049275548430",
  appId: "1:1049275548430:web:f81fafbaf7ef3cb8b68d5f",
  measurementId: "G-HFDXFMZE2H",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
