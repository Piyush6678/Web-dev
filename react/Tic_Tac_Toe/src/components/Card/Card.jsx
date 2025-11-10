import React from 'react'
import Icon from '../Icon/Icon'
import "./card.css"
const Card = ({player="",onPlay,index , gameEnd}) => {
    let icon=<Icon/>
    if(player=="X"){
        icon=<Icon name={"Cross"}/>
    }
  else  if(player=="O"){
        icon=<Icon name={"Circle"}/>
    }
  return (
    <div className='card' onClick ={()=>!gameEnd && player=="" && onPlay(index)}>
      {icon}
    </div>
  )
}

export default Card
