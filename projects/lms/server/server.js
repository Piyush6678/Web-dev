import {config} from "dotenv";
config()
import  app from "./app.js"
import connectToDb from "./config/dbConnection.js";
const PORT=process.env.PORT||5000;
app.listen(PORT,async ()=>{
await connectToDb();
    console.log(`App is running on port ${PORT}`);
})