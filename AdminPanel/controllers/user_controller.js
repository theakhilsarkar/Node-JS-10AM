import { UserCollection } from '../models/user_model.js'

// (IT,Sales,HR,MDs)
// Ramesh, IT, 2026, 
// 18113IT26

// employee management system - hrms
// HR - signup
// login - emp

// placement profile (email,phone) - resume,profile,education,project

// optional filed / user added field - education, phone,profile_pic, address,exp

// 16 - P --> admin

// 


export const addUserByAdmin = (req, res) => {
    const {
        email, name, emp_id, role, joining_date, salary, department
    } = req.body;
    try {

    }
    catch (err) {

    }
}

export const updateProfileByUser = (req, res) => {
    const { education, phone, profile_pic, address, exp } = req.body;
}

export const updateProfileByAdmin = (req, res) => {
    const {
        email, name, emp_id, role, joining_date, salary, department, education, phone, profile_pic, address, exp
    } = req.body;
}

// get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserCollection.find();
        res.json({ status: true, message: "User Fetched Successfully !", users });
    }
    catch (err) {
        res.json({ status: false, message: "Cant get users !", users: [] });
    }
}