import express from 'express'
import { addDepartment, addRole, getDepartments } from '../controllers/selection_controller.js'

const selection_routes = express.Router();

selection_routes.get("/get-departments", getDepartments)

selection_routes.post("/add-role", addRole)
selection_routes.post("/add-department", addDepartment)

export default selection_routes;
