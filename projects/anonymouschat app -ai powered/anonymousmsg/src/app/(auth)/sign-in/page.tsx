
"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import {  FormProvider, useForm } from "react-hook-form"
import * as z  from "zod"
import Link from "next/link"
import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

import { toast } from "sonner"
import { useRouter } from "next/navigation"

import { ApiResponse } from "@/types/ApiResponse"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { signInSchema } from "@/schemas/signInSchema"
import { signIn } from "next-auth/react"
const page = () => {
 
  const [isSubmitting,setIsSubmitting]=useState(false)

const router=useRouter()

//zod implementation
const form =useForm<z.infer<typeof signInSchema>>({
  resolver:zodResolver(signInSchema),
  defaultValues:{
  
    identifier:"",
    password:""
  }
})


const onSubmit=async(data : z.infer<typeof signInSchema>)=>{
const result=await signIn("credentials",{
  redirect:false,
  identifier:data.identifier,
  password:data.password
})
if(result?.error){
  toast.error("Login Failed",{
    description:"incorrect username or password"
  })
}

if(result?.url){
  router.replace("/dashboard")
}
}

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100 " >
  <div  className="w-full max-w-md p-8 space-y-8 bg-white rounded=lg shadow-md " >
    <div className="text-center" >
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 " >
        Jin Mystery Message
      </h1>
      <p className="mb-4" >Sign In to start your anonymous adventure</p>
    </div>
<Form {...form} >
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >

  <FormField  
    control={form.control}
  name="identifier"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email/Username</FormLabel>
      <FormControl>
        <Input  placeholder="Email/username" {...field}
     
        
        />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )} />
  <FormField  
    control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>password</FormLabel>
      <FormControl>
        <Input  typeof="password" placeholder="pasword" {...field}
      
        
        />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )} />

<Button type="submit" disabled={isSubmitting}  >
{isSubmitting  ? (
  <>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  </>
):("Signin")}

</Button>


</form>

</Form>




  </div>
</div>
  )
}

export default page
