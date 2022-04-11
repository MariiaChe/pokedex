import Home from "./Home";
import  PokemonDetail from "./Detail"
import { Route, Routes } from "react-router-dom";

const CoctailsApp = () =>(
  <Routes>
    <Route path='/pokedex' element={<Home/>} />
    <Route path='/:name' element={<PokemonDetail/>} />
  </Routes>
  
)

export default CoctailsApp;