import express from 'express'
import auth_routes from './routes/auth_routes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js'
import admin_routes from './routes/admin_routers.js'
import cors from 'cors'
import selection_routes from './routes/selection_routes.js'

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", auth_routes);
app.use("/api/admin", admin_routes);
app.use("/api/selection", selection_routes);

app.listen(4000, () => console.log("server started >>"));

// 
// next monday.
// 3 - 3month

// resume - 

// DSA

// 10turtles
// Logical JS Array - DSA
// 11 ek mock test - 

// rohit,rajendra,deep,

// frontend - tanvi, snehal, 

// mail conversation

// to: jisako hame mail bhejana hai - rw8.akhil@gmail.com
// cc: just for remind,infor,,aware - asodvadiya246@rku.ac.in
// subject : mail purpose
// body: content
// dear sir
// chat gpt - 
// best regard, 
// add signature

// mail id
// IPDC, DSA - 

// DSA / ipdc - mail, 1 exam, 1 

// PNR temp,perm
// 3 month - self practice mock interview -> 

// offer letter/mail confirmation = 
// internship letter, 15 month - experiance letter

// bond - 1 years

// 

// wap to check array is palindrom or not?
// wap to check how many prime number available in array.
// wap to find indexes of value in array which sum is equal to taregt value.
// wap to find second max element from array.