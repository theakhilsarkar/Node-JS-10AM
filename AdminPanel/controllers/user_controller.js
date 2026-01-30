import { UserCollection } from '../models/user_model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
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

export const updateProfileByAdmin = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await UserCollection.updateOne({ email }, { $set: req.body });
        const token = jwt.sign({ ...user }, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        res.cookie("auth_token", token, {
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "strict",
            httpOnly: true
        })
        return res.json({ status: true, message: "profile updated successfully !" });
    }
    catch (err) {
        return res.json({ status: false, message: err.message });
    }
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

export const deleteUser = async (req, res) => {
    const id = req.query.id;
    try {
        await UserCollection.findByIdAndDelete(id);
        return res.json({ status: true, message: "Employee Deleted Successfully !" });
    } catch (err) {
        console.log(err.message);
        return res.json({ status: false, message: err.message })
    }
}