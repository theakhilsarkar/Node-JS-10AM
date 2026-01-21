import { AuthCollection } from '../models/auth_model.js'
import bcrypt from 'bcrypt'
import { otpSender } from '../services/otp_services.js';
import { OtpCollection } from '../models/otp_models.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { UserCollection } from '../models/user_model.js';
dotenv.config();

export const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashed = await bcrypt.hash(password, 12);
        await AuthCollection.create({ email, password: hashed });
        await UserCollection.create({ email });
        res.status(201).json({ status: true, message: "User registered successfully !" });
    } catch (err) {
        res.json({ status: false, message: "Cant registered user !" });
    }
}

export const signin = async (req, res) => {
    // email,password
    const { email, password } = req.body;
    // 1. check user is available or not
    try {
        const user = await AuthCollection.findOne({ email });
        console.log(user);
        if (!user) {
            res.status(400).json({ status: false, message: "user not found, first signup !" })
        }
        // 2. match password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ status: false, message: "password is incorrect !" });
        }
        // 3. send otp
        const isOtpSent = await otpSender(email);
        res.json(isOtpSent); //{status:,message:}
    } catch (err) {
        res.status(400).json({ status: false, message: err.message });
    }
}

export const signout = (req, res) => {
    try {
        res.clearCookie("auth_token", {
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "strict",
            httpOnly: true
        })
        res.json({ status: true, message: "signout successfully !" })
    } catch (err) {
        res.json({ status: false, message: "signout failed !" });
    }
}

export const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    // avaibility of otp record
    try {
        const record = await OtpCollection.findOne({ email, otp });
        if (!record) {
            return res.json({ status: false, message: "OTP is incorrect !" });
        }
        // expiry
        if (record.expiryAt < new Date(Date.now())) {
            return res.json({ status: false, message: "OTP is expired !" });
        }

        // delete all otps after validate
        await OtpCollection.deleteMany({ email });

        // jwt
        // get user
        const user = await AuthCollection.findOne({ email });
        // x = {...user}
        const token = jwt.sign({ ...user }, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        res.cookie("auth_token", token, {
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "strict",
            httpOnly: true
        })
        res.json({ status: true, message: "OTP is verified & Signin successfully !" });
    } catch (err) {
        res.json({ status: false, message: err.message })
    }
}

// api
// change password - old password!=existing password, new password

export const changePassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
    try {
        const user = await AuthCollection.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found !" });
        }
        // oldpassword == database password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.json({ status: false, message: "your old password is incorrect !" });
        }
        // update password, new password -> bcrypt
        const hashed = await bcrypt.hash(newPassword, 12);
        await AuthCollection.updateOne({ email }, {
            $set: {
                password: hashed
            }
        }); //email -> password - hashed
        return res.json({ status: true, message: "password changed successfully !" })
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}


// forget password - email -> otp -> verify -> new password==confirm password(update)

export const forgetPassword = async (req, res) => {
    const { email } = req.body;
    const user = await AuthCollection.findOne({ email });
    if (!user) {
        return res.status(404).json({ status: false, message: "user not found !" });
    }
    const isOtpSent = await otpSender(email);
    res.json(isOtpSent);
}

export const verifyOtpForCreatePassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    try {
        const record = await OtpCollection.findOne({ email, otp });
        if (!record) {
            return res.json({ status: false, message: "OTP is incorrect !" })
        }
        if (record.expiryAt < new Date(Date.now())) {
            return res.json({ status: false, message: "otp is expired !" });
        }
        const hashed = await bcrypt.hash(newPassword, 12);
        await AuthCollection.updateOne({ email }, {
            $set: {
                password: hashed
            }
        })
        return res.json({ status: false, message: "password updated successfully !" });
    } catch (err) {
        return res.json({ status: false, message: "password not updated !" });
    }
}

// getCurrentUser - fetch token from cookies, decode token = current user
// email --> database
// cookie

