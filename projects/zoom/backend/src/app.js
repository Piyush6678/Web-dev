import express from "express"
import {createServer} from "node:http";
import {Server} from "socket.io";
import cors from "cors"
import bcrypt from "bcrypt"
import mongoose from "mongoose"
import { connectedToSocket } from "./controllers/sockeManager.js";
import userRoutes from "./routes/usersRoutes.js"

const app =express();

const MONGO_URL=process.env.MONGO_URL;
const server =createServer(app);
const io=connectedToSocket(server);

app.set("port",(process.env.PORT || 3002))

app.use(cors())
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}))
app.use("/api/v1/users",userRoutes)
const start=async()=>{
  const db=await mongoose.connect(MONGO_URL)

server.listen(app.get("PORT"),()=>{
    console.log("connected")
})

}