import React from 'react'
import Search from '../Search/Search'
import "./Pokedex.css"
const Pokedex = () => {
  return (
    <div className='PokedexWrapper' >
        <h1 id='pokedexHeading' >Pokedex</h1>
      <Search/>
    </div>
  )
}

export default Pokedex
