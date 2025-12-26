import express from 'express'
import { checkAlreadyLogin, checkAuthRequest } from '../middlewares/auth_middelware.js'
import { signUp, signIn, getUsers, homepage, signinPage, signupPage } from '../controller/auth_controller.js'

const router = express.Router();

router.post("/api/signup", checkAuthRequest, signUp);
router.post("/api/signin", signIn);
// router.get("/", checkAlreadyLogin, getUsers);
router.get("/", checkAlreadyLogin, homepage);
router.get("/signin", signinPage);
router.get("/signup", signupPage);


export default router;


