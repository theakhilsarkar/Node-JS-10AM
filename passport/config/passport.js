import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import { Users } from '../models/AuthModel.js'

// localstartegy - signin(check avaibility,check password,signin success)
const localStategy = new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
        try {
            const user = await Users.findOne({ email });
            if (!user) {
                return done(null, false, { message: "user not found !" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: "password is incorrect !" });
            }
            return done(null, user, { message: "signin successfull !" });
        } catch (err) {
            return done(err, false);
        }
    }
);

passport.use(localStategy); // register local strategy

// 1. serialize - save user id session
passport.serializeUser((user, done) => {
    done(null, user._id);
})
// 2. deserialize - based on session id, user find -> user set
passport.deserializeUser(async (id, done) => {
    const user = await Users.findById(id);
    done(null, user);
})