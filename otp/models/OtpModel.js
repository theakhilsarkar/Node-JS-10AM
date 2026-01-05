import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema({
    email: String,
    otp: Number,
    expiryAt: Date
}, { timestamps: true });

export const OTP = mongoose.model("otp", otpSchema);