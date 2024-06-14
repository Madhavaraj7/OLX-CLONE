import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCc84qJWK5YeFt4Zv0kdHnF3odsqe3obYc",
  authDomain: "olx-clone-fde9b.firebaseapp.com",
  projectId: "olx-clone-fde9b",
  storageBucket: "olx-clone-fde9b.appspot.com",
  messagingSenderId: "847353481991",
  appId: "1:847353481991:web:77c12d583268ca9bd613a2",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
