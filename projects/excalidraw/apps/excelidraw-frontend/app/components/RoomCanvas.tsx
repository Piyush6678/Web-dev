"use client"
import { useEffect, useRef, useState } from "react";
import initDraw from "../draw";
import { WS_URL } from "@/config";
import Canvas from "./Canvas";
import { json } from "stream/consumers";

export default function RoomCanvas( {roomId}:{roomId:string} ){

const [socket,setSocket]=useState <WebSocket |null> (null)
 
useEffect(()=>{
const ws=new WebSocket(WS_URL)
ws.onopen=()=>{
setSocket(ws)

ws.send(JSON.stringify({
    type:"join_room",
    roomId

}))

}

},[])

   
if(!socket){
    return <div>
        Conneting to the server
    </div>
}

return <Canvas roomId={roomId} socket={socket} />


}