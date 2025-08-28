import mongoose,{Schema,Document}from "mongoose";

export interface Message extends Document{
    content:string;
    createAt:Date
}

const MessageSchema :Schema<Message>=new Schema(
    {   content:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        required:true,
        default:Date.now
    }

    }
)


export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isverified:boolean;
    isAcceptingMessage:boolean;
    messages:Message[]
}

const userSchema:Schema<User> = new Schema({
 username:{
        type:String,
        required:[true,"Username is required"],trim:true,
        unique:true
    },
    email:{type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/.+\@.+\..+/,"please use a valid email address"]
    },
    password:{type:String, required:[true,"password is required"],},
    verifyCode:{type:String,required:[true,"verify code is not available"]},
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verify code expiry is not available"]

    },
    isverified:{
        type:Boolean,
        default:false,

    },
    isAcceptingMessage:{type:Boolean,default:true},
    messages:[MessageSchema],
    
})

const UserModel=(mongoose.models.User as mongoose.Model<User>)|| ( mongoose.model<User>("User",userSchema))

export default UserModel;