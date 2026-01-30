import express from 'express'
import { updateProfileByAdmin, updateProfileByUser } from '../controllers/admin_controller.js';
import { getAllUsers, deleteUser } from '../controllers/user_controller.js'
const admin_routes = express.Router();

admin_routes.get("/get-all-users", getAllUsers);

admin_routes.put("/update-profile-by-admin", updateProfileByAdmin);
admin_routes.put("/update-profile-by-user", updateProfileByUser);

admin_routes.delete("/delete-user", deleteUser);


export default admin_routes;

