import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import "./config/passport.js"
import router from './routes/AuthRoutes.js'
import { connectDB } from './config/db.js'
import MongoConnect from 'connect-mongo'
import passport from 'passport'

const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: "secret!@#$%^&*()",
    resave: false,
    saveUninitialized: false,
    store: MongoConnect.create({
        mongoUrl: "mongodb://localhost:27017/auth"
    }),
    cookie: {
        maxAge: 1 * 60 * 60 * 1000    // 1 hour (in milliseconds)
    }
}));



app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);
app.listen(4000, () => {
    console.log("server started !!")
});