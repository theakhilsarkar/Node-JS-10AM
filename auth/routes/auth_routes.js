import express from 'express'
import { checkAuthRequest } from '../middlewares/auth_middelware.js'
import { signUp, signIn } from '../controller/auth_controller.js'

const router = express.Router();

router.post("/signup", checkAuthRequest, signUp);
router.post("/signin", signIn);

export default router;


