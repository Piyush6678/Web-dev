
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import "./App.css"

import CustomRoutes from "./routes/customRoutes"
function App() {
 
  return (
<div className="outerPokedex" >
    <Link to={"/"} >
<h1 id="pokedexheading"> pokedex </h1>
    </Link>
<CustomRoutes/>
</div>

    
    
)
}

export default App
