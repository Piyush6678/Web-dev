import mongoose, { Schema } from "mongoose";

const userSchema =new Schema({
    name:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{ type:String,required:true },
    token:{type:String }
})


const userModel=mongoose.model

("user",userSchema);
export { userModel}