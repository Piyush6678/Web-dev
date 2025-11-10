import express from "express"
import bcrypt from "bcrypt"
import {userModel} from "./db"
import jwt from "jsonwebtoken"
const jwtsecret= "sadfaerwiuftyh";
export  const user = express.Router();
user.post("/signup", async (req,res)=>{
    const username= req.body.username
    const password=req.body.password;
    const hashedpassword= await bcrypt.hash(password,4);
  const user = await userModel.create({
        username,
        password:hashedpassword,
    })
    console.log("hi");
    res.send("signed up succesfully")
})
user.post("/signin", async (req,res)=>{
    const username= req.body.username
    const password=req.body.password;
    const user = await userModel.findOne({
        username,
        
    })
if(!user){
    res.send("invalid username")
}    
else{
    const hashedpassword= await bcrypt.compare(password,user.password);
    if(!hashedpassword){
        res.send("invalid password")
    }
    const token =  jwt.sign({id:user._id},jwtsecret)
    // console.log(token);
res.json({"token":token})
}
   

})
