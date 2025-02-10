import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router'
import ErrorBoundries from './components/ErrorHandling/ErrorBoundries';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundries fallback = {<h1>Something Went Wrong!!!</h1>}>
        <App/>
      </ErrorBoundries>
    </BrowserRouter>
  </React.StrictMode>
);