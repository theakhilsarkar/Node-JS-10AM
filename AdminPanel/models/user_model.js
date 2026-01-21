import mongoose from 'mongoose'


// admin - name,email,phone,role,
// manager - joining_date,salary,education,exp,manager_id,
// employee - emp_id,department, address, 

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    name: String,
    emp_id: String,
    phone: String,
    role: String,
    joining_date: String, // date
    salary: Number,
    education: String,
    exp: String,
    department: String,
    profile_pic: String,
    address: String,
}, { timestamps: true });

export const UserCollection = mongoose.model("users", userSchema);
// user info --> cookie

// linkedin - google,
// insta - username

// 30%
// signup

// signup - email,password - auth collection
// signin - verified , get users from user collection by email form auth

// profile page

// name==undefine - 
// role = role not assigned