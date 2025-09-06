import { JsonWebTokenError } from "jsonwebtoken";
import AppError from "../utils/error.utils";

const isLoggedIn=async(req,res,next)=>{
const {token}=req.cookies;
if(!token){
    return next(new AppError("unauthenticaticate, please login first",401))

}

const userDetails=await JsonWebTokenError.verify(token,process.env.JWT_SECRET)
req.user=userDetails;
next()
}
export default isLoggedIn