// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "emreblog-test.firebaseapp.com",
  projectId: "emreblog-test",
  storageBucket: "emreblog-test.appspot.com",
  messagingSenderId: "580711361370",
  appId: "1:580711361370:web:5918faeb8ce2153dcfa163"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);