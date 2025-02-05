import React, { useEffect } from 'react'

const AdminDashboard = ({data}) => {

    const userData = data.filter((ele) => ele.role !== 'admin');
    console.log(userData , "admin datas");
   
    
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