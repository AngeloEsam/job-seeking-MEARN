import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./db/dbConnection.js";
import { v2 as cloudinary } from "cloudinary";
import cors from 'cors'
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import usersRoutes from './routes/userRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import { errorMiddleware } from "./middlewares/error.js";
dotenv.config();
dbConnection();
const app = express();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(cors({
    origin: '*',
    credentials: true,
    methods:['GET','POST','DELETE','PUT']
  }));
  app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:'/tmp/'
}))

app.use('/api/users',usersRoutes)
app.use('/api/applications',applicationRoutes)
app.use('/api/jobs',jobRoutes)
app.use(errorMiddleware)
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
