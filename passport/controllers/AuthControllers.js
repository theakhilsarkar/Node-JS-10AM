import { Users } from '../models/AuthModel.js'
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
    // name,email,password
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await Users.create({ name, email, password: hashedPassword });
        res.json({ message: "User registered !", result });
    } catch (err) {
        res.json({ message: "User not registered !", err });
    }
}
export const signin = (req, res) => {
    res.json({ message: "signin success!", user: req.user });
}
export const signout = (req, res) => { }
export const home = (req, res) => {
    res.json({ message: "Home Page Accessed !" });
}