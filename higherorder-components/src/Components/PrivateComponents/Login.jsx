import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./PrivateComponent.scss"
import {  useNavigate } from 'react-router-dom';
import reactImg from  "../../assets/react.svg"
import { CustomToken } from '../../utils/contains';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ENDPOINT } from '../../services/axiosReq';
import { publicGet } from '../../services/axiosPublicReq';
import toast from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate();
  const { register , handleSubmit  ,formState } = useForm();
  const { errors  } = formState
  
  
  const handleFormSubmit = async( data ) => {
     try {
            const res = await  publicGet(ENDPOINT?.USER ,`?email=${data.UserID}?password=${data.Password}`)
            if (res?.status == 200){
               toast.success("Loged in successfully!")
               localStorage.setItem('token' , CustomToken)
               navigate('/');
            } else {
toast.error("Login Failed")
            }
     } catch (error) {
      console.log('error', error)
     }
  }

  return (
    <div className="login-container">
      <div> 
         <img src={reactImg} alt="" />
      </div>
  <form onSubmit={handleSubmit(handleFormSubmit)}>
    <h1 className='FormHeading'>Login Page</h1>
    <TextField label="UserID" variant="outlined" { ...register("UserID" , { required :{
      value : true
      , message : "User Name is Required"} ,
      pattern : {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid Email"
      }
      })}
      error={!!errors?.UserID}
      helperText={errors.UserID?.message} /> 
    <TextField label="Password" type="password" variant="outlined" { ...register("Password" , {
      required : {
        value : true ,
        message : "Password is Requierd"
      } 
    }) }
    error={!!errors?.UserID} 
    helperText={errors?.Password?.message}/>
    <Button type='submit' variant="contained">Login</Button>
    <Button onClick={()=> (window.location.assign('/Signup'))} variant="outlined">SignUp</Button>
  </form>
</div>
  )
}

export default Login