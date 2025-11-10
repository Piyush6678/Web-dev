import React, { useState } from 'react'
import Card from '../Card/Card'
import "./grid.css"
import isWinner from '../Helper,/Helper'
const Grid = ({noOfCards}) => {
  const [board,setBoard]=useState(Array(noOfCards).fill(""))
  const [turn,setTurn]=useState(true) // true=>O
  const[winner ,setIsWinner]=useState(null)
  function play(idx){
    if(turn){
        board[idx]="O"
    }else{
           board[idx]="X"
    }
const winner=isWinner(board,(turn)?"O":"X")
if(winner){
    setIsWinner(winner)
}
    setBoard([...board])
    setTurn(!turn)
}  

function resetgame(){
   setBoard(Array(noOfCards).fill(""))
   setTurn(true)
   setIsWinner(null)
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
                    <button className='Reset' onClick={resetgame}>reset</button>
                </>

        )
    }



        <h1 className="turnHighlight"> 
    Currnt Turn {(turn)?"O":"X"}


        </h1>

    <div className="grid">
{board.map((el,idx)=><Card onPlay={play} player={el} index={idx} key={idx}/>)}

    </div>
    </div>
    
    </>
  )
}

export default Grid
