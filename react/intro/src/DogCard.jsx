import React from 'react'
import Nmae from './name'
// named export
export const Image=(props)=>{ 
    return <img src={props.src}/>
}
// default exports 
const DogCard = ({name}) => { // destructur props
    let title = "Dog Component"
    return (
        //   pasing jsx as prop 
        <div>
            <h1 style={{fontSize:"10px",color:"red"}}  >{title}</h1>
    <Nmae>
        <h2> {name}</h2> 
               </Nmae>   
    <Image src="https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg"/>
    
    </div>
  )
}

export default DogCard
