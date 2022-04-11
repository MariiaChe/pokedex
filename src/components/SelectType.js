import { useTypesList } from '../queries/pokemon.queries';
import { useData } from '../context/dataProvider';
import { capitalize} from "../helpers/capitalize";
import Select from "react-select";
import { selectCustomStyles } from "./CustomStyles";


const findDefaultValue = (options, type) => {
  if (type && type.length > 0) {
    return options.find((item) => item.value === type);
  }else{
    return null;
  }
}


function SelectType() {
  const { setType, setSearch, type } = useData();
  const { data } = useTypesList();

  const handleOnChange = (res) => {
    if(res?.value !== ""){
      setSearch("");
    } 
    if(!res){
      setType("");
    }else{
      setType(res.value);
    }
  }
  

  const options = data?.results.map((item) => {
    return {
      value: item.name,
      label: capitalize(item.name),
    };
  })
  return (
    <Select
        styles={selectCustomStyles}
        options={options}
        onChange={handleOnChange}
        placeholder="Select a type"
        isClearable
        value={findDefaultValue(options, type)}
      />
  )
}

export default SelectType;
