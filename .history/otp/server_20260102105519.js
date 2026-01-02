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
        from:`Namaste!! <${process.env.EMAIL}>`,
        to:"8462ankitmahajan@gmail.com",
        subject:"Hello, How are you !",
        text:"You are very good person !!"
    });
}


app.post("/mail",async(req,res)=>{
   try{
     await mailSender();
     res.json({message:"mail sent !"});
   }catch(err){
    res.json({message:"mail not sent !",err});
   }
})

app.listen(process.env.PORT,()=>console.log("server started !"));