import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../utils'

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(name,value)
        const copyLoginInfo = {...loginInfo}
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const {email,password} = loginInfo;
        if(!email || !password){
            return handleError("Email & Password are Required")
        }
        try{
            const url = `https://syncthreads-assignment-app-api.vercel.app/auth/login`
            const response = await fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            })
            const result = await response.json()
            console.log("API Response:", result);
            const {success,message,error, jwtToken, name} = result
            if(success){
                handleSuccess(message)
                localStorage.setItem('token',jwtToken)
                localStorage.setItem('loggedInUser',name)
                setTimeout(()=>{
                    navigate('/home')
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
                <h2 className="text-center mb-4">LogIn</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            onChange={handleChange} 
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={loginInfo.email}
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
                            value={loginInfo.password}
                        />
                    </div>

                <button type='submit' className="btn btn-primary w-100">Log In</button>

                <p className="text-center mt-3">
                    Don't have an account? <Link to="/signup">SignUp</Link>
                </p>

                <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Login
