import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRouter from "./routes/user.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import miscellaneousRouter from "./routes/miscellaneous.routes.js"; // Import
import errorMiddelware from "./middlewares/error.middleware.js";
import courseRouter from "./routes/course.routes.js";
import {config} from "dotenv";
config()
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors(     {
origin:[process.env.FRONTEND_URL],
credentials:true
 } ))
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/ping",(req,res)=>{ // /ping/anything give pong message
    res.send("pong");
})

//routes if three module 

app.use("/api/v1/user",userRouter)
app.use("/api/v1/courses",courseRouter)
app.use("/api/v1/payments",paymentRouter)
app.use("/api/v1", miscellaneousRouter); // Register






app.use((req,res)=>{
res.status(404).send("OOPS ! 404 page not Found");
})
app.use(errorMiddelware);
export default app;