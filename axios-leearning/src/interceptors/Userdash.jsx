import React, { useEffect } from 'react'
import { axiosInstance } from './axiosinstance'
import { useNavigate } from 'react-router';

const Userdash = ({ data }) => {
  const route = useNavigate()
  const token = localStorage.getItem('Token');
  localStorage.setItem('id', data)

  useEffect(() => {
    alert("Please Register First")
    if (!token) route('/')
    else {
      async function fetchSingeruser() {
        const response = await axiosInstance.get(`/users/${localStorage.getItem('id')}`);
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
