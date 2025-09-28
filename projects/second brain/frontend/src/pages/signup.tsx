import { useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/InputBox";
import { backend_url } from "../config";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { data } from "react-router-dom";

export function Signup(){
    const navigate= useNavigate()
    const usernameref=useRef<HTMLInputElement>();
    const passwordref=useRef<HTMLInputElement>();
    async  function signup(){
const username=usernameref.current?.value
const password=passwordref.current?.value
try{ await axios.post(backend_url+"/user/signup",{
    
        username,
        password
    
})
console.log("badiya")
alert("You have been signed up")
navigate("/user/signin")}catch(e){
    console.error(e)
    alert("Error signing up. Please try again.")
 
}
    }
    return <div className="flex items-center justify-center bg-gray-200 h-screen w-screen fixed top-0 left-0" >
        <div className="bg-white p-5 rounded border min-w-48">

<Input reference={usernameref} PlaceHolder="username"  />
<Input reference={passwordref}  PlaceHolder="password"  />
<div className="flex items-center">
<Button variant="primary" text="Sign up" fullWidth={true}  loading={false} onClick={signup} />
    </div>
    </div>      
      </div>
}