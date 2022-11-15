import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import firebase from 'firebase/compat/app';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtuMbOHVLxh606Gy08CVZD4EaAz3Wv1S0",
  authDomain: "bootcamp-charu.firebaseapp.com",
  projectId: "bootcamp-charu",
  storageBucket: "bootcamp-charu.appspot.com",
  messagingSenderId: "872802402730",
  appId: "1:872802402730:web:ea493610c0ddfd9b26abd3",
};

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const store = configureStore({reducer : rootReducer});

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
