import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { auth_api } from '../utils/globals'
import OTPInput from 'otp-input-react'


export default function VerifyOtp() {
    const navigate = useNavigate();
    const { state } = useLocation("/signin");
    const [otp, setOtp] = useState("")

    const verifyOtp = async () => {
        try {
            const res = await axios.post(`${auth_api}/verify-otp`, { email: state, otp: Number(otp) }, { withCredentials: true });
            alert(res.data.message);
            if (res.data.status) {
                navigate("/home")
            }
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <div className='col-4 shadow p-3 rounded'>
                <h4 className='mb-4 text-center'>Verify OTP</h4>
                <div className='d-flex justify-content-center mb-3'>
                    <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} />
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
