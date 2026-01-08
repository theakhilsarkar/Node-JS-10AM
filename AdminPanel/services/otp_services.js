import nodemailer from 'nodemailer'
import { OtpCollection } from '../models/otp_models.js'
import dotenv from 'dotenv'
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000)
}

export const otpSender = async (email) => {
    const otp = generateOTP()
    const expiryAt = new Date(Date.now() + Number(120000)); // 12000+
    try {
        await OtpCollection.create({ email, otp, expiryAt });
        await transporter.sendMail({
            from: `Admin Panel <${process.env.EMAIL}>`,
            to: email,
            subject: "Admin Panel Authentication",
            text: `Your otp to signin admin panel is ${otp}, valid upto 2 minutes`
        });
        return { status: true, message: "OTP Sent successfully !" };
    } catch (err) {
        return { status: false, message: "Cant send otp !" };
    }
}
