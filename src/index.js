import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './Login';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Routes>
      <Route path="/" element={<App />} />
       <Route path="/login" element={<Login />} />
     </Routes>
    </Router>
  </React.StrictMode>
);

