const {Schema,model}=require("mongoose")
const messageSchema=new Schema({
conversation:{type:Schema.Types.ObjectId,ref:"conversation",required:true},
sender:{type:Schema.Types.ObjectId,ref:"user",required:true},
receiver:{type:Schema.Types.ObjectId,ref:"user",required:true},


content:{type:String},
mediaUrl:{
    type:String,
},
contentTypes:{type:String,enum:["image","video","text"]},


reactions:[
    {
      user:{  type:Schema.Types.ObjectId,ref:"user"

      },
      emoji:String

    }
],

messageStatus:{type:String,default:"send"},


},
{timestamps:true})

const Message=new model("message",messageSchema)

module.exports=Message