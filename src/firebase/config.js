
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAheipEjr-IUv0aTyNZtGfMItCwoIy5tjw",
  authDomain: "miniblog-93853.firebaseapp.com",
  projectId: "miniblog-93853",
  storageBucket: "miniblog-93853.appspot.com",
  messagingSenderId: "365181214443",
  appId: "1:365181214443:web:f9b03679b9bf2cecaae8ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 

 
export { db, app };