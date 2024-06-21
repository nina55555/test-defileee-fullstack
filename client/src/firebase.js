import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBOfapFupSEP7x762nmufW-CXxSHMipZAA",   
  //apiKey: "process.env.MY-API-KEY",
  authDomain: "retrieve-firebase-runway-test.firebaseapp.com",
  projectId: "retrieve-firebase-runway-test",
  storageBucket: "retrieve-firebase-runway-test.appspot.com",
  messagingSenderId: "836054706510",
  appId: "1:836054706510:web:38ffe4ad36d65af3f2561f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;