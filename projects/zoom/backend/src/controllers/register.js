import { userModel } from "../models/userModel.js";
import httpStatus from "http-status"
import bcrypt,{hash} from "bcrypt"


export const register =async (req,res)=>{
const {name,username,password}=req.body;
try{
const existingUser =await userModel.find({
    username 
})
if (existingUser){
    return res.status(httpStatus.FOUND).json({message:"user already exist"})
}

const hashedpassword =await bcrypt.hash(password,10);

const newUser = new User ({
    name,username,password:hashedpassword
})

await newUser.save()
res.status (httpStatus.CREATED).json({message:"you are registeres"})

}catch (e) {

    res.json({message:`something went wrong ${e} `})

}
}