import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router';
import Login from './components/Authentication/Login';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { axiosInstance } from './interceptors/axiosinstance';
import AdminDashboard from './components/AdminDisplay/AdminDashboard';
import Userdash from './interceptors/Userdash';

function App() {

  const [users , setUsers] = useState([]);
  const [singleUser , setSingleUser] = useState({});

  async function fecthData() {
      try {
        const resonse = await axiosInstance.get('/users');
      setUsers(resonse.data)  
      } catch (error) {
        console.log(error);  
      }   
  }
  // console.log(users , "user State");
  

  useEffect(()=>{
    localStorage.clear('id')
    fecthData();
  },[])

  return (
    <>
  <Routes>
    <Route path='/' element={<Login data = {users} singledata={setSingleUser}/>}/>
    <Route path='adminDashboard' element={<AdminDashboard data={users}/>}/>
    <Route path='userDashboard' element={<Userdash data = {singleUser}/>}/>

  </Routes>
    </>
  );
}

export default App;
