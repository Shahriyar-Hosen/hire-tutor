// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR4JR1pZyjPn0ssXZXWx1eK8YKB7xKJHc",
  authDomain: "hire-tutor-f0b91.firebaseapp.com",
  projectId: "hire-tutor-f0b91",
  storageBucket: "hire-tutor-f0b91.appspot.com",
  messagingSenderId: "1062943325710",
  appId: "1:1062943325710:web:8c925805df615dc01a465f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
