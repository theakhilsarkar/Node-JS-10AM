import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { auth_api } from '../utils/globals'


export default function VerifyOtp() {

    const { state } = useLocation("/signin");

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(0);
    const [fourth, setFourth] = useState(0);
    const [fifth, setFifth] = useState(0);
    const [sixth, setSixth] = useState(0);

    const verifyOtp = async () => {
        console.log(first, second, third, fourth, fifth, sixth)
        // if (!(first && second && third && fourth && fifth && sixth)) {
        //     return alert("enter six digit otp !")
        // }
        const otp = Number(`${first}${second}${third}${fourth}${fifth}${sixth}`)
        try {
            const res = await axios.post(`${auth_api}/verify-otp`, { email: state, otp });
            alert(res.data.message);
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <div className='col-4 shadow p-3 rounded'>
                <h3 className='mb-4'>Verify OTP</h3>
                <div className='d-flex gap-3'>
                    <div className="mb-3">
                        <input value={first} onChange={(e) => setFirst(e.target.value)} type="email" className="form-control" placeholder="*" />
                    </div>
                    <div className="mb-3">
                        <input value={second} onChange={(e) => setSecond(e.target.value)} type="email" className="form-control" placeholder="*" />
                    </div>
                    <div className="mb-3">
                        <input value={third} onChange={(e) => setThird(e.target.value)} type="email" className="form-control" placeholder="*" />
                    </div>
                    <div className="mb-3">
                        <input value={fourth} onChange={(e) => setFourth(e.target.value)} type="email" className="form-control" placeholder="*" />
                    </div>
                    <div className="mb-3">
                        <input value={fifth} onChange={(e) => setFifth(e.target.value)} type="email" className="form-control" placeholder="*" />
                    </div>
                    <div className="mb-3">
                        <input value={sixth} onChange={(e) => setSixth(e.target.value)} type="email" className="form-control" placeholder="*" />
                    </div>
                </div>
                <div>
                    <p className='text-end'>Your OTP will be expired in 120 seconds</p>
                </div>
                <div>
                    <button onClick={verifyOtp} className='w-100 btn btn-primary'>Verify & Signin</button>
                </div>
            </div>
        </div>
    )
}
