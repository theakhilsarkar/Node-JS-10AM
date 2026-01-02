import express from 'express'
import dotenv from 'dotenv'
import moduleName from 'nodemailer'

const app = express();
dotenv.config();
app.use(express.json());

// 