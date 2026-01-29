import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { admin_api, auth_api } from '../utils/globals';

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
                setCurrentUser(res.data.user.user) // {status,message,user:{email,user:{}}}
                return;
            }
            else {
                return alert(res.data.message)
            }

        } catch (err) {
            return alert(res.data.message)
        }
    }

    const handleProfileUpdate = async () => {
        try {
            const res = await axios.put(`${admin_api}/update-profile-by-admin`, currentUser);
            alert(res.data.message)
        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <div className='container vh-100'>
            <h2 className='my-3 text-center'>Profile Page</h2>
            <div className='h-25 w-100 bg-info d-flex justify-content-center align-items-center'>
                <div style={{ height: "200px", width: "200px" }} className='rounded-circle bg-light'>

                </div>
            </div>
            <div className='mt-3'>
                <div className="row m-3">
                    <div className="col">
                        <label htmlFor="email">Email</label>
                        <input disabled={true} value={currentUser.email ?? "Email not assigned"} id='email' type="text" className="form-control" placeholder="Email" aria-label="Email" />
                    </div>
                    <div className="col">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={currentUser.name ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })} className="form-control" id='name' placeholder="Your full name" aria-label="Your full name" />
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <label htmlFor="emp_id">Employee Id</label>
                        <input id='emp_id' value={currentUser.emp_id ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, emp_id: e.target.value })} type="text" className="form-control" placeholder="Employee Id" aria-label="Employee Id" />
                    </div>
                    <div className="col">
                        <label htmlFor="role">Role</label>
                        <input type="text" value={currentUser.role ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })} className="form-control" id='role' placeholder="Role" aria-label="Role" />
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <label htmlFor="joining_date">Joining Date</label>
                        <input id='joining_date' value={currentUser.joining_date ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, joining_date: e.target.value })} type="text" className="form-control" placeholder="Joining Date" aria-label="Joining Date" />
                    </div>
                    <div className="col">
                        <label htmlFor="salary">Salary</label>
                        <input type="number" value={currentUser.salary ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, salary: e.target.value })} className="form-control" id='salary' placeholder="Salary" aria-label="Salary" />
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <label htmlFor="education">Education</label>
                        <input id='education' value={currentUser.education ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, education: e.target.value })} type="text" className="form-control" placeholder="Education" aria-label="Education" />
                    </div>
                    <div className="col">
                        <label htmlFor="exp">Experiance</label>
                        <input type="text" value={currentUser.exp ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, exp: e.target.value })} className="form-control" id='exp' placeholder="Experiance" aria-label="Experiance" />
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <label htmlFor="department">Department</label>
                        <input id='department' value={currentUser.department ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, department: e.target.value })} type="text" className="form-control" placeholder="Department" aria-label="Department" />
                    </div>
                    <div className="col">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" value={currentUser.phone ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })} className="form-control" id='phone' placeholder="Phone" aria-label="Phone" />
                    </div>
                    <div className="col">
                        <label htmlFor="address">Address</label>
                        <input type="text" value={currentUser.address ?? ""} onChange={(e) => setCurrentUser({ ...currentUser, address: e.target.value })} className="form-control" id='address' placeholder="Address" aria-label="Address" />
                    </div>

                </div>

                <div className='d-flex justify-content-center'>
                    <button onClick={handleProfileUpdate} className='btn btn-info w-50 m-3 text-light'>Update Profile</button>
                </div>

            </div>
        </div>
    )
}


// ?? - null replacement operator - if left side is null then right side value will be assign