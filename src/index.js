import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
      <React.StrictMode>
    <ToastContainer
    position="top-center" 
    autoClose={1000}/>
    <App />
  </React.StrictMode>,
);

