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
//hash the passwrod

const {username,password,name} =parsedData.data
try{
const user=await prismaClient.user.create({
    data:{email:username,
        password,
        name}
        
    
})
res.json({userId:user.id})
} catch(e){
    res.status(411).json({message:"user already exist"})
}
//dbcal

})
app.post("/signin",async (req,res)=>{
    const parsedData = SigninSchema.safeParse(req.body)
    if(!parsedData.success){
        res.status(403).json({message:"incorrect credentials"})
        return 
    }
//compare the hash passwrod
const {username,password} = parsedData.data
const user = await prismaClient.findFirst({
where:{
    email:username,
    password
}
})
if(!user){
    res.status(403).json({message:"unauthorized"})
return
}
   
    const token=jwt.sign({
        userId:user?.id
    },JWT_SECRET)
    res.json({token})
})
app.post("/room", middleware, async (req,res)=>{
    const parsedData = CreateRoomSchema.safeParse(req.body)
    if(!parsedData.success){
        res.status(403).json({message:"incorrect credentials"})
        return
    }

    //@ts-ignore

    const userId = req.userId;
    try{
    const room=await prismaClient.room.create({
        data:{
            slug:parsedData.data.name,
            adminId:userId
        }
    })
    //db call
res.json({
    roomId:room.id
})}
catch(e){
    res.json({message:"room already exist with this name"})
}

})


app.get("/chat/:roomId",async (req,res)=>{
    const roomId =req.params.roomId;
   const messages = await prismaClient.chat.findMany({
    where:{
        roomId:roomId
    },
    orderBy:{
        id:"desc"
    },
    take:50
   })

   res.json({messages})
})
app.listen(3001);