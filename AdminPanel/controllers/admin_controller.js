import { UserCollection } from '../models/user_model.js'

export const updateProfileByAdmin = async (req, res) => {
    const { email, name, role, emp_id, joining_date, department, salary, profile_pic, phone, education, exp, address } = req.body;
    try {
        const user = await UserCollection.findOne({ email });
        if (!user) {
            return res.json({ status: false, message: "user not found !" });
        }
        await UserCollection.updateOne({ email }, {
            $set: {
                name, role, emp_id, joining_date, department, salary, profile_pic, phone, education, exp, address
            }
        });
        res.json({ status: true, message: "profile updated successfully !!" });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}


export const updateProfileByUser = async (req, res) => {
    const { email, name, joining_date, profile_pic, phone, education, exp, address } = req.body;
    try {
        const user = await UserCollection.findOne({ email });
        if (!user) {
            return res.json({ status: false, message: "user not found !" });
        }
        await UserCollection.updateOne({ email }, {
            $set: {
                name, joining_date, profile_pic, phone, education, exp, address
            }
        });
        res.json({ status: true, message: "profile updated successfully !!" });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}


// name,role,salary

// name,role,salary = all
// name,role(updated),salary


// const a = { "email": "akhilsodvadiya7@gmail.com", "name": "Akhil S", "role": "manager", "emp_id": "akh21181920", "joining_date": "21/01/2026", "department": "IT", "salary": "560000", "profile_pic": "..", "phone": "+91 9825486060", "education": "MBA", "exp": "3 years", "address": "a-107 surat" }


// signin
// signup
// otp verification page for signin
// change password page
// forget password page
// otp verification page for forget password
// home
// profile page

