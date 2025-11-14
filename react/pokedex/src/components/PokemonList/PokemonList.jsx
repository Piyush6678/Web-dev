import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./pokemonList.css"
import Pokemon from '../Pokemon/Pokemon'
const PokemonList = () => {
  const [PokedexUrl,setPokedexUrl]=useState("https://pokeapi.co/api/v2/pokemon")

  const [nextUrl,setNextUrl]=useState("");
  const [prevUrl,setPrevUrl]=useState("");

const[ pokemon_list,setPokemon_list]=useState([])
const [isLoading,setIsLoading]=useState(true)
    useEffect(async()=>{
        setIsLoading(true)
const response=await axios.get(PokedexUrl)
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

setNextUrl(response.data.next)
setPrevUrl(response.data.previous)

setPokemon_list(res)
setIsLoading(false);
    },[])

    
    return (
    <div className='PokemonList'>
  
   <div className="pokemonWrapper">
       {(isLoading)?"Loading...":(
            pokemon_list.map((p)=><Pokemon key={p.id} id={p.id} name={p.name} image={p.image
            } />)



      )}
   </div>


<div className='controls' >
    <button disabled={(prevUrl==null)}  onClick= {  ()=>{
        setPokedexUrl(prevUrl)
    }    } >
    Previous
    </button>
    <button  onClick= {  ()=>{
        setPokedexUrl(nextUrl)
    }    }  disabled={(nextUrl==null)}>
   Next
    </button>
    </div>

    </div>
  )
}

export default PokemonList
