const express =require("express")

const router=express.Router()
const zod=require("zod");
const {User,Account}=require("../db")
const { authMiddleware } = require("../middleware");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");

const signupBody =zod.object({
    username:zod.string().email(),
    password:zod.string(),
   firstName:zod.string(),
   lastName:zod.string(),
})

const signinBody =zod.object({
    username:zod.string().email(),
   password:zod.string(),
  
    
})
const updateBody=zod.object({
    pasword:zod.string().optional(),
    firstName:zod.string().optional(),
    lastname:zod.string().optional()
})

router.post("/signup",async(req,res)=>{
    const {success}= signupBody.safeParse(req.body)
    if(!success){
        return res.status(400).json({
            message:"incorrect inputs"
        })
    }
    const existingUser =await User.findOne({
        username:req.body.username
    })
    if (existingUser){
    return res.status(409).json({
            message :"User already exist"
        })
    }
    const { username, password, firstName, lastName } = req.body;
    const user= await User.create({
       username,password,firstName,lastName
    })
const userId=user._id
// Create New account
await Account.create({
userId:userId,
balance:1+Math.random()*10000
})

const token =jwt.sign({userId},JWT_SECRET);
res.json({
    message:"Successfully Signed up",
    token:token
})
})

router.post("/signin",async(req,res) => {

    const {success}=signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"incorrect inputs"
        })
    }
    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password,
    })
    if(user){
        console.log(user._id)
        const token =jwt.sign({
            userId:user._id
        },JWT_SECRET);
        res.json({
            token:token
        })
        return
    }
    res.status(411).json({
        message:"incorrect username or password"
    })

})

router.put("/", authMiddleware ,async (req,res)=>{
 const {success}=updateBody.safeParse(req.body)
 if(!success){
    return res.status(411).json({
        message:"error while updating information"
    })
 }
 await User.updateOne({id:userId},req.body);
 res.json({
    message:"Update successfully"
 })
})

router.get("/bulk",authMiddleware,async(req,res)=>{
    const filter =req.query.filter || "";
    const users=await User.find({ 
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
    "$regex":filter            }
        }]
    })
    res.json({
        user : users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastname,
            _id:user._id
        }))
})
}
)


module.exports=router;