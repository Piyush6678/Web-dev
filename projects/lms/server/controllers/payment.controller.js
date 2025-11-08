import User from "../models/user.models";
import { razorpay } from "../server";

export const   getRazorpayApiKey = async(req,res,next)=>{
req.status(200).json({
    success:true,
message:"your Razorpay API key",
key:process.env.RAJORPAY_KEY_ID
})



}
export const   buySubscription = async(req,res,next)=>{

const {id}=re.user;
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
export const   verifySubscription = async(req,res,next)=>{}