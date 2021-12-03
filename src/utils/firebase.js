// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxf2aFv9qP7t2G38rzVwiiQJc8G6HDXxQ",
  authDomain: "job-status-fedca.firebaseapp.com",
  projectId: "job-status-fedca",
  storageBucket: "job-status-fedca.appspot.com",
  messagingSenderId: "1036799057803",
  appId: "1:1036799057803:web:176154cacf68f7113c598e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
