import { OTP } from '../models/OtpModel.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
}

const transporter = nodemailer.createTransport(
    {
        service: "gmail", auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    }
);

export const sendOtp = async (req, res) => {
    const { email } = req.body;
    const otp = generateOtp();
    const expiryAt = new Date(Date.now() + (1000 * 60 * 2)) // 1000 * 60 * 2

    try {
        await transporter.sendMail({
            from: `OTP Verification !! <${process.env.EMAIL}>`,
            to: email,
            subject: "OTP Testing !",
            text: `Your otp for verification is ${otp}, valid upto 2 minutes`
        });
        await OTP.create({ email, otp, expiryAt });

        res.json({ message: "OTP Sent successfully !!" })
    } catch (err) {
        res.json({ message: "otp not sent !", err });
    }
}

// sent
// verify
// email,otp

// find database --> 
// expiry - 
// 

export const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    const record = await OTP.findOne({ email, otp })

    if (!record) {
        return res.json({ message: "OTP is not valid !!" })
    }

    // 10:23 < 10:27
    if (record.expiryAt < new Date()) {
        return res.json({ messasge: "otp expired !!" })
    }

    await OTP.deleteMany({ email });
    res.json({ message: "OTP Verified Successfully !" });
}

// node js - js run on system
// express - server side 
// mongodb - database - doc-col

// 512 MB

// get -> api
// compass - 

// 