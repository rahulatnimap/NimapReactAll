
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
// import Regsiteration from './Components/Regsiteration';
// import Dashboard from './Components/Display/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from 'react';
// import Login from './Components/Login';
// const login = React.lazy(()=> import('./Components/Login'))
const Dash = React.lazy(() => import('./Components/Display/Dashboard'))
const Register = React.lazy(() => import('./Components/Regsiteration'))



const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Suspense fallback="Loading..."><Register /></Suspense>
  },
  {
    path: '/dashboard',
    element: <React.Suspense fallback="Loading..."><Dash /></React.Suspense>
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}


export default App;

