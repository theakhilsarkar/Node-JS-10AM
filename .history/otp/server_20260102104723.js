import express from 'express'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

const app = express();
dotenv.config();
app.use(express.json());

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
});

const mailSender = ()=>{
    transporter.sendMail({
        from:`Google <${process.env.EMAIL}>`
    });
}

// from
// to
// body 