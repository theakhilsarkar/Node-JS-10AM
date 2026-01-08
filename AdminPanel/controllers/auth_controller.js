import { AuthCollection } from '../models/auth_model.js'
import bcrypt from 'bcrypt'
import { otpSender } from '../services/otp_services.js';

export const signup = async (req, res) => {
    const { email, name, password, role } = req.body;
    try {
        const hashed = await bcrypt.hash(password, 12);
        await AuthCollection.create({ email, name, role, password: hashed });
        res.status(201).json({ status: true, message: "User registered successfully !" });
    } catch (err) {
        res.json({ status: false, message: "Cant registered user !" });
    }
}
export const signin = async (req, res) => {
    // email,password
    const { email, password } = req.body;
    // 1. check user is available or not
    const user = await AuthCollection.find({ email });
    if (!user) {
        res.status(400).json({ status: false, message: "user not found, first signup !" })
    }
    // 2. match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400).json({ status: false, message: "password is incorrect !" });
    }
    // 3. send otp
    const isOtpSent = await otpSender(email);
    if (isOtpSent.status) {
        // 5. jwt token and store it into cookies
        // 6. res success
    } else {
        res.json(isOtpSent);
    }
    // 4. verify otp

}
export const signout = (req, res) => { }