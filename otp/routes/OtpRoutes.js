import express from 'express'
import { sendOtp, verifyOtp } from '../controllers/OtpController.js'

const routes = express.Router();

routes.post("/api/otp/send", sendOtp);
routes.post("/api/otp/verify", verifyOtp);

export default routes;