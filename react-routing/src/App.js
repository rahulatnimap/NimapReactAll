import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Login from "./Components/Login"
// import Aboutus from "./Components/Aboutus"
import Products from "./Pages/Products"
import ProductDetails from './Pages/ProductDetails';
import Nomatch from './Components/Nomatch';
import NestedPage from './Pages/NestedPage';
import Nav from "./Components/Navbar/Nav";
const LazyAboutus = React.lazy(() => import('./Components/Aboutus'))


function App() {

  const Data = {
    login : "login",
    login : "login"

  }

  return (
     <>
     <Nav/>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/aboutus/:year/:month?' element={
        <React.Suspense fallback = "Loading..."><LazyAboutus/></React.Suspense>
        } />
      {/* <Route path='/' element={<Login/>} /> */}
      <Route path='/products/ProductDetails/:id' element={<ProductDetails  sortBy = "new"/>}>
      <Route path=" nestedproduct" element={<NestedPage/>}/>
      </Route>

      <Route path='/products' element={<Products/>}/>
      <Route path='/*' element={<Nomatch />}/>



     </Routes>
     
     </>
  );
}

export default App;
