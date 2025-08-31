import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import { Message } from "@/model/user";

export async function POST (request:Request){
await dbConnect()
const {username,content}=await request.json()
try{
    const user=await UserModel.findOne({
        username
    })
    if(!user){
        return Response.json({
            success:false,
            message:"user not found"
        },{
            status :404
        })
    }

//is user accepting the messages
if(user.isAcceptingMessage){
     return Response.json({
            success:false,
            message:"user not accepting messages"
        },{
            status :403
        })
}
const newMessage={content,createAt:new Date()}
user.messages.push(newMessage as Message)
await user.save();
 return Response.json({
            success:true,
            message:"message sent successfully"
        },{
            status :200
        })
}catch(e){
    console.error("error in sending messages",e)
 return Response.json({
            success:false,
            message:"error in sending messages"
        },{
            status :500
        })
}
}