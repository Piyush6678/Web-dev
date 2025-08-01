import mongoose, { Schema } from "mongoose"

const meetingSchema=new Schema({
    user_id:{type:String},
    meetingCode:{type:String,required:true},
    data:{type:Date,deault:Date.now,required:true}
})

const meetingModel=mongoose.model("Meeting",meetingSchema);
export{meetingModel}