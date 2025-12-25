import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/auth");
        console.log("mongodb connected successfully !!");
    } catch (e) {
        console.log("mongodb connection failed ", e);
    }
}