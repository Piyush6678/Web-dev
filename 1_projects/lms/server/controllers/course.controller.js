import Course from "../models/course.model.js";
import cloudinary from "cloudinary"
import AppError from "../utils/error.utils.js"
import fs from "fs/promises"
const getAllCourses=async (req,res,next)=>{
try{
const courses= await Course.find().select(-lectures);
res.status(200).json({
    success:true,message:"all courses we have",
    courses,
})}

catch(e){
     return next(
            new AppError("no course availabe ",500)
        )}

}


const getLecturesByCourseId=async(req,res,next)=>{
try{const {id}=req.params;
if(!id){
    return next(
            new AppError("id is not availabele ",500)
        )
}
const course=await Course.findById(id)
if(!course){
     return next(
            new AppError("no course is  available wth this id  ",500)
        )
}
res.status(200).json({
    success:true,message:"all courses we have",
    lectures:course.lectures,
})}catch(e){
    return next(
            new AppError(e.message||"no course is  available wth this id  ",500)
        )
}

}


const createCourse=async(req,res,next)=>{  
    const {title,description,category,createdBy}=req.body;
    if(!title || ! description || !category ||! createdBy){
        return next(
            new AppError("All fields are required ",400)
        )
    }
    const course=await Course.create({
        title,description,createdBy,category,thumbnail:{
            public_id:"dummy",
            secure_url:"dummy",
        }

    });
    if(!course){   return next(
            new AppError ("course creation failed ",400)
        )}

       try{ if(req.file){
            const result=await cloudinary.v2.uploader.upload(req.file.path,{folder:"lms"});
            if(result){
                course.thumbnail.public_id=result.public_id 
                course.thumbnail.secure_url=result.secure_url 
            }
            fs.rm(`uploads/${req.file.filename}`)
        }} catch(e){
            console.log("error occured in creting course",e)
            return next(
            new AppError(e.message,400))
        }
        await course.save();
        res.status(200).json({
            success:true,
            message:"course created successfully ",
            course,
        })
}

const updateCourse=async(req,res,next)=>{
try{
const {id}=req.params;
const course=await Course.findByIdAndUpdate(
    id,{
        $set:req.body
    },{
        runValidators:true,new:true,
    }
);
if(!course){
    return next(new AppError("coure with given id is not exists",500))
}
res.status(200).json({
    success:true,
    message:"course updated successfully ",
    course
})
}catch(e){
     return next(
            new AppError(e.message,400))
}


}
const removeCourse=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const course =await Course.findById(id);
        if(!course){
            return next(new AppError("coure with given id is not exists",500))
        }
        // if not work do  find by id and delete
        await course.deleteOne({_id:id});
        res.status(200).json({success:true,
            message:"course deleted successfully",
        })
    } catch (error) {
             return next(
            new AppError(e.message,400))
        
    }
}
const addLectures=async(req,res,next)=>{
   try
   {
    const {title,description}=req.body;


    const {id}=req.params;

const course= await Course.findById(id);


if(!course){
 return next(new AppError("coure with given id is not exists",500))
}

const lectureData={
    title,
    description,
    lecture:{}
}
 try{ if(req.file){
            const result=await cloudinary.v2.uploader.upload(req.file.path,{folder:"lms"});
            if(result){
                lectureData.lecture.public_id=result.public_id 
                lectureData.lecture.secure_url=result.secure_url 
            }
            fs.rm(`uploads/${req.file.filename}`)
        }} catch(e){
            console.log("error occured in uploading lectures ",e)
            return next(
            new AppError(e.message,400))
        }

course.lectures.push(lectureData);
course.numberOfLectures=course.lectures.length;
await course.save();
res.status(200).json({
    success:true,
message:"lecture created successfully "
})}catch(e){
      return next(
            new AppError(e.message,400))
}
}


export {addLectures,getAllCourses,getLecturesByCourseId,createCourse,updateCourse,removeCourse} 