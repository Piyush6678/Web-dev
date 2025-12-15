const mongoose=require("mogoose")
const Schema=mongoose.Schema()
const userSchema=new Schema({
    phoneNumber:{type:String,unique:true,sparse:true},
    phoneSuffix:{type:String,unique:false},
    username:{type:String},
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"],
        lowercase:true,
        trim:true  ,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email"]

    },

  password:{type:String,required:[true,"password is required"],
    minLength:[6,"password is too short "],
    select :false

},
    emailOtp:{
        type:String
    },
    emailOtpexpire:{type:Date},
    profilePicture:{type:String},
    about:{type:String},
    lastSeen:{type:String},
    isOnline:{type:Boolean,default:false},
    isVerified:{type:Boolean,default:false},
    agreed:{type:Boolean,default:false}

},{timestamps:true})


const User=mongoose.model("user",userSchema);
module.exports=User