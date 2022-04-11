import { createContext, useContext, useState, useEffect } from "react";
import { usePokemonList, useType, useColor, usePokemon } from '../queries/pokemon.queries';


const DataContext = createContext();
const { Provider } = DataContext;

function useData() {
  return useContext(DataContext);
}

const filterByColorAndType = (filteredByColor, filteredByType) => {
  let result = filteredByColor.filter(el1 => filteredByType.some(el2 => el1.name === el2.name));
  return result;
}

const getStatus = (statusColor, statusType) => {
  if(statusColor==="loading" || statusType==="loading"){
    return "loading";
  }else if(statusColor ==="error" || statusType==="error"){
    return "error";
  }else if(statusColor === "success" && statusType === "success"){
    return "success";
  }
}

const DataProvider = ({ children }) => {
  const [data, setData]= useState();
  const [status, setStatus] = useState();
  const [ offset, setOffset ] = useState(0);
  const [type, setType] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [search, setSearch]= useState("");
  const { data: defaultData, status:defaultStatus } = usePokemonList({ params: {offset}});
  const { data: pokemon, status: pokemonStatus } = usePokemon({ params: { name: search } }, { enabled: search.length > 0 ? true : false });
  const { data: filteredByType, status: statusType} = useType({ params: { type }}, { enabled: type ? true : false });
  const { data: filteredByColor, status: statusColor} = useColor({ params: { color }}, { enabled: color ? true : false });

  useEffect(() => {
    if(search.length > 0){
      setStatus(pokemonStatus);
      const objectToArray = [];
      if(pokemon){
        objectToArray.push(pokemon);
      }
      setData(objectToArray);
    }
    if(search.length === 0 && type && !color){
      setData(filteredByType);
      setStatus(statusType);
    }
    if(search.length === 0 && color && !type){
      setData(filteredByColor);
      setStatus(statusColor);
    }
    if(search.length === 0 && color && type){
      setStatus(getStatus(statusColor, statusType));
      if(statusColor === "success" && statusType === "success"){
      setData(filterByColorAndType(filteredByColor, filteredByType));
      } 
    }
    if(search.length === 0 && !color && !type){
      setStatus(defaultStatus);
      setData(defaultData);
    }
  }, [type, color, filteredByType, defaultData, defaultStatus, statusType, filteredByColor, statusColor, search, pokemonStatus, pokemon]);


  return (
    <Provider value={{  data, status, offset, setOffset, setType, type, color, setColor, search, setSearch  }}>
      {children}
    </Provider>
  );
};
export { useData };
export default DataProvider;
