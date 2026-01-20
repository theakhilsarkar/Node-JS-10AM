import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    email: String,
    password: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        // default:null
    }
    // __id : ""
}, { timestamps: true });

export const AuthCollection = mongoose.model("auth", authSchema);

// postman