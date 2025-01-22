import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../state/todoSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);
  const emails = useSelector(state => state.emails)
  // const user = useSelector(state => state.user)
  // const tokens = useSelector(state => state.token)
  // const islogins = useSelector(state => state.islogin)
  // console.log(emails);

// console.log(user.email);

  const dispatch = useDispatch()
  const nav = useNavigate()
  const token = "123123"

  function handleSubmit(e) {
    e.preventDefault()
    const user = emails.find(user => user.email === email)
    if (user) {
      if(password !== user.password) {toast.error("Password Incorrect");}
     else  {toast.success("Login Successfull!!!");
      setIslogin(true)
      dispatch(setCredentials({ user: email, token, islogin: true }));
      nav()
      setTimeout(()=> nav("/dashboard") , 1100)}
    } else {
      toast.error("User not Registered ")
setTimeout(()=> nav("/register") , 1100)
    }

   

  }


  return (
    <>
      <div className='container'>
      <div className='d-flex flex-column  align-items-center justify-content-center mt-5 '>
        <form className=' mx-auto  border p-5 bg-secondary rounded text-white' action="" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
          <div className='form-group '>
          <label htmlFor="">Email :
            <input className='form-control' type="Email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          </div>
          <div className='form-group '>
          <label htmlFor="">Password : <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} /></label>

          </div>
        <div className='d-flex gap-4 p-2'>
        <button className='btn btn-success mt-2' type='submit'>Submit</button>
        <button className='btn btn-success mt-2' onClick={(e)=>{e.preventDefault();   nav("/register")}}>Register</button>
        </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login