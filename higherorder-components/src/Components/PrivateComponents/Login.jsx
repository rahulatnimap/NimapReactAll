import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./PrivateComponent.scss"
import { Navigate } from 'react-router-dom';
const Login = () => {
  return (
    
    <div className="login-container">
  <form>
    <TextField label="Username/Email" variant="outlined" />
    <TextField label="Password" type="password" variant="outlined" />
    <Button variant="contained">Login</Button>
    <Button onClick={()=> (window.location.assign('/Signup'))} variant="contained">SignUp</Button>
  </form>
</div>


  )
}

export default Login