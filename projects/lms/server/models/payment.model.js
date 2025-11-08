import {model,Schema} from "mongoose"
const paymentSchema=new Schema({
    razorpay_paymewnt_id:{type:String,required:true},
    razorpay_subsciption_id:{
        type:String,
        required:true
    },
    razorpay_signature:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Payment=model("Payment",paymentSchema)