// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmLh5JqQLsisms5okfT3VYjGyKFiCeQz4",
  authDomain: "nova-d317e.firebaseapp.com",
  projectId: "nova-d317e",
  storageBucket: "nova-d317e.appspot.com",
  messagingSenderId: "469785084473",
  appId: "1:469785084473:web:b0f845c4ffcf74f82543e8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
