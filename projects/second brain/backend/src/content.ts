import express from "express"
import bcrypt from "bcrypt"
import {contentModel} from "./db"
import jwt from "jsonwebtoken"
const jwtsecret= "sadfaerwiuftyh";
import { authmiddleware } from "./auth";
// import { contentModel } from "./db";
export  const content = express.Router();

// create 
content.post("/create",authmiddleware, async (req,res)=>{
    //@ts-ignore

    const user =req.user;
    const{type, title,link,}= req.body;
    console.log(link);
    await contentModel.create({
        type,title,link, tags:[],user,
    }) 
res.json({"msg":"sucessfull"})
})
content.get("/fetch/",authmiddleware, async (req,res)=>{
    //@ts-ignore

    const user =req.user;
    const{type}= req.query;
   let filter:any={user};
   if(type && type!=""){
    filter.type=type;
   }

    const content =await contentModel.find(
       filter
        
    ) .populate("user","username")
res.json({content})
})


content.delete("/delete",authmiddleware,async (req,res)=>{
const content={
link:req.query.link,
title:req.query.title,
//@ts-ignore
user:req.user
}
console.log(content)
   await contentModel.findOneAndDelete(content);
//    contentModel.deleteOne({
//     courseid,
//     //@ts-ignore
//     user:req.usawaitr
//    }) 
console.log("deleted")
    res.send("content deleted")
})