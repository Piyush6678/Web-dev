import {z} from "zod"
export const usernameValidation=z.string().min(2,"username must be greter than 1 character").max(20,"username must not be more the 20 character ").regex(/^[a-zA-Z0-9_]+$/,"username must not contain special character ")


export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"password must be greater than 5 character"}),
})