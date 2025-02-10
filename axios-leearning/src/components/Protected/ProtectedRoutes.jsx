import React, { useEffect, useState } from 'react'
import { verifyToken } from '../../jwt-setup/jwt-token-setup'
import { Navigate } from 'react-router';

const ProtectedRoutes = ({ children }) => {

    let token = localStorage.getItem('token');
    const [valid, SetValid] = useState(null);

    useEffect(() => {
        async function checkToken() {
            const user = await verifyToken(token);
            SetValid(!!user)
        }
        checkToken();
    }, [token])


    if(valid === null) return <p>wait for authentication...</p> 
   return valid ? <>{children}</> : <Navigate to='/'/>
}

export default ProtectedRoutes      