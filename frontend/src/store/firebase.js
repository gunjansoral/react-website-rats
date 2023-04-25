// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbE1ZYWdn6-7-if6u78iEg2QhguiawnGY",
  authDomain: "rats-store-a1b4f.firebaseapp.com",
  projectId: "rats-store-a1b4f",
  storageBucket: "rats-store-a1b4f.appspot.com",
  messagingSenderId: "229487277907",
  appId: "1:229487277907:web:66aab12d61fd9bd80393a6",
  measurementId: "G-FDQ1274K3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);