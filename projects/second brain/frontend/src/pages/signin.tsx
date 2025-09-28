import { useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/InputBox";
import { backend_url } from "../config";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Signin(){const usernameref=useRef<HTMLInputElement>();
    const passwordref=useRef<HTMLInputElement>();
    const navigate=useNavigate();
  async   function signin(){
const username=usernameref.current?.value
const password=passwordref.current?.value
try{const response= await axios.post(backend_url+"/user/signin",{
    username,
    password

})
 const jwt=response.data.token
 localStorage.setItem("authorization",jwt)  
navigate("/dashboard") }catch(e){console.log(e);}
    }
    return <div className="flex items-center justify-center bg-gray-200 h-screen w-screen fixed top-0 left-0" >
        <div className="bg-white p-5 rounded border min-w-48">

<Input reference={usernameref} PlaceHolder="username"  />
<Input reference={passwordref}  PlaceHolder="password"  />
<div className="flex items-center">
<Button variant="primary" text="Sign in" fullWidth={true}  loading={false} onClick={signin} />
    </div>
    </div>      
      </div>
}