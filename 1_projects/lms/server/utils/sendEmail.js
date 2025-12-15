import  nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const sendEmail=async(email,subject,message)=>{


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Wrap in an async IIFE so we can use await.

  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,//sender email 
    to: email,
    subject, 
    // plain‑text body
    html: message, // HTML body
  });

  console.log("Message sent:", info.messageId);
;


}
export default sendEmail;