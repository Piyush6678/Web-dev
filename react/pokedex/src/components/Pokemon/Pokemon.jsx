import React from 'react'
import "./Pokemon.css"
const Pokemon = () => {
  return (
    <div className='pokemon' >
      <div className='pokemonName' >{name}</div>
      <div> <img className='pokemonImage' src={image} />  </div>
    </div>
  )
}

export default Pokemon
