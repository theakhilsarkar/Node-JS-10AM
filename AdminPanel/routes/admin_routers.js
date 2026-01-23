import express from 'express'
import { checkAdmin } from '../middlewares/admin_middleware.js';
import { updateProfileByAdmin, updateProfileByUser } from '../controllers/admin_controller.js';

const admin_routes = express.Router();

admin_routes.put("/update-profile-by-admin", updateProfileByAdmin);
admin_routes.put("/update-profile-by-user", updateProfileByUser);

export default admin_routes;

