import express from 'express'
import { connectDB } from './config/db.js'
import routes from './routes/OtpRoutes.js'

const app = express();
app.use(express.json());

connectDB();
app.use("/", routes);

app.listen(process.env.PORT, () => console.log("server started !"));


// email - 10 3,4
// otp expiry
// otp send limit
// otp verify - 3 wrong. 
// ...