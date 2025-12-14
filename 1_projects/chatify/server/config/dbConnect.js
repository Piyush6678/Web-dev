const mongoose=require("mongoose")
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to database successfully")
    } catch (error) {
        console.log("connection to database failed")
        process.exit(1)
    }
}
module.exports=connectDb