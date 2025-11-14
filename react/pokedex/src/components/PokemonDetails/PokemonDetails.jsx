import React, { useEffect, useState } from 'react'
import "./Pokemondetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
const PokemonDetails = () => {
const{id}=useParams()
const [pokemon,setPokemon]=useState({})
 async function downloadPokemon(){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

setPokemon({
name:response.data.name,
image:response.data.sprites.other.dream_world.front_default,
weight:response.data.weight,
height:response.data.height,
types:response.data.types.map((t)=>t.type.name)
})

 } 

 useEffect(()=>{
downloadPokemon()
 },[])

  return (
    <div className='pokemonDetailswrapper' >
       <div className='pokemonDetailsName'  >  
        
         {pokemon.name}
        </div>
       <div className='pokemonDetailsImage'  >  
        
         <img src={pokemon.image} alt={pokemon.name} />
        </div>
       <div className='pokemonDetailsweight'  >  
        
         weight:{pokemon.weight}
        </div>
       <div className='pokemonDetailsHeight'  >  
        
         height:{pokemon.height}
        </div>
       <div className='pokemonDetailsTypes'  >  
{ pokemon.types &&   pokemon.types.map((t)=><div key={t.name} > {t} </div>)}
        </div>
    </div>
  )
}

export default PokemonDetails
