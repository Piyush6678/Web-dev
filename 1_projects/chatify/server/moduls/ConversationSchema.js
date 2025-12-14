const {Schema,model}=require("mongoose")
const conversationSchema=new Schema({
participants:[{
    type:Schema.Types.ObjectId,ref:"user"
}],
lastMessage:{type:Schema.types.ObjectId,ref:"message"},
unreadCount:{type:Number,default:0},
},{timestamps:true})

const conversation=new model("conversation",conversationSchema)

module.exports=conversation