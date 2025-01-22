import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UpdateEmail } from '../state/todoSlice'

const Regsiteration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    //  const emails = useSelector(state => state.emails)
    const dispatch = useDispatch()
    const route = useNavigate()

    function handleSubmit(e) {
        try {
         e.preventDefault();
         if(!email) throw "Email Required";
         if(!password) throw "Password Required";
         if(!confirm) throw "Confirm password Required";
         if(password !== confirm) throw "Confirm Password does not Match";
         if(!email.length && !password.length) throw "Email or Password Invalid"
        toast.success("Registeration Successful")
        dispatch(UpdateEmail({ email, password }))
        setTimeout(() => route("/"), 1100);
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column  align-items-center justify-content-center mt-5'>
                <form className=' mx-auto  border p-5 bg-secondary rounded text-white' action="" onSubmit={handleSubmit}>
                    <h1>Register Page</h1>

                    <div className='form-group'>
                        <label htmlFor="">Email :
                            <input className='form-control' type="Email" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Password : <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} /></label>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Confirm Password : <input className='form-control' type="password" onChange={(e) => setConfirm(e.target.value)} /></label>
                    </div>
                    <div className='d-flex gap-4 p-2'>
                        <button className='btn btn-success mt-2' type='submit'>Register</button>
                        <button className='btn btn-success mt-2' onClick={(e) => { e.preventDefault(); route("/") }}>Go-back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Regsiteration