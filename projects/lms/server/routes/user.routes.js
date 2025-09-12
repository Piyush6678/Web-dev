import { Router } from "express";
import { changePassword,forgotPassword, getProfile, login, logout, register, resetPassword } from "../controllers/user.controller.js";
import isLoggedIn from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js"
const userRouter=Router()
userRouter.post("/register",upload.single("avatar"),register)
userRouter.post("/login",login)
userRouter.get("/logout",logout)

userRouter.get("/me", isLoggedIn  , getProfile)
userRouter.post("/reset",forgotPassword);
userRouter.post("/reset/:resetToken",resetPassword);
userRouter.post("/change-password",isLoggedIn,changePassword)
userRouter.put("/update/:id",isLoggedIn,upload.single("avatar"),updateUser)

export default userRouter;