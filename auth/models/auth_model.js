import mongoose from 'mongoose'

const authSchema = mongoose.Schema({
    email: String,
    password: String
}, { Timestamp: true });

export const AuthModel = mongoose.model("auth", authSchema);