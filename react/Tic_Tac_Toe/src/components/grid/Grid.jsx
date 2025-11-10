import React, { useState } from 'react'
import Card from '../Card/Card'
import "./grid.css"
import isWiiner from '../Helper,/Helper'
const Grid = ({noOfCards}) => {
  cost [board,setBoard]=useState(Array(noOfCards).fill(""))
  const [turn,setTurn]=useState(true) // true=>O
  const[winner ,setIsWinner]=useState(null)
  function Play(idx){
    if(turn){
        board[idx]="O"
    }else{
           board[idx]="X"
    }
const winner=isWiiner(board,(turn)?"O":"X")
if(winner){
    setIsWinner(winner)
}
    setBoard([...board])
    setTurn(!turn)
}  
  return (
    <>
    <div className='grid-wrapper' >
    {
        winner && (
            <>
                <h1 className='turnHighlight' >
                    winner is {winner}

                </h1>
                    <button className='Reset' >reset</button>
                </>

        )
    }



        <h1 className="turnHighlight"> 
    Currnt Turn {(turn)?"O":"X"}


        </h1>

    <div className="grid">
{board.map((el,idx)=><Card onPlay={Play} Player={el} index={idx} key={idx}/>)}

    </div>
    </div>
    
    </>
  )
}

export default Grid
