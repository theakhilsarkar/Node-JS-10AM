import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
}, { timestamps: true });

// 
export const AuthCollection = mongoose.model("auth", authSchema);