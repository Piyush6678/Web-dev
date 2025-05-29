import { Server } from "socket.io"

export const connectedToSocket=(server)=>{
    const io =new Server(server)
return io
}



