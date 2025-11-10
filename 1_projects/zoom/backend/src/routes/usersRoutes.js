import { Router } from "express";
import { login } from "../controllers/login.js";
import { register } from "../controllers/register.js";
import { addToHistory } from "../controllers/addToHistory.js";
import { getUserHistory } from "../controllers/getUserHistory.js";

 
 const router=Router();
 router.route("/login").post(login)
 router.route("/register").post(register)
 router.route("/add_to_activity").post(addToHistory)
 router.route("/get_all_activity").post(getUserHistory)

 export default router ;