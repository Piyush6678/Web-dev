import User from "../models/user.models.js";
import Payment from "../models/payment.model.js";
import { razorpay } from "../server.js";
import AppError from "../utils/error.utils.js";

export const   getRazorpayApiKey = async(req,res,next)=>{
req.status(200).json({
    success:true,
message:"your Razorpay API key",
key:process.env.RAJORPAY_KEY_ID
})



}
export const   buySubscription = async(req,res,next)=>{

const {id}=req.user;
const user = await User.findById(id)
if(!user){
    return next(
        new AppError("unauthorized ,please login")
    )
}
if(user.role==="ADMIN"){

return next(
        new AppError("ADMIN CANT PURCHASE THE COURSE",400)
    )

}

const subscription =await razorpay.subscriptions.create({
    plan_id:process.env.RAZORPAY_PLAN_ID,
    customer_notify:1
})


user.subscription.id=subscription.id;
user.subscription.status=subscription.status;
await user.save();
re.status(200).json({
    success:true,
    message:"Successfully subscribed",
    subscription_id:subscription.id
})








}
export const   allPayments = async(req,res,next)=>{}
export const   cancelSubscription = async(req,res,next)=>{}
export const   verifySubscription = async(req,res,next)=>{


const {id}=req.user;
const{razorpay_payment_id,razorpay_signature,razorpay_subscription_id}=req.body



const user = await User.findById(id)
if(!user){
    return next(
        new AppError("unauthorized ,please login")
    )
}

const subscriptionId= user.subscription.id
const generatedSignature=crypto
.createHmac("sha26",process.env.RAZOPRPAY_SECRET)
.update(`${razorpay_payment_id}| ${subscriptionId}`)
.digest("hex");
if(generatedSignature !==razorpay_signature){

    return next(
        new AppError("Payment not verified try again",500)

    )
}

await Payment.create({
    razorpay_payment_id,
    razorpay_signature,
    razorpay_subscription_id
})

user.subscription.status="active";
await user.save();
res.status(200).json({
    success:true,
    message:"payment Successfully"
})



}