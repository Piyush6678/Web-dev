import React from 'react'
import Search from '../Search/Search'
import "./Pokedex.css"
import PokemonList from '../PokemonList/PokemonList'
import PokemonDetails from '../PokemonDetails/PokemonDetails'
const Pokedex = () => {
const [searchTerm,setsearchTerm]=useState("")

  return (
    <div className='PokedexWrapper' >
        
      <Search updateSearchterm={setsearchTerm} />
{ (!searchTerm) ?    <PokemonList/>: <PokemonDetails key={searchTerm} pokemonName={searchTerm}/> }
    </div>
  )
}

export default Pokedex
