import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./pokemonList.css"
import Pokemon from '../Pokemon/Pokemon'
const PokemonList = () => {
 
 


const [pokemonListState,setPokemonListState]=useState({
pokedexUrl:"https://pokeapi.co/api/v2/pokemon",
nextUrl:"",
prevUrl:"",
pokemonList:[],
isLoading:true
})

    useEffect(async()=>{
        setPokemonListState((prev)=>  ({...prev,isLoading:true}))
const response=await axios.get(pokemonListState.pokedexUrl)
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
setPokemonListState(prev => ({
  ...prev,
  nextUrl: response.data.next,
  prevUrl: response.data.previous,
  pokemonList: res,
  isLoading: false
}));


    },[pokemonListState.pokedexUrl])

    
    return (
    <div className='PokemonList'>
  
   <div className="pokemonWrapper">
       {(pokemonListState.isLoading)?"Loading...":(
            pokemonListState.pokemonList.map((p)=><Pokemon key={p.id} id={p.id} name={p.name} image={p.image
            } />)



      )}
   </div>


<div className='controls' >
    <button disabled={(pokemonListState.prevUrl==null)}  onClick= {  ()=>{
        setPokemonListState((prev)=>({...prev,pokedexUrl:pokemonListState.prevUrl}))
    }    } >
    Previous
    </button>
    <button  onClick= {  ()=>{
        setPokemonListState((prev)=>({...prev,pokedexUrl:pokemonListState.nextUrl}))
    }    }  disabled={(pokemonListState.nextUrl==null)}>
   Next
    </button>
    </div>

    </div>
  )
}

export default PokemonList
