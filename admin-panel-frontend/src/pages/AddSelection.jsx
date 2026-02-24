import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { selection_api } from '../utils/globals'

export default function AddSelection() {

    useEffect(() => {
        getDepartments();
    }, [])

    const [departmentName, setDepartmentName] = useState("");
    const [allDepartments, setAllDepartments] = useState([])

    const [roleName, setRoleName] = useState("");
    const [departmentId, setDepartmentId] = useState("");


    const handleAddDepartment = async () => {
        try {
            const res = await axios.post(`${selection_api}/add-department`, { name: departmentName });
            alert(res.data.message);
            getDepartments();
        } catch (err) {
            alert(err.message);
        }
    }

    const getDepartments = async () => {
        try {
            const res = await axios.get(`${selection_api}/get-departments`);
            console.log(res.data)
            setAllDepartments(res.data.departments);
        } catch (err) {
            alert(err.message)
        }
    }

    const handleAddRole = async () => {
        try {
            const res = await axios.post(`${selection_api}/add-role`, { name: roleName, department: departmentId });
            alert(res.data.message);
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className='container'>
            <div className=''>
                <h1>Add Department</h1>
                <div className='col-4 mt-4'>
                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Enter Department</label>
                        <input value={departmentName} onChange={(e) => setDepartmentName(e.target.value
                        )} type="text" className="form-control" id="department" placeholder="eg. IT, Sales, HR etc." />
                    </div>
                    <button onClick={handleAddDepartment} className='btn btn-primary'>Add Department</button>
                </div>
            </div>
            <hr />
            <div className=''>
                <h2>Add Role </h2>
                <span>as per department</span>
                <div className='col-4 mt-4'>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Enter Role</label>
                        <input value={roleName} onChange={(e) => setRoleName(e.target.value
                        )} type="text" className="form-control" id="role" placeholder="eg. Devloper, Sales Executive etc." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Enter Department</label>
                        <div>
                            <select name="department" id="" value={departmentId} onChange={(e) => {
                                setDepartmentId(e.target.value)
                                console.log(departmentId)
                            }}>
                                {
                                    allDepartments.map((e) => <option key={e._id} className='text-dark' value={e._id}>{e.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <button onClick={handleAddRole} className='btn btn-primary'>Add Role</button>
                </div>
            </div>
        </div>
    )
}
