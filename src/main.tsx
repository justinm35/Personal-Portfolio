// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvIlwV9F4S1YQrVH5JRwTroLH6QgrASok",
  authDomain: "justinmdevproject.firebaseapp.com",
  projectId: "justinmdevproject",
  storageBucket: "justinmdevproject.appspot.com",
  messagingSenderId: "582614724472",
  appId: "1:582614724472:web:606015ff755727f8e8a28d",
  measurementId: "G-BPX14K7BWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);



import React from "react"
import { createRoot } from 'react-dom/client';
import { App } from "./App"
import './index.css'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
  </React.StrictMode>
)
