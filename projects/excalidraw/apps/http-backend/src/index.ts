import express from "express"
import { JWT_SECRET } from "@repo/backend-common/config";
import {prismaClient} from "@repo/db/client"
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import {CreateUserSchema,CreateRoomSchema,SigninSchema } from "@repo/common/types"
const app=express();
app.use(express.json());

app.post("/signup",async (req,res)=>{
const parsedData = CreateUserSchema.safeParse(req.body)
if(!parsedData.success){
     res.status(403).json({message:"incorrect credentials"})
     return 
}

const {username,password,name} =parsedData.data
try{
const user=await prismaClient.user.create({
    data:{email:username,
        password,
        name}
        
    
})} catch(e){
    res.status(411).json({message:"user already exist"})
}
//dbcal
res.json({userId:"123"})
})
app.post("/signin",async (req,res)=>{
    const parsedData = SigninSchema.safeParse(req.body)
    if(!parsedData.success){
        res.status(403).json({message:"incorrect credentials"})
        return 
    }


    const userId=1;
    const token=jwt.sign({
        userId
    },JWT_SECRET)
    res.json({token})
})
app.post("/room", middleware, async (req,res)=>{
    const parsedData = CreateRoomSchema.safeParse(req.body)
    if(!parsedData.success){
        res.status(403).json({message:"incorrect credentials"})
        return
    }
    //db call
res.json({
    roomId:"123"
})

})
app.listen(3001);