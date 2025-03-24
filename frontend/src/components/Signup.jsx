import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../utils'

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(name,value)
        const copySignupInfo = {...signupInfo}
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo)
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        const {name,email,password} = signupInfo;
        if(!name || !email || !password){
            return handleError("Name, Email & Password are Required")
        }
        try{
            const url = `https://syncthreads-assignment-app-api.vercel.app/auth/signup`
            const response = await fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signupInfo)
            })
            const result = await response.json()
            const {success,message,error} = result
            if(success){
                handleSuccess(message)
                setTimeout(()=>{
                    navigate('/login')
                },1000)
            }else if(error){
                const details = error?.details[0].message;
                handleError(details)
            }else if(!success){
                handleError(message)
            }
            console.log(result)
        }catch(error){
            handleError(error)
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="name"
                            autoFocus
                            placeholder="Enter Your Name"
                            value={signupInfo.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            onChange={handleChange} 
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={signupInfo.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            value={signupInfo.password}
                        />
                    </div>
                <button type='submit' className="btn btn-primary w-100">Sign Up</button>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>

                <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Signup
