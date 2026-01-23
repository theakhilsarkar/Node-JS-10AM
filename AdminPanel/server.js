import express from 'express'
import auth_routes from './routes/auth_routes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js'
import admin_routes from './routes/admin_routers.js'
import cors from 'cors'

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use("/api/auth", auth_routes);
app.use("/api/admin", admin_routes);

app.listen(4000, () => console.log("server started >>"));
