import React, { useEffect, useState } from 'react'
import "./Pokemondetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import usePokemonList from '../../hooks/usePokemonList'
import usePokemonDetails from '../../hooks/usePokemonDetails'
const PokemonDetails = () => {

 const{id}=useParams()
 const [pokemon ]=usePokemonDetails(id)
  return (
    <div className='pokemonDetailswrapper' >
       <div className='pokemonDetailsName'  >      
         {pokemon.name}        </div>
       <div className='pokemonDetailsImage'  >        
         <img src={pokemon.image} alt={pokemon.name} />        </div>
       <div className='pokemonDetailsweight'  >          
         weight:{pokemon.weight}        </div>
       <div className='pokemonDetailsHeight'  >         
         height:{pokemon.height}    </div>
       <div className='pokemonDetailsTypes'  >  
{ pokemon.types &&   pokemon.types.map((t)=><div key={t.name} > {t} </div>)}
        </div>

          {
                pokemon.types && pokemon.similarPokemons && 
                <div>
                    more {pokemon.types[0]} type pokemons

                    <ul>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.id}>{p.pokemon.name}</li>)}

                    </ul>
                </div>
            }


    </div>
  )
}

export default PokemonDetails
