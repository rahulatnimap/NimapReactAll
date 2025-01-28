import logo from './logo.svg';
import './App.css';
import MountingHooks from './Components/MountingHooks';
import { Component } from 'react';
import Lifecyclemethods from './Components/Lifecyclemethods';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import ConvertClass from './Components/ConvertClass';

class App extends  Component{
  render() {
    return  (<>
    <Header UserName= "Type Name Here"/>
    <Routes>
<Route path='/methods' element={<Lifecyclemethods type="lifecycle"/>}/>
<Route path='/conversion' element={<ConvertClass UserName= "Sir/madam" />}/>
    </Routes>
    
    </>)
  }
  
}

export default App;
