
import User from "../models/user.models.js";
import AppError from "../utils/error.utils.js";

const cookieOptions={
maxAge:7*25*60*60*1000,
hrrpOnly:true,
secure:true
}

const register=async(req,res,next)=>{
    const {fullname,email,password}=req.body;
if(!fullname ||! email || !password){
    return next( new AppError("all fields are reuired",400))
}

const userExists=await User.findOne({
    email
})
if(userExists){
      return next( new AppError("user alreday exists",400))
}

const  user =await User.create({
    fullname,email,password,
    avatar:{
        public_id:email,
        secure_url:""
    }
})

if(!user ){
    return next(new AppError("user registeration failed ,please try again",400))
}
//TODO:file upload

await user.save();
user.password=undefined;

const token =await user.generateJWTToken()
res.status(200).json({
    success:true,
    message:"User registered successfully",
    user
})
res.cookie("token",token,cookieOptions)

}
const logout=async(req,res)=>{

}
const login=async(req,res)=>{

}
const getProfile=async(req,res)=>{

}

export {register,getProfile,login,logout};