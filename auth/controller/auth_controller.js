import { AuthModel } from '../models/auth_model.js'
import bcrypt from 'bcrypt'
import { indexPath, signinPath, signupPath } from '../server.js'

export const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new AuthModel({
            email: email,
            password: hashedPassword
        })
        const result = await user.save();
        res.json({ message: "user registered successfully !", result });
    } catch (e) {
        res.status(401).json({ message: "cant registered user !", err: e.message });
    }
}

export const signIn = async (req, res) => {
    // check user is registered or not
    const { email, password } = req.body;
    const user = await AuthModel.findOne({ email: email });
    if (!user) {
        res.status(400).json({ message: "user not registered !" })
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (isMatched) {
        res.cookie("auth", true, { httpOnly: true, maxAge: 1000 * 60 * 60 }); // 1hr
        res.json({ message: "user signin successfully !!" });
    } else {
        res.status(400).json({ message: "password is incorrect !" });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await AuthModel.find();
        res.json(users);
    } catch (err) {
        res.json({ message: "cant get user !", err });
    }
}

export const homepage = (req, res) => {
    res.sendFile(indexPath);
}

export const signinPage = (req, res) => {
    res.sendFile(signinPath);
}

export const signupPage = (req, res) => {
    res.sendFile(signupPath);
}


// cookie-parser
// middleware


// 