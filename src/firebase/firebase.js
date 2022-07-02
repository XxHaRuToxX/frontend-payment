import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDPAFDl06hyJb5QJxsBwqmuyUajtam2qQY",

  authDomain: "react-payment-ddb51.firebaseapp.com",

  projectId: "react-payment-ddb51",

  storageBucket: "react-payment-ddb51.appspot.com",

  messagingSenderId: "969225133514",

  appId: "1:969225133514:web:27f44864fd0d3ec28c8333",

  measurementId: "G-K8NE7Q89TH"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;