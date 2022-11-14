import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtuMbOHVLxh606Gy08CVZD4EaAz3Wv1S0",
  authDomain: "bootcamp-charu.firebaseapp.com",
  projectId: "bootcamp-charu",
  storageBucket: "bootcamp-charu.appspot.com",
  messagingSenderId: "872802402730",
  appId: "1:872802402730:web:ea493610c0ddfd9b26abd3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
