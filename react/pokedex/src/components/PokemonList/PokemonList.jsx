

import "./pokemonList.css"
import Pokemon from '../Pokemon/Pokemon'
import usePokemonList from '../../hooks/usePokemonList'
const PokemonList = () => {
 
 

const    [  pokemonListState,setPokemonListState]=usePokemonList()

    
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
