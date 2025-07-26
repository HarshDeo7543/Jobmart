// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "online-job-portal-47687.firebaseapp.com",
  projectId: "online-job-portal-47687",
  storageBucket: "online-job-portal-47687.firebasestorage.app",
  messagingSenderId: "439579922974",
  appId: "1:439579922974:web:b2587bdc3d3c12ac20940f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// AIzaSyBl664FfPYYLz8hDRz9gzmbQJOpAg6seGU