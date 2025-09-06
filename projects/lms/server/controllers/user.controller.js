import User from "../models/user.models.js";
import AppError from "../utils/error.utils.js";
import cloudinary from "cloudinary" 
import fs from "fs/promises"
import sendEmail from "../utils/sendEmail.js";
const cookieOptions={
maxAge:7*25*60*60*1000,
hrrpOnly:true,
secure:true
}
import crypto from "crypto"

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

if(req.file){
     console.log(req.file)
    try{
const result =await cloudinary.v2.uploader.upload(req.file.path,{
    folder:"lms",
    widdth:250,
    height:250,
    gravity:"faces",
    crop:"fill"
})
if(result){
    user.avatar.public_id=result.public_id;
    user.avatar.secure_url=result.secure_url 
    // remove from local server
    fs.rm(`uploads/${req.file.filename}`)
}

    }catch(e){
        return next(
            new AppError(e || "file not uploaded ,please try again",500)
        )

    }
}
await user.save();
user.password=undefined;

const token =await user.generateJWTToken()
res.cookie("token",token,cookieOptions)
res.status(200).json({
    success:true,
    message:"User registered successfully",
    user
})

}
const login=async(req,res,next)=>{
 try{   const {email,password}=req.body;
if(!fullname ||! email || !password){
    return next( new AppError("all fields are reuired",400))
}
const user=await User.findOne({email}).select("+password");
if(!user || !user.comparePassword(password)){
    return next (new AppError("email or password does not match ",40))
}
const token=await user.generateJWTToken()
user.password=undefined();
res.cookie("token",token,cookieOptions)
res.status(200).json({
    success:true,
    message:"User logged in  successfully",
    user
})}catch(e){

    return next(new AppError(e.message,500));
}
}
const logout=async(req,res,next)=>{
rescookie("token",null,{
    secure:true,
    maxAge:0,
    httpOnly:true
});
res.status(200).json({
    success:true,
    message:"user logged out successfully"
})
}
const getProfile=async(req,res,next)=>{
try{const userId=req.user.id;
const user=await User.findById(userId)
res.status(200).json({
    success:true,message:"user detail",user

})}catch(e){
    return next(new AppError("unabale to fetch user detail",500))
}
}

const forgotPassword=async(req,res,next)=>{
const {email}=req.body
if(!email){
     return next(new AppError("Email is required",400))
}

const user=await User.findOne({email});
if(!user){
    return next(new AppError("Email is not regisetered,signup first",400))
} 
const resetToken=await user.generatePasswordToken()
await user.save();
const resetPasswordURL=`${process.env.FRONTEND_URL}/forgot-password/${resetToken}`;
subject="Reset password";
message=` You can reset your password by clivking <a heref=  ${resetPasswordURL}target="_blank">Reset your Password</a> \n if the above link does not work for some reason then copy this link in you browser ${resetPasswordURL}. \n if you have not requested this ,kindly ignore this email `


try{
    await sendEmail(email,subject,message);
    res.stauts(200).json({success:true,message:"Reset Password Toke has been send successfully"})
}catch(e){
    user.forgotPasswordExpiry=undefined
    user.forgotPasswordToken=undefined
    await user.save();
    return next(new AppError(e.message,500))
}

}
const resetPassword= async (req,res)=>{
    const {resetToken}=req.params;
    const {password}=req.body;
    const forgotPasswordToken=crypto.createHash("sh256").update(resetToken).digest("hex");

    const user=await User.findOne({
        forgotPasswordToken,
        forgotPasswordExpiry:{$gt:Date.now()}

    })
    if(!user){
           return next(new AppError("token is invalid or expire,please try again ",400))
    }

    user.password=password;
    user.forgotPasswordExpiry=undefined;
    user.forgotPasswordExpiry=undefined;
    user.save()
res.status(200).json({
    success:true,
    message:"Password reset successfuly "
})
}
const changePassword=async(req,res,next)=>{
const userId=req.user.id;
const{oldPassword,newPassword}=req.body;

    if(!oldPassword || !newPassword){
        return next(new AppError("all fields are mendatory ",400))
    }


    const user =await User.findById(userId);
if(!user){
    return next(new AppError("User does not exist ",400))
}

const isPasswordValid=await user.comparePassword(oldPassword);
if(!isPasswordValid){
      return next(new AppError("passwrod didnot match  ",400))
}
user.password=newPassword;
await  user.save()
user.password=undefined;
res.status(200).json({success:"true",message:"Password changed successfully"})
}

const updateUser=async(req,res)=>{
const {fullname}=req.body;
const userId=req.user.id
const user = await User.findById(userId)
if(!user){
 return next(new AppError("user doesnot exists  ",400))
}

if(req.fullname){
   user.fullname=fullname; 
}

if(req.file){
    await cloudinary.v2.uploader.destroy(user.avatar.public_id )
     try{
const result =await cloudinary.v2.uploader.upload(req.file.path,{
    folder:"lms",
    widdth:250,
    height:250,
    gravity:"faces",
    crop:"fill"
})
if(result){
    user.avatar.public_id=result.public_id;
    user.avatar.secure_url=result.secure_url 
    // remove from local server
    fs.rm(`uploads/${req.file.filename}`)
}

    }catch(e){
        return next(
            new AppError(e || "file not uploaded ,please try again",500)
        )

    }
}
await user.save();
res.status(200).json({success:true,message:"User details updated"})

}

export {updateUser,    changePassword,register,getProfile,login,logout,forgotPassword,resetPassword};