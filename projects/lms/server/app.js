import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRouter from "./routes/user.routes.js";
import errorMiddelware from "./middlewares/error.middleware.js";
const app=express();

app.use(express.json());
app.use(cors({
origin:[process.env.FRONTED_URl],
credentials:true
}))
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/ping",(req,res)=>{ // /ping/anything give pong message
    res.send("pong");
})

//routes if three module 

app.use("/api/v1/user",userRouter)






app.use((req,res)=>{
res.status(404).send("OOPS ! 404 page not Found");
})
app.use(errorMiddelware);
export default app;