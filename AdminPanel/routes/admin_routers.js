import express from 'express'
import { checkAdmin } from '../middlewares/admin_middleware.js';
import { updateProfileByAdmin, updateProfileByUser } from '../controllers/admin_controller.js';

const admin_routes = express.Router();

// get,post,put,delete

// update profile by admin
admin_routes.put("/update-profile-by-admin", updateProfileByAdmin);
admin_routes.put("/update-profile-by-user", updateProfileByUser);

// admin_routes.get("/",checkAdmin,)

export default admin_routes;

// redux toolkit
// 



