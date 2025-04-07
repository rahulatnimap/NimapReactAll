import React from 'react'
import { getToken } from '../../../utils/contains'
import { Navigate } from 'react-router-dom'

const PublicRoute = ( { component : Component } ) => {
   return ( !getToken() ? <Component/> : <Navigate to={"/"}/>)
} 

export default PublicRoute