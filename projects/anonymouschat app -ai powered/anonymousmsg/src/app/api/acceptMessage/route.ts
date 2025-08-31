import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import UserModel from "@/model/user";
import { User } from "next-auth";
import { success } from "zod";
export async function POST (request:Request){
    await dbConnect()
    const session=await getServerSession(authOptions)
const user :User =session?.user 
if(!session ||!session.user){
    return Response.json({
        success:false,
        message:"Not authenticated"
    },{
        status:400
    })
} 
const userId=user._id;

const {acceptMessages}=await request.json()
try {
   const updatedUser = await UserModel.findByIdAndUpdate(
        {_id:userId},{
            isAcceptingMessage:acceptMessages

        },{new:true}
    )
    if(!updatedUser){
         return Response.json({
        success:false,
        message:"User not found "
    },{
        status:401
    })
    }
     return Response.json({
        success:true,
        message:"Message acceptance staus updated ",updatedUser
    },{
        status:200
    })
} catch (error) {
    console.error("Failed to update user status to accept message",error)
     return Response.json({
        success:false,
        message:"failed to update accept message "
    },{
        status:500
    })
}

}  



export async function GET(request:Request){
    dbConnect()
    const session=await getServerSession(authOptions)
const user :User =session?.user 
if(!session ||!session.user){
    return Response.json({
        success:false,
        message:"Not authenticated"
    },{
        status:400
    })
} 
const userId=user._id;
try{const foundUser=await UserModel.findById(userId)
 if(!foundUser){
         return Response.json({
        success:false,
        message:"User not found "
    },{
        status:404
    })
    }
return Response.json({
    success:true,
    isAcceptingMesssages:foundUser.isAcceptingMessage
},{
    status:200
})
}catch(e){
    console.error("error in get isAcceptingMessage",e)
    Response.json({
        success:false,
        message:"error geting isAcceptingMessage"
    },{
        status:400
    })
}
}