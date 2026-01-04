import jwt from "jsonwebtoken";
import AppError from "../utils/error.utils.js";

import User from "../models/user.models.js";

const isLoggedIn=async(req,res,next)=>{
const {token}=req.cookies;
if(!token){
    return next(new AppError("unauthenticaticate, please login first",401))

}

const userDetails=await jwt.verify(token,process.env.JWT_SECRET)

req.user = await User.findById(userDetails.id);
next()
}

const authorizedRoles=(...roles)=>async(req,res,next)=>{
 
   const currentuserRoles=req.user.role;
  
    if(!roles.includes(currentuserRoles)){
return next(
    new AppError("you dont have permission to access this route",401)
    )
    }
    next();

}




const authorizedsubscriber=async (req,res,next)=>{
   const subscription=req.user.subscription;
   const currentUserRole=req.user.role;
   if(currentUserRole!=="ADMIN" && subscription.status!=="active"){
    return next(new AppError("please subscribe to access this",403))

}
next()
}

export { isLoggedIn,authorizedRoles,authorizedsubscriber}