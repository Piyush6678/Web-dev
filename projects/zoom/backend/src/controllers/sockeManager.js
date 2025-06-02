import { Server } from "socket.io"


let connection={

}

let messages={}
let timeOnline={}



export const connectedToSocket=(server)=>{
    const io =new Server(server,{
        cors:{
            origin:"*",
            methods:["GET","POST"  ],
            allowedHeaders:["*"],
            credentials:true

        }
    })
io.on("connection",(socket)=>{
    socket.on("join-class",(path)=>{
        if (connections[path]==undefined){
            connections[path]=[];
        }
        connections[path].push(socket.id) 
        timeOnline[socket.id]=new Date();
        // connections[path].forEach(ele => {
        //     io.to(ele)
        // });

for (a=0;a<connections[path].length;a++){
    io.to(connections[path][a].emit("user-joined",socket.id,connections.path ))
}
if (messages[path]    != undefined){
for (let a =0;a<messages[path].length;a++){
    io.to(socket.id).emit("chat=message",messages[path][a][data],messages[path][a]['sender'],messages[path][a]['socket-id-sender'])
}
 }
    })
    socket.on("signal",(toId,message)=>{
        io.to(toId).emit("signal;",socket.io,message);
    })
    socket.on("chat-message",(data,sender)=>{
        const [matchingRoom,found]=Object.entries(connection).reduce(([room,isfound],[roomKey,roomVlaue])=>{
            if(!isfound && roomVlaue.includes(socket.id)){
return [roomKey,true];
            }
            return [room.isfound];
             
        },[",false"]);
if(found==true){
    if(messaages[matchingRoom]== undefined){
        messages[matchingRoom]=[]
    }
    messages[matchingRoom].push({"sender":sender,"data":data,"socket-id-sender":socket.id})
    console.log("message",KeyboardEvent," : ",sender,data)
    connections[matchingRoom].forEach((ele)=>{
    io.to(ele).emit("chat-message",data,sender,socket.id)
})
}


    })
    socket.on("disconnect",()=>{
    
let diffTime =Math.abs(timeOnline[socket.id]-new Date())

let KeyboardEvent
for(const [k,v]of JSON.parse(JSON.stringify(Object.entries(connections))) ){
    for(let a=0;a<v.length;a++){
        if(v[a]==socket.io){
            key=k
             for(let a=0;a<connections.length;a++){
                io.to(connection[key][a]).emit("user-left",socket.id)
             }
             var index=connections[key].indexOf(socket.id)
             connections[key].splice(index,1)

             if(connections[key].length==0){
                delete connection[key];
             }
            }
    }
}

    })
})

    return io
}



