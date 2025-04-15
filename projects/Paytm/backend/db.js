const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm")
const {Schema}=mongoose;
const userSchema =new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        trim:true,
        lowercase:true,
        maxLength:50,
    },
    password : {
        type:String,
        required:true,
        minLength:6,
        
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:30,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:30,
    }
})

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true,
    }
})



const Account=mongoose.model("Account",accountSchema)
const User=mongoose.model("User",userSchema)
module.exports={
    User,
    Account,
};