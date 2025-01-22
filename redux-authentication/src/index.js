import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { store } from './state/store';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import styles for Toastify



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 
    <Provider store = {store}>
      <App />
      <ToastContainer />


      </Provider>
 
);


