import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { admin_api, auth_api } from '../utils/globals';
import { useNavigate } from 'react-router'

export default function AddEmploye() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [filterText, setFilterText] = useState("")
    const [users, setUsers] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        getAllUsers();
    }, [pageCount])

    const handleAddEmployee = async () => {
        try {
            const res = await axios.post(`${auth_api}/signup`, { email, password });
            if (res.data.status) {
                alert("Employe Created successfully !");
                getAllUsers();
            }
        } catch (err) {
            alert(err.message);
        }
    }

    const getAllUsers = async () => {
        try {
            const res = await axios.get(`${admin_api}/get-all-users?page=${pageCount}&limit=5`);
            console.log(res.data.users)
            if (res.data.status) {
                setUsers(res.data.users);
            }
        } catch (err) {
            alert(err.message);
        }
    }

    const getUsersByRole = async () => {
        try {
            const res = await axios.get(`${admin_api}/get-user-by-role?role=${filterText}`);
            if (res.data.status) {
                setUsers(res.data.users);
            }
        } catch (err) {
            alert(err.message);
        }
    }

    const deleteEmployee = async (id) => {
        try {
            const res = await axios.delete(`${admin_api}/delete-user?id=${id}`);
            if (res.data.status) {
                alert(res.data.message)
                getAllUsers();
            }
        } catch (err) {
            alert(err.message);
        }
    }

    console.log(pageCount);
    return (
        <div>
            <div className='container'>
                <div className='my-3'>
                    <h2 className='text-center'>Employee Section</h2>
                </div>
                <div className='d-flex justify-content-center shadow p-3 rounded'>
                    <div className='w-100'>
                        <h4 className='my-3'>Add Employee</h4>
                        <div className='d-flex gap-3 align-items-end'>
                            <div className="mb-3 w-25">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3 w-25">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className='mb-3 w-25'>
                                <button onClick={handleAddEmployee} className='w-100 btn btn-primary'>Add Employee</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center shadow p-3 rounded'>
                    <div className='w-100'>
                        <div className='d-flex justify-content-between'>
                            <span className='my-4 fs-2 fw-medium'>All Employes</span>
                            <div>
                                <input value={filterText} onChange={(e) => setFilterText(e.target.value)} className='mx-2' type="text" placeholder='enter role' />
                                <button onClick={getUsersByRole} className='mx-2 btn btn-primary'>Search</button>
                                <button onClick={() => {
                                    setPageCount((state) => state + 1); // 

                                }} className='mx-2 btn btn-primary'>++</button>
                            </div>
                        </div>
                        <div>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Emp ID.</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => <tr key={user._id}>
                                            <th scope="row">{user.emp_id ?? "Not Assign"}</th>
                                            <td>{user.email}</td>
                                            <td>{user.name ?? "Not Assign"}</td>
                                            <td>{user.role ?? "Not Assign"}</td>
                                            {
                                                user.role == 'Admin' ? <td></td> : <td>
                                                    <button onClick={() => navigate("/edit-emp", { state: user._id })} className='btn btn-primary me-2'>Edit</button>
                                                    <button onClick={() => deleteEmployee(user._id)} className='btn btn-danger'>Delete</button>
                                                </td>
                                            }
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
