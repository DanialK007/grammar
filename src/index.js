import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from'react-router-dom';
import App3 from './App3.js';
import reportWebVitals from './reportWebVitals';
import './Output.css';
import ApiTest from './ApiTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ApiTest />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
