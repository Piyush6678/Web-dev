import { Schema,model } from "mongoose";
import  bcrypt from "bcryptjs"
import  jwt  from "jsonwebtoken";
import crypto from "crypto"
const userSchema=new Schema({
    fullname:{type:String,required:[true,"name is required"],minLength:[5,'name must be atleast 5 character'],macLength:[50,'name must be note more than 50 character'],trim:true,lowercase:true,},
    email:{
        type:String,
        required:[true,"email is required"],unique:true,
        lowercase:true, 
        trim:true  ,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email"
]
        },
password:{type:String,required:[true,"password is required"],
    minLength:[6,"password is too short "],
    select :false

},
avatar:{
    public_id:{type:String}
},
secure_url:{
    type:String
},

role:{
    type:String,
    enum:["USER","ADMIN"],
    default:"USER",
},
forgotPasswordToken:String,
forgotPasswordExpiry:Date,
subscription:{
    id:String,
    status:String
}
},{timestamps:true})

userSchema.pre("save",async function (next){
if(!this.isModified("password")){
return next()
}
 this.password=await bcrypt.hash(this.password,10)
})
userSchema.methods={
    generateJWTToken:async function(){
        return  jwt.sign({
            id:this._id,email:this.email,subscription:this.subscription,role:this.role
        },process.env.JWT_SECRET,{
           
            expiresIn:process.env.JWT_EXPIRY
        })
    },
    comparePassword:async function(password){
       return await  bcrypt.compare(password,this.password)
    },

    generatePasswordToken:async function (){
        const resetToken=crypto.randomBytes(20).toString("hex");
    this.forgotPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    this.forgotPasswordExpiry=Date.now()+15*60*1000 //15 minutes from now 
    return resetToken
    }

}
const User=model("user",userSchema)
export default User; 