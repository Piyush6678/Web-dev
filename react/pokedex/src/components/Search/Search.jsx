import React from 'react'
import "./Search.css"
const Search = ({updateSearchTerm}) => {
const debounceCallback=useDebounce((e)=>updateSearchTerm(e.target.value))
  const [searchterm,setsearchTerm]=useState("");
  return (
    <div className='searchWrapper' >
      <input  onChange={debounceCallback}  id='pokemonSearch' type="text" 
      placeholder='Pokemon Name' />
      
    </div>
  )
}

export default Search
