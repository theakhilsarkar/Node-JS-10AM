import express from 'express'
import passport from 'passport'
import { signin, signup, signout, home } from '../controllers/AuthControllers.js'
import { isAuthenticatedPage } from '../middlewares/AuthMiddlewares.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", passport.authenticate("local"), signin);
router.get("/home", isAuthenticatedPage, home);

export default router;