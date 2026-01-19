import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    email: String,
    password: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
    // __id : ""
}, { timestamps: true });

// 
export const AuthCollection = mongoose.model("auth", authSchema);

// AuthCollection.find();

// collection 1 - email,password
// collection 2 - user details

// login - api request (1) -> email
// get user - api request(1) - user
// email --> findOne -> user

// collections
// populate -> get data from another collection based on reffrence id

// login -> email,password,user:{all user detail}

// auth

// connecting multiple collection
// nested finding/filtering -> aggregation pipline --> stage by stage -> output data

// pipline --> stage stage stage

// a,b,c,    d 

// populate
// saturday - 10am