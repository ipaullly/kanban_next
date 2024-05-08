import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSYPUGbp1uh2ke7fqlBmeH7bBWtJYUKUI",
  authDomain: "kanban-next-ac8c6.firebaseapp.com",
  projectId: "kanban-next-ac8c6",
  storageBucket: "kanban-next-ac8c6.appspot.com",
  messagingSenderId: "780047934061",
  appId: "1:780047934061:web:eca1f13f13819d347a5564",
  measurementId: "G-675WE0JTL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);