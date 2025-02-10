import React, { useEffect } from 'react'
import { axiosInstance } from './axiosinstance'
import { useNavigate } from 'react-router';
import { userId } from '../components/Authentication/Login';

const Userdash = ({ data }) => {
  const route = useNavigate()
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId')
  // localStorage.setItem('id', data)

  useEffect(() => {
    if (!token) {
      alert("Please Register First")
      route('/')
    }
    else {
      async function fetchSingeruser() {
        const response = await axiosInstance.get(`/users/${userId}`);
        console.log(response.data);
      }
      fetchSingeruser()
    }


  }, [])

  return (
    <div>Userdash</div>
  )
}

export default Userdash
