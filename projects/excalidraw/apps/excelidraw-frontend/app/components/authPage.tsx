"use client"

export default function AuthPage({isSignIn}:{isSignIn:boolean}){
return ( <div className="w-screen  h-screen flex justify-center items-center ">
<div className="border   p-4   " >
<div className="flex flex-col  "  > 
<input type="text" placeholder="Email" className="border rounded p-2 m-2  "  />
<input type="text" placeholder="Password"  className=" rounded border  p-2 m-2 "/>

</div>
<div className="mt-8 flex justify-center " >
<button onClick={()=>{

}} className="  bg-blue-600 text-white rounded border px-8 py-2  " > {isSignIn?"Sign in ":"Sign up "} </button>
</div>
</div>

</div> )
}