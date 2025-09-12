import { jwt } from "jsonwebtoken";
import AppError from "../utils/error.utils";

const isLoggedIn=async(req,res,next)=>{
const {token}=req.cookies;
if(!token){
    return next(new AppError("unauthenticaticate, please login first",401))

}

const userDetails=await jwt.verify(token,process.env.JWT_SECRET)
req.user=userDetails;
next()
}

const authorizedRoles=(...roles)=>async(req,res,next)=>{
    const currentuserRoles=req.user.role;
    if(!roles.includes(currentuserRoles)){
return next(
    new AppError("you dont have permission to access this route")
    )
    }
    next();

}



export { isLoggedIn,authorizedRoles}