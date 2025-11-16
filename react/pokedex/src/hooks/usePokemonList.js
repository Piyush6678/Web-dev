import axios from 'axios'
import React, { useEffect, useState } from 'react'

const usePokemonList = () => {



const [pokemonListState,setPokemonListState]=useState({
pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
nextUrl:"",
prevUrl:"",
pokemonList:[],
isLoading:true
})

async function downloadPokemon(){
       setPokemonListState((prev)=>  ({...prev,isLoading:true}))
const response=await axios.get(pokemonListState.pokedexUrl)
const pokemonResults=response.data.results;

setPokemonListState(prev=>({
    ...prev,
    nextUrl:response.data.next,
    prevUrl:response.data.previous,
}))



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
setPokemonListState(prev => ({
  ...prev,

  pokemonList: res,
  isLoading: false
}));


}

useEffect(()=>{
downloadPokemon()
},[pokemonListState.pokedexUrl])
  
return[     pokemonListState,setPokemonListState] 




}

export default usePokemonList
