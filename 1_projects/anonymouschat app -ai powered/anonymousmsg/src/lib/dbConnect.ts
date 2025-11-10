import mongoose from "mongoose";
type ConnectionObject={
  isConnected?:number  
}

const connection:ConnectionObject={}
async function dbConnect() :Promise<void> {
if(connection.isConnected){
    console.log("already connected to database ")
    return 
}

try{  
const db= await mongoose.connect(process.env.MONGO_URI || " ")
connection.isConnected=db.connections[0].readyState

console.log("DB CONNECTED Successfully")
} catch(e){
    console.log("Database connection failed",e
    )
process.exit(1)
}

}

export default dbConnect;