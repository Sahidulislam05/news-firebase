import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_authDomain,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh5TJ-6JZUuY2t6WNZfh6yZlcAquEuLd4",
  authDomain: "dragon-news-app-ead16.firebaseapp.com",
  projectId: "dragon-news-app-ead16",
  storageBucket: "dragon-news-app-ead16.firebasestorage.app",
  messagingSenderId: "1009259245109",
  appId: "1:1009259245109:web:719440e8bfce8e63200b7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
