import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { render } from "@react-email/components";
export async function sendVerificationEmail(
email:string,
username:string,
verifyCode:string



):Promise<ApiResponse>  {
try {
await resend.emails.send({
    from:"Onboarding@resend.dev",
    to:email,
    subject:" True Feedback | Verifiation code",
   html: await render(VerificationEmail({ username, otp:verifyCode })),
})

     return {success:true,message:"successfully  send verification error"}
} catch (emailError) {
    console.error("Error sending verification email",emailError)
    return {success:false,message:"Failed to send verification error"}
}



}