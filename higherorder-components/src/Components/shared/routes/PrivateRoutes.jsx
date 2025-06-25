import React from 'react'
import { getToken } from '../../../utils/contains'
import { Navigate } from 'react-router-dom'


const PrivateRoutes = ({ component : Components }) => {
  return (
      getToken() ? <Components /> : <Navigate to={'/Login'}/>
  )
}

export default PrivateRoutes