import express from "express"
import bcrypt from "bcrypt"
import { random } from "./utils";
import { authmiddleware } from "./auth";
import jwt from "jsonwebtoken"
import { contentModel, linkModel, userModel } from "./db";
const jwtsecret= "sadfaerwiuftyh";
export  const brain = express.Router();
brain.post("/share",authmiddleware, async (req,res)=>{
    const share =req.body.share;
    if (share){
      const existlink =await linkModel.findOne({
        //@ts-ignore
        user:req.user
      })
      if(existlink){
        res.json({
          hash:existlink.hash
        })
        return ;
      }
      const hash=random(15)
       linkModel.create({
        //@ts-ignore
        user:req.user,
        hash:hash
       })
       res.json({
        hash:hash
      })
      return 
    }
    else{
      await  linkModel.deleteOne({
      //@ts-ignore
        user:req.user
        })
    }
    res.json({
      message:"updated shareable link"
    })
})
brain.get("/:sharelink",authmiddleware, async (req,res)=>{
  const hash =req.params.sharelink;
  const link= await linkModel.findOne({
hash
  });
if(!link){
  res.status(411).json({
    msg:"wrong link"
  })
  return;
}
const content =await contentModel.find({
  user:link.user
})
const user = await userModel.findOne({
  _id:link.user
})
if(!user){
  res.send("user not found");
return 
}
res.json({
  user:user.username,
content:content
})


})
   

