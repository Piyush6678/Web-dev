import {Router} from "express"
import { addLectures, createCourse, getAllCourses, getLecturesByCourseId, removeCourse, updateCourse, removeLecture } from "../controllers/course.controller.js";
import {isLoggedIn, authorizedRoles, authorizedsubscriber } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
const courseRouter=Router()
courseRouter.route("/")
.get(getAllCourses)
.post(isLoggedIn,authorizedRoles("ADMIN"), upload.single("thumbnail"), createCourse)
.delete(isLoggedIn, authorizedRoles("ADMIN"), removeLecture)
courseRouter.route("/:id")
.get(isLoggedIn,authorizedsubscriber,getLecturesByCourseId)
.put(isLoggedIn,authorizedRoles("ADMIN"),upload.single("thumbnail"),updateCourse)
.delete(isLoggedIn,authorizedRoles("ADMIN"),removeCourse)
.post(isLoggedIn,authorizedRoles("ADMIN"),upload.single("lecture"),addLectures)


export default courseRouter;
