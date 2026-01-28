import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { auth_api } from '../utils/globals';

export default function Profile() {

    useEffect(() => {
        getCurrentUser()
    }, []);

    const [currentUser, setCurrentUser] = useState({})

    const getCurrentUser = async () => {
        try {
            const res = await axios.get(`${auth_api}/get-current-user`, { withCredentials: true });
            console.log(res.data);
            if (res.data.status) {
                setCurrentUser(res.data.user)
                return;
            }
            else {
                return alert(res.data.message)
            }

        } catch (err) {
            return alert(res.data.message)
        }
    }

    const handleProfileUpdate = () => {

    }
    return (
        <div className='container vh-100'>
            <h2 className='my-3 text-center'>Profile Page</h2>
            <div className='h-25 w-100 bg-info d-flex justify-content-center align-items-center'>
                <div style={{ height: "200px", width: "200px" }} className='rounded-circle bg-light'>

                </div>
            </div>
            <div className='mt-3'>
                <div class="row m-3">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-info w-50 m-3 text-light'>Update Profile</button>
                </div>

            </div>
        </div>
    )
}
