import { useEffect, useState } from "react";
import { backend_url } from "../config";
import axios from "axios"
export  function useContent(platformType:string){
    const [contents,setcontent]=useState([]);
    
    useEffect(()=>{

   axios.get(`${backend_url}/content/fetch/`,{
  //@ts-ignore
    params:{type:platformType},
    headers:{
            "authorization": localStorage.getItem("authorization")
        }}).then((response)=>{
            setcontent(response.data.content)
        })
    },[contents,platformType])

    return contents;
}
