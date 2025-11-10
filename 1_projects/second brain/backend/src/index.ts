import express from "express";
import mongoose from "mongoose";
import {user} from "./user"
import { content } from "./content";
import { brain } from "./brain";
import jwt from "jsonwebtoken"
import cors from "cors"
const jwtsecret= "sadfaerwiuftyh";

mongoose.connect("mongodb://localhost:27017/SecondBrain-2")
const app=express();
const port =3000;
app.use(cors());
app.use(express.json())
app.use("/brain",brain);
app.use("/user",user);
app.use("/content",content);
app.get("/",(req,res)=>{
res.send ("hi there")
})

app.listen(port,()=>{
    console.log("hello i am listening")
})