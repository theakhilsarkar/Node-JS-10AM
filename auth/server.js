import express from 'express'
import auth_routes from './routes/auth_routes.js';
import { connectDB } from './config/db.js'

const app = express();
app.use(express.json());


connectDB();
app.use("/", auth_routes);


app.listen(4000, () => {
    console.log("server started !!");
})













