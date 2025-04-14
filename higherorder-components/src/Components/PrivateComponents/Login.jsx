import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./PrivateComponent.scss"
import { Navigate, useNavigate } from 'react-router-dom';
import reactImg from  "../../assets/react.svg"
import { CustomToken } from '../../utils/contains';

const Login = () => {
  const navigate = useNavigate();


  const handleFormSubmit = (e) => {
    e.preventDefault()
    window.localStorage.setItem('token' , CustomToken)
    navigate("/")
  }

  return (
    <div className="login-container">
      <div> 
         <img src={reactImg} alt="" />
      </div>
  <form onSubmit={handleFormSubmit}>
    <h1 className='FormHeading'>Login Page</h1>
    <TextField label="Username/Email" variant="outlined" />
    <TextField label="Password" type="password" variant="outlined" />
    <Button type='submit' variant="contained">Login</Button>
    <Button onClick={()=> (window.location.assign('/Signup'))} variant="contained">SignUp</Button>
  </form>
</div>
  )
}

export default Login