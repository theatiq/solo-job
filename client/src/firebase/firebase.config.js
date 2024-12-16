// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig)

//  new
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  // new
  // apiKey: "AIzaSyBaUvj67ns6xOpDqn74HhXRn6EnMCWa-5Q",
  // authDomain: "nuha-faham.firebaseapp.com",
  // projectId: "nuha-faham",
  // storageBucket: "nuha-faham.firebasestorage.app",
  // messagingSenderId: "136828724080",
  // appId: "1:136828724080:web:0433a53c5fb12270f2a5b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
