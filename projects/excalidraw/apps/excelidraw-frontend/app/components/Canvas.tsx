import { useEffect, useRef, useState } from "react";
import initDraw from "../draw";
import { IconButton } from "./icons";
import {Circle, Pencil, RectangleHorizontalIcon} from "lucide-react"

type shape= "circle"| "rect"|"pencil"


 export default function Canvas({roomId,socket}:{roomId:string,socket:WebSocket}){
      const canvasRef =useRef<HTMLCanvasElement>(null)




    const [selectedTool,setSelectedTool]=useState <shape>  ("circle")
// @ts-ignore
    window.selectedTool=selectedTool

     useEffect(()=>{
        if (canvasRef.current){
                const canvas=canvasRef.current;
          
            initDraw(canvas,roomId,socket)
        }
       
    },[canvasRef])
   return ( <div  className="overflow-hidden h-screen" > 
    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} ></canvas> 
<TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    
    </div>)
 }


 function TopBar({selectedTool,setSelectedTool }:{
    selectedTool:shape;
    setSelectedTool:(s:shape)=>void
 }
){
    return <div  className="fixed flex gap-1 top-10 left-10" >
    <IconButton activated={selectedTool=="pencil"?true:false} icon={<Pencil/>} onClick={()=>{
        setSelectedTool("pencil")
    }} />
    <IconButton activated={selectedTool=="rect"?true:false}  icon={<RectangleHorizontalIcon/>} onClick={()=>{
  setSelectedTool("rect")
    }} />
    <IconButton activated={selectedTool=="circle"?true:false} icon={<Circle/>} onClick={()=>{
  setSelectedTool("circle")
    }} />
    
     </div>
 } 