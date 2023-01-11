// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbA7BRndlbs6YlgqtWpRrjpS_jIrhmJmc",
  authDomain: "chatapp-f3140.firebaseapp.com",
  projectId: "chatapp-f3140",
  storageBucket: "chatapp-f3140.appspot.com",
  messagingSenderId: "956998699146",
  appId: "1:956998699146:web:bdb8faf856ed5288600573",
  measurementId: "G-5RLGXW1CH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
