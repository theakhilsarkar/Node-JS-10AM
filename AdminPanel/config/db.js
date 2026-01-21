import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/admin_panel")
        console.log("mongodb connected successfully!")
    } catch (err) {
        console.log("mongodb connection failed", err);
    }
}

// PASS=zvbqcrspbbbwaot
