import { AuthCollection } from '../models/auth_model.js'
import bcrypt from 'bcrypt'
import { otpSender } from '../services/otp_services.js';
import { OtpCollection } from '../models/otp_models.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

export const signup = async (req, res) => {
    const { email, name, password, role } = req.body;
    try {
        const hashed = await bcrypt.hash(password, 12);
        await AuthCollection.create({ email, name, role, password: hashed });
        res.status(201).json({ status: true, message: "User registered successfully !" });
    } catch (err) {
        res.json({ status: false, message: "Cant registered user !" });
    }
}
export const signin = async (req, res) => {
    // email,password
    const { email, password } = req.body;
    // 1. check user is available or not
    const user = await AuthCollection.find({ email });
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
    // if (isOtpSent.status) {
    //     res.json(isOtpSent);
    //     // 6. res success
    // } else {
    //     res.json(isOtpSent);
    // }
    res.json(isOtpSent); //{status:,message:}
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
    const token = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: "1d",
    });
    res.cookie("auth_token", token, {
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "strict",
        httpOnly: true
    })
    res.json({ status: true, message: "OTP is verified & Signin successfully !" });
}