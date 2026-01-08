import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema({
    otp: Number,
    email: String,
    expiryAt: Date
}, { timestamps: true })

export const OtpCollection = mongoose.model("otp", otpSchema); 