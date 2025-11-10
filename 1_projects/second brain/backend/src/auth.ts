import { NextFunction,Response ,Request} from "express";
import jwt from "jsonwebtoken"
const jwtsecret= "sadfaerwiuftyh";
export const authmiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const userid= req.headers["authorization"];

    const decode=  jwt.verify(userid as string,jwtsecret)
    if(decode){
        //@ts-ignore
        req.user= decode.id;
        next()
    }

}