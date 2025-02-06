import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const AdminDashboard = ({data}) => {
  const route = useNavigate()
  const token = localStorage.getItem('Token');
  
  
    const userData = data.filter((ele) => ele.role !== 'admin');
    console.log(userData , "admin datas");
   
    useEffect(()=> {
      if(!token) route('/')
      },[])
  return (
    <div>
      <h1>Admin DashBoard</h1>
       <ul>
        {userData.length ? <li>{userData.map((ele)=> ele.firstName)}</li> : <h1>Loading</h1>}
       </ul>
    </div>
  )
}

export default AdminDashboard