import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://akhilsodvadiya08_db_user:gYnlMyFNIN1bM9RZ@firstcluster.fzoe4nr.mongodb.net/otp");
        console.log("mongodb connected !")
    } catch (err) {
        console.log(err);
    }
}


// blog
// 1. login
// 2. crud + multer

// multi role
// Admin Panel
// CRUD, filteration

// Admin Panel - Admin School, company,
// require("")

// populate

// atlas username - akhilsodvadiya08_db_user
// atlas password - gYnlMyFNIN1bM9RZ

// url - mongodb+srv://akhilsodvadiya08_db_user:gYnlMyFNIN1bM9RZ@firstcluster.fzoe4nr.mongodb.net/

// r1 - 200 -


// mongodb - 512mb

