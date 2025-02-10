import React, { useRef } from 'react'
import   { Toaster } from 'react-hot-toast'
import {   useNavigate } from 'react-router'
import {generateToken, SECRET_KEY} from '../../jwt-setup/jwt-token-setup.js'

export let token;
export let  userId;

const Login = ({ data , singledata}) => {

    const route = useNavigate();
    const userData = [...data];
    
    // console.log(userData, 'userData');

    const userRef = useRef('');
    const passRef = useRef('');
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/;
    const regexpass = /^[a-zA-Z0-9@*]+$/
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(SECRET_KEY);
        

        async function getuserData() {
            try {
                const user = await userData.find((ele) => (ele.email === userRef.current.value && ele.password === passRef.current.value));
                if (user) {
                    if (user.role === 'Admin') {
                    //    console.log(token);
                     token = await generateToken(user.name);
                    //  console.log(token , "token");
                    localStorage.setItem('token' , token)
                    route('/adminDash')
                        
                    } else {
                        token = await generateToken(user.name);
                     console.log(token , "token");
                    localStorage.setItem('token' , token)
                    localStorage.setItem('userId' , user.id)
                        userId = user.id
                        route('/userDash')
                    }
                } else {
                    alert("User not found");

                }

            } catch (error) {
                console.log(error);
            }

        }

        getuserData();

    }


    return (
        <div>
            <Toaster />


            <form action="" onSubmit={handleSubmit}>

                <label htmlFor=""> UserId
                    <input ref={userRef} type="text" placeholder='Enter userId' />
                </label>
                <label htmlFor=""> Password
                    <input ref={passRef} type="text" placeholder='Enter password' />
                </label>
                <input type="submit" />
            </form>

        </div>
    )
}

export default Login