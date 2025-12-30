import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/auth");
        console.log("mongodb connected successfully!");
    } catch (err) {
        console.log("mongo db not connected !");
    }
}