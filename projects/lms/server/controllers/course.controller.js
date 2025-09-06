import Course from "../models/course.model.js";

try{const getAllCourses=async (req,res,next)=>{
const courses= await Course.find().select(-lectures);
res.status(200).json({
    success:true,message:"all courses we have",
    courses,
})}

}catch(e){
     return next(
            new AppError("no course availabe ",500)
        )

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
export {getAllCourses,getLecturesByCourseId} 