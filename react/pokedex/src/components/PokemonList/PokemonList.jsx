import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./pokemonList.css"
import Pokemon from '../Pokemon/Pokemon'
const PokemonList = () => {
  const POKEDEX_URL="https://pokeapi.co/api/v2/pokemon"
const[ pokemon_list,setPokemon_list]=useState([])
const [isLoading,setIsLoading]=useState(true)
    useEffect(async()=>{
const response=await axios.get(POKEDEX_URL)
const pokemonResults=response.data.results;
const pokemonResultPromise=pokemonResults.map(async(pokemon)=> axios.get(pokemon.url))
const pokemonData=await axios.all(pokemonResultPromise)
const res=(pokemonData.map((pokeData)=>{
    const pokemon=pokeData.data
    return   { name:pokemon.name,
        image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny ,
        types:pokemon.types,
        id:pokemon.id
     }
}))
setPokemon_list(res)
setIsLoading(false);
    },[])
    return (
    <div className='PokemonList'>
     <div> Pokemon list</div>
      {(isLoading)?"Loading...":(
            pokemon_list.map((p)=><Pokemon key={p.id} name={p.name} image={p.image
            } />)



      )}
    </div>
  )
}

export default PokemonList
