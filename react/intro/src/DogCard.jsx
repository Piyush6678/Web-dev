import React from 'react'

export const Image=()=>{
    return <img src='https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg'/>
}

const DogCard = () => {
  return (
    <div>
    <h1>Dog Component</h1>  
    <Image/>
    
    </div>
  )
}

export default DogCard
