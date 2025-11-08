import {config} from "dotenv";
config()
import  app from "./app.js"
import connectToDb from "./config/dbConnection.js";
import cloudinary from "cloudinary"
import Razorpay from "Razorpay"
const PORT=process.env.PORT||5000;

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

export const razorpay =new Razorpay({
    key_id:process.env.RAJORPAY_KEY_ID,
    key_secret:process.emv.RAZORPAY_SECRET
})

app.listen(PORT,async ()=>{
await connectToDb();
    console.log(`App is running on port ${PORT}`);
})