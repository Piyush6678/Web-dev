import mongoose from "mongoose";
const Schema= mongoose.Schema;
const objectId=Schema.Types.ObjectId;

const userSchema= new Schema ({
username:{ type:String, required:true , unique:true},
password:{type:String,required:true,} 
})
export const userModel= mongoose.model("User",userSchema);
const contentSchema= new Schema ({
    type:{ type:String, required:true , },
    title:{ type:String, required:true , },
    link:{type:String,required:true,},
    tags:[{type:objectId,ref:"Tags"} ],
    user:{type:objectId,ref:"User"} 
})
export const contentModel= mongoose.model("Content",contentSchema);
const linkSchema= new Schema ({
hash:{ type:String, required:true , },
user:{type:objectId,ref:"User"} 
})
export const linkModel= mongoose.model("link",linkSchema);