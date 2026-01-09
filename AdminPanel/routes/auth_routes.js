import express from 'express'
import { signin, signout, signup, verifyOTP } from '../controllers/auth_controller.js'
import { validateSigninFields, validateOtpFields, validateSignupFields } from '../middlewares/auth_middleware.js'

const auth_routes = express.Router();

auth_routes.post("/signin", validateSigninFields, signin);
auth_routes.post("/signup", validateSignupFields, signup);
auth_routes.post("/verify-otp", validateOtpFields, verifyOTP);
auth_routes.get("/signout", signout);

export default auth_routes;