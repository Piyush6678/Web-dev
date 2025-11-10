import { useRef, useState } from "react";
import { CrossIcon } from "../icons/Crossicon";
import { Button } from "./button";
import { Input } from "./InputBox";
import { backend_url } from "../config";
import axios from "axios"
enum contentType {
  Youtube="youtube",
  Twitter="twitter",
  Instagram="instagram"
}
export function AddContentModal({ open, onClose }:{
  open: boolean;
  onClose: () => void;
}) {
  const titleref=useRef<HTMLInputElement>()
  const linkref=useRef<HTMLInputElement>()
  const [type,setType]=useState(contentType.Youtube)
async function addcontent(){
const title=titleref.current?.value
const link=linkref.current?.value
await axios.post(`${backend_url}/content/create`,{
  type,
  title,
  link
  },{
    headers:{
      "authorization":localStorage.getItem("authorization")
    }
  })
  onClose();
 }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen 
      bg-[rgba(108,117,125,0.6)] fixed top-0 left-0 flex justify-center items-center ">
          <div className="bg-white text  p-3 rounded-md ">
            <div onClick={onClose} className=" cursor-pointer flex justify-end ">
              <CrossIcon />
            </div>
            <div>
              <Input reference={titleref} PlaceHolder="TITLE" />

              <Input reference={linkref} PlaceHolder="Link" />
            </div>
          <div  >
<h1>Type</h1>
<div className="flex gap-2 p-4">
  <Button text="Youtube" variant={type==contentType.Youtube?"primary":"secondary"} onClick={()=>{
    setType(contentType.Youtube)
  }} />
  <Button text="Twitter" variant={type==contentType.Twitter?"primary":"secondary"} onClick={()=>{
    setType(contentType.Twitter)
  }} />
  <Button text="Instagram" variant={type==contentType.Instagram?"primary":"secondary"} onClick={()=>{
    setType(contentType.Instagram)
  }} />
</div>
          </div>



            <div className="flex justify-center py-2">    <Button variant="primary" onClick={addcontent} text="Submit" /></div>
        
          </div>
        </div>
      )}
    </div>
  );
}
