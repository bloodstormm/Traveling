import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHnsj3InLxPU2fLJAMPwKJPQ1LkkjCFOY",
  authDomain: "traveling-4fc7c.firebaseapp.com",
  projectId: "traveling-4fc7c",
  storageBucket: "traveling-4fc7c.appspot.com",
  messagingSenderId: "122918593295",
  appId: "1:122918593295:web:357b17d3da9bd335aa147a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };