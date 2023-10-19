import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store'
// const root = ReactDOM.createRoot(document.getElementById('root'));


const setupAxios = () => {
  // axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.baseURL = "https://instagram-follower-backend.onrender.com/"; //->latest deployed

  axios.defaults.headers = {
    "Cache-Control": "no-cache,no-store",
    Pragma: "no-cache",
    Expires: "0",
  };
};

setupAxios();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>


    <App />


  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
