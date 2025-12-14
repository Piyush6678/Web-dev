const express=require("express");
const cookieParser=require("cookie-parser")
const cors=require("cors");
const dotenv=require("dotenv");
const connectDb = require("./config/dbConnect");


dotenv.config()
const app=express()
const PORT=process.env.PORT ||8000



app.listen(PORT,()=>{

try {
    connectDb()
    console.log("server running on this 8000")
} catch (error) {
    
    console.log(error)
}

})