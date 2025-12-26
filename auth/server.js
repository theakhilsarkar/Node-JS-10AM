import express from 'express'
import auth_routes from './routes/auth_routes.js';
import { connectDB } from './config/db.js'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express();
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const indexPath = path.join(__dirname, "static", "index.html");
export const signinPath = path.join(__dirname, "static", "signin.html");
export const signupPath = path.join(__dirname, "static", "signup.html");

connectDB();
app.use("/", auth_routes);


app.listen(4000, () => {
    console.log("server started !!");
})













