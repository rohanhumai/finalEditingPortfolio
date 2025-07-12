// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ import getAuth

const firebaseConfig = {
  apiKey: "AIzaSyCyLnZc33n8n0pSyQzaAQ5z9wPkOXuMZuA",
  authDomain: "login-example-c8019.firebaseapp.com",
  projectId: "login-example-c8019",
  storageBucket: "login-example-c8019.appspot.com",
  messagingSenderId: "124984451797",
  appId: "1:124984451797:web:6bcc597d9e1671e6cfb85c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the auth instance
 const auth = getAuth(app);

export {app, auth};
