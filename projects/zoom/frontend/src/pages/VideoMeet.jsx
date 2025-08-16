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
  try{
window.localStream.getTracks().forEach(track=>track.stop())
  }catch(e){
    console.log(e)
  }

window.localStream=stream;
localVideoRef.current.srcObject=stream
for(let id in connections){
  if(id==socketIdRef.current)continue
  connection[id].addStream(window.localStream)
connections[id].createOffer().then((description)=>{
  connection[id].setLocalDescription(description).then(()=>{
    socketIdRef.current.emit("signal",id,JSON.stringify({"sdp":connections[id].localDescription}))
  }).catch(e=>console.log(e))
})
}
stream.getTracks().forEach(track=>track.onended=()=>{
  setVideo(false) 
  setAudio(false)
  try{
    let tracks=localVideoRef.current.srcObject.getTracks()
    tracks.forEach(track=>track.stop)
  }catch(e){
    console.log(e)
  }

    let blackSilence=(...args)=>new MediaStream([black(...args),silence()])
  window.localStream=blackSilence()
  localVideoRef.current.srcObject=window.localStream

  for(let id in connections){
    connection[id].addStream(window.localStream)
    connection[id].createOffer().then((description)=>{
      connections[id].setLocalDescription(description).then(()=>{
socketRef.current.emit("signal",id,JSON.stringify({"sdp":connections[id].localDescription}))
      }).catch(e=>console.log(e))
    }).catch(e=>console.log(e))
    

  }




})

}
let silence = ()=>{
  let ctx =new AudioContext()
  let oscillator=ctx.createOscillator()
  let dst =oscillator.connect(ctx.createMediaStreamDestination())
  oscillator.start()
  ctx.resume()
  return Object.assign(dst.stream.getAudioTracks()[0],{enabled:false})
}
let black=({width=640, height=480}={})=>{
let canvas= Object.assign(document.createElement("canvas"),{width,height})

canvas.getContext("2d").fillRect(0,0,width,height)
let stream =canvas.captureStream();
return Object.assign(stream.getVideoTracks()[0],{enabled:false})
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
let gotMessageFromServer=(fromId,message)=>{
var signal=JSON.parse(message)

if(fromId !=socketIdRef.current){
  if(signal.sdp){
    connections[fromId].setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(()=>{
      if(signal.sdp.type =="offer"){
        connections[fromId].createAnswer().then((description)=>{
          connections[fromId].setLocalDescription(description).then(()=>{
            socketRef.current.emit("signal",fromId,JSON.stringify({"sdp":connections[fromId].localDescription}))
          }).catch(e=>console.log(e))
        }) .catch(e=>console.log(e))
      }
    }) .catch(e=>console.log(e))
  }
  if(signal.ice){
    connections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice)).catch(e=>console.log(e))
  }

}




















}

let addMessage=()=>{}

let connectToSocketServer=()=>{
  socketRef.current=io.connect(server_url,{secure:false})
  socketRef.current.on("signal",o)
  socketRef.current.on("connect",()=>{
    socket.current.emit("join-call",window.location.href)
    socketRef.current=socketRef.current.id 
    socket.current.on("chat-message",addMessage)
    socket.current.on("user-left",(id)=>{
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
  let blackSilence=(...args)=>new MediaStream([black(...args),silence()])
  window.localStream=blackSilence()
  connections[socketListId].addStream(window.loacalStream)
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
     </div> :<div>
     
     <video src={localVideoRef}  autoPlay muted ></video>
   {video.map((video)=>(
    <div key={video.socketId} >
      <video
       data-socket={video.socketId}
    ref={ref=>{
      if(ref && value.stram){
ref.srcObject=video.stream;
      }
    }} autoPlay
      >

      </video>
    </div>
   ) 
    
   )}
     </div>}
    </div>
  )
}
