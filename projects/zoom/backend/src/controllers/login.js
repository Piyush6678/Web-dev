import { userModel } from "../models/userModel.js";
import httpStatus from "http-status"
import crypto from "crypto"
import bcrypt,{hash} from "bcrypt"
export const login =async (req,res)=>{
const {username,password}=req.body;
if (!username || !password){
    return res.status(400).json({message :"missing username or password "})
}
try{
    const user = userModel.findOne({
        username
    })
    if(!user){
        return res.staus(httpStatus.NOT_FOUND).json({message:"user not Found"})

    }
    if (bcrypt.compare(password,user.password)  ){
        let token =crypto.randomBytes(20).toString("hex");
        user.token=token;
        await user.save();
        return res.status(httpStatus.OK).json({token:token})

    }


}catch(e){
    res.json({message:`something went wrong ${e}`})
}
}


