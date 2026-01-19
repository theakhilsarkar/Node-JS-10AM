import express from 'express'
import { checkAdmin } from '../middlewares/admin_middleware.js';

const admin_routes = express.Router();


admin_routes.get("/",checkAdmin,)