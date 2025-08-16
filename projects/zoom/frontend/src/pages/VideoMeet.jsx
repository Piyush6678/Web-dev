import React, { useEffect, useState } from 'react'
import "../styles/videoComponent.css"
import { Button, TextField } from '@mui/material'
const server_url="http://localhost:8000"
const connection={}
const peerConfigConnection ={
  "iceServeers":[
   { "urls": "stun:stun.l.google.com:19302"}
  ]
}
export default function VideoMeet() {
  var socketRef=useRef()
  let socketIdRef=useRef()
  let localVideoRef=useRef()
  let [videoAvailabe,setVideoAvailable]=useState(true);
  let [audioAvailable,setAudioAvailable]=useState(true);
  let[video,setVideo]=useState();
  let[audio,setAudio]=useState();
  let[screen,setScreen]=useState();
  let [showModal,setShowModal]=useState()
  let [screenAvailabel,setScreenAvailable]=useState()
  let [messages,setMessages]=useState([])
  let [message,setMessage]=useState("")
  let [newMessages,setNewMessages]=useState(0)
let [askForUsername,setAskForUsername]=useState(true)
let [username,setUsername]=useState("")
const videoRef=useRef([])
let [videos,setVideos]=useState([])


// if(isChrome()==false){}

const getPermissions=async()=>{
try{
  const videoPermission=await navigator.mediaDevices.getuserMedia({video:true})
if(videoPermission){
  setVideoAvailable(true);
}
else{
  setVideoAvailable(false);
}
  const audioPermission=await navigator.mediaDevices.getuserMedia({audio:true})
if(videoPermission){
  setAudioAvailable(true);
}
else{
  setAudioAvailable(false);
}
if(navigator.mediaDevices.getDisplayMedia){
  setScreenAvailable(true)
}else{
    setScreenAvailable(false)
}
if(videoAvailabe || audioAvailable){
const userMediaStream=await navigator.mediaDevices.getUseMedia({vide:videoAvailabe ,audio:audioAvailable});
if(userMediaStream){
  window.localStream=userMediaStream;
  if(localVideoRef.current){
    localVideoRef.current.srcObject=userMediaStream;
  }
}
}


}catch(e){
  console.log(e);

}
}
useEffect(()=>{
getPermissions(); 
},[])

let getUserMediaSuccess=(stream)=>{

}

let getuserMedia =()=>{
  if((video && videoAvailabe) || (audio && audioAvailable) ){
    navigator.mediaDevices.getUserMedia({video:video,audio:audio}).then(()=>{}).then((stream)=>{}).catch((e)=>{console.log(e)})
  }
  else {
    try{
      let tracks = localVideoRef.current.srcObject.getTracks();
      tracks.forEach(track=>track.stop())
    }catch(e){console.log(e);}
  }
}
useEffect(()=>{
if(video!= undefined && audio!=undefined){
  getuserMedia();
}
},[audio,video])
let getMessageFromServer=(fromId,message)=>{

}

let addMessage=()=>{}

let connectToSocketServer=()=>{
  socketRef.current=io.connect(server_url,{secure:false})
  socketRef.current.on("signal",getMessageFromServer)
  socketRef.current.on("connect",()=>{
    socket.current.emit("join-call",window.location.href)
    socketRef.current=socketRef.current.id 
    socket.current.on("chat-message",addMessage)
    socket.currenct.on("user-left",(id)=>{
       setVideo((videos)=>videos.filter((video)=>video.socket!=id) )
    })
    socketRef.current.on("user-joined",(id,clients)=>{
      clients.forEach((socketListId)=>{
        connection[socketListId]=new RtcPeerConnection(peerConfigConnection)
        connections[socketListId].onicecandidate=(event)=>{
          if(event.candidate !=null){
            socketRef.current.emit("signal",socketListId, JSON.stringify({"ice":event.candidate}))
          }
        }
        connections[socketListId].onaddstream=(event)=>{
       let videoExists=videoRef.current.find(video=>video.socketId == socketListId)
        if(videoExists){
          setVideo(video=>{
            const updateVideos=video.map(video=>video.socketId==socketListId? {...video,stream:event.stream}:video)
        
        videoRef.current=updatedVideos;
        return updatedvideos;
          })

        }
        else{
let newVideo={
  socketId:socketListId,
  stream:event.stream,
  autoplay:true,
  playsinLine:true
}

setVideos(videos=>{
  const updatedVideos=[...videos,newVideo];
  videoRef.current=updatedVideos
  return updatedVideos
})
        }
        
          
        }

if(window.localStream !=null && window.localStream!=undefined){
  connections[socketListId].addStream(window.localStream);
}
else{
  let blackSilence
}




      })

if(id ==socketIdRef.current){
  for (let id2 in connections){
    if(id2==socketIdRef.current)continue
    try{
      
      connections[id2].addStream(window.localStream)
    }catch(e){}
    connections[id2].createOffer().then((description)=>{
      connection[id2].setLocalDescription(description).then(()=>{
        socketRef.current.emit("signal",id2,JSON.stringify({"sdp":connections[id2].setLocalDescription}))
      }).catch(e=>console.log(e))
    })
  }
}

    })
  })
}

let getMedia=()=>{
  setVideo(videoAvailabe);
  setAudio(audioAvailabe);
  
  connectToDocketServer();
}

let connect=()=>{
  setAskForUsername(false);
  getMedia();
}
return (<div>
     {askForUsername== true? <div>
      <h2>Enter into lobby </h2>
      <TextField id="outlined-basic" labels="Username" value={username} onClick={e=>setUsername(e.target.value)} variant="outlined"/>
 <Button onClick={connect}  variant="contained"> Connect</Button>

<div>
<video ref={localVideoRef} autoplay muted ></video>


</div>
     </div> :<></>}
    </div>
  )
}
