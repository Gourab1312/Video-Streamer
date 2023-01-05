// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigs = {
  apiKey: "AIzaSyDIuhyVqSGsrqq_XNfcNXwq9a_nWRJnOx4",
  authDomain: "video-streamer-fb9c6.firebaseapp.com",
  projectId: "video-streamer-fb9c6",
  storageBucket: "video-streamer-fb9c6.appspot.com",
  messagingSenderId: "479846534481",
  appId: "1:479846534481:web:5c151acf88fc1f59a79770",
  measurementId: "G-X22C1RHCJB"
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIuhyVqSGsrqq_XNfcNXwq9a_nWRJnOx4",
  authDomain: "video-streamer-fb9c6.firebaseapp.com",
  projectId: "video-streamer-fb9c6",
  storageBucket: "video-streamer-fb9c6.appspot.com",
  messagingSenderId: "479846534481",
  appId: "1:479846534481:web:cb499def13028426a79770",
  measurementId: "G-KN62J1WRE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);