import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJFjRbPsYETJRKkqWmrkqkbVx5hAQPKAQ",
  authDomain: "hhack-41083.firebaseapp.com",
  projectId: "hhack-41083",
  storageBucket: "hhack-41083.appspot.com",
  messagingSenderId: "590747244201",
  appId: "1:590747244201:web:dbe61522f9c19325347bb8"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
