import axios from 'axios'
import React, { useEffect } from 'react'
import "./pokemonList.css"
const PokemonList = () => {
  
    useEffect(async()=>{


const response=await axios.get("https://pokeapi.co/api/v2/pokemon")


    },[])
    return (
    <div className='PokemonList'>
      Pokemon list
    </div>
  )
}

export default PokemonList
