import React from 'react'
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa"
const Icon = ({name}) => {
if(name=="Circle"){
    return <FaRegCircle/>
}else if(name=="Cross"){
    return <FaTimes/>
    
}else{
    return <FaPen/>
}
  
}

export default Icon
