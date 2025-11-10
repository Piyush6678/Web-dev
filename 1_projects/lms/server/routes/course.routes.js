import {Router} from "express"
import { addLectures, createCourse, getAllCourses, getLecturesByCourseId, removeCourse, updateCourse } from "../controllers/course.controller.js";
import {isLoggedIn, authorizedRoles, authorizedsubscriber } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
const courseRouter=Router()
courseRouter.route("/").get(getAllCourses).post(isLoggedIn,authorizedRoles("ADMIN"), upload.single("thumbnail"), createCourse)
courseRouter.route("/:id")
.get(isLoggedIn,authorizedsubscriber,getLecturesByCourseId)
.put(isLoggedIn,authorizedRoles("ADMIN"),updateCourse)
.delete(isLoggedIn,authorizedRoles("ADMIN"),removeCourse)
.post(isLoggedIn,authorizedRoles,upload.single("lecture"),addLectures)


export default courseRouter;
