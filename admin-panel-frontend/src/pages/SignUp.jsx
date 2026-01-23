import React, { useState } from 'react'
import axios from 'axios'
import { auth_api } from '../utils/globals.js'

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const user = { email, password };
            console.log(user)
            const res = await axios.post(`${auth_api}/signup`, user);
            if (res.data.status) {
                alert(res.data.message);
                // success logic
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            console.log(err)
            alert(err.message);
        }
    }

    return (
        <div style={{ height: "100vh" }} className='container d-flex justify-content-center align-items-center'>
            <div className='col-4 bg-light shadow p-4 rounded'>
                <h2 className='mb-4 text-center'>Sign Up</h2>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleFormControlInput2" placeholder="Password" />
                </div>
                <div className='mb-5 d-flex justify-content-end'>
                    <a href="">Already have an account? SignIn</a>
                </div>
                <div className='mb-3  d-flex justify-content-center'>
                    <button onClick={handleSignup} className='btn btn-primary w-100'>Sign Up</button>
                </div>
            </div>

        </div>
    )
}
