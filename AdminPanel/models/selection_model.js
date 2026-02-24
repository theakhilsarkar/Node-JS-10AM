import mongoose from 'mongoose'

// department -> role

const departmentSchema = new mongoose.Schema({
    name: String
});

export const Department = mongoose.model("Department", departmentSchema)

const roleSchema = new mongoose.Schema({
    name: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
})

export const Role = mongoose.model("Role", roleSchema);