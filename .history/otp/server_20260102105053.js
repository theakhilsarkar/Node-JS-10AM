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

const mailSender = async()=>{
    await transporter.sendMail({
        from:`Google <${process.env.EMAIL}>`,
        to:"8462ankitmahajan@gmail.com",
        subject:"Your Account is Blocked !",
        text:"You have to pay 200000 in 1 day otherwise you will be kidnaped !"
    });
}


app.post("/mail",async(req,res)=>{
   try{
     await mailSender();
   }catch(err){
    res.json({message:"mail not sent !",err})
   }
})