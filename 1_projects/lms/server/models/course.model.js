 import {model,Schema}from "mongoose"
 const courseSchema=new Schema({
title:{
    type:String,
    requires:[true,"title is required"],
    minLength:[8,"title is must ne atleast of 8 character "],
    maxLength:[60,"title is must ne less tahn 60 character "],
    trim:true,
},
description:{
    type:String,
    requires:[true,"Description is required"],
    minLength:[8,"Description is must ne atleast of 8 character "],
    maxLength:[200,"Description is must ne less tahn 200 character "],
},
category:{
    type:String,
    requires:[true,"category is required"],
},
thumbnail:{
     public_id:{type:String,
        required:true,
     },
            secure_url:{
                type:String,
                        required:true,
            }
},
lectures:[
    {
        title:String,description:String,
        lecture:{
            public_id:{type:String,
            required:true,},
            secure_url:{
                type:String,
                required:true,
            }
        }
    }
]
, numberOfLectures:{
    type:Number ,
    default:0,
},
createdBy:{
    type:String,requiride:true,
}

 },{
    timestamps:true
 })


 const Course=model("course",courseSchema);
 export default Course