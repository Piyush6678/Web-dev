import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";


export async function POST(request:Request){
    await dbConnect()


    try {
        const {username,code}=await request.json()
    const decodedUsername=    decodeURIComponent(username)
    const user=await UserModel.findOne({
        username:decodedUsername
    })
    if(!user){
        return Response.json({
            success:false,
            message:"user  dont exist"
        },{
            status:402
        })
    }
    const isCodeValid=user.verifyCode===code
    const isCodeNotExpired=new Date(user.verifyCodeExpiry)>new Date()
    if(isCodeNotExpired && isCodeValid){
        user.isverified=true
        await user.save()
         return Response.json({
            success:true,
            message:"account verified"
        },{
            status:200
        })

    }
    if(!isCodeNotExpired){
  return Response.json({
            success:false,
            message:"code is expired"
        },{
            status:400
        })
    }
    if(!isCodeValid){
  return Response.json({
            success:false,
            message:"incorrect code"
        },{
            status:400
        })
    }
    } catch (error) {
          console.error("error verifying code ",error)
        return Response.json({
            success:false,
            message:"Error in otp "
        },{status:500})
    }
}