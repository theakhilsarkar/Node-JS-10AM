import mongoose from 'mongoose';
import { Department, Role } from '../models/selection_model.js'

export const addDepartment = async (req, res) => {
    const { name } = req.body;
    try {
        const department = await Department.create({ name });
        return res.json({ status: true, message: "Department added successfully !", department: name })
    } catch (err) {
        return res.json({ status: false, message: err.message })
    }
}

export const addRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        return res.json({ status: true, message: "Role added successfully !", role });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}

export const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        return res.json({ status: true, message: "department fetched successfully", departments });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}

// INTERNET, offline
// API - 

// 12
// 3
// 10
// 9
//-----------30

// 
// 
// 11:00 am

// Rate limiting
// otp resend - 1 min timer,
// 3 hours 5 resend 12 3p

// password - wrong 5 time
// count : 1

// email,password,count:5
// 