import { useColorsList } from "../queries/pokemon.queries";
import { useData } from "../context/dataProvider";
import { capitalize } from "../helpers/capitalize";
import Select from "react-select";
import { selectCustomStyles } from "./CustomStyles";


const findDefaultValue = (options, color) => {
  if (color && color.length > 0) {
    return options.find((item) => item.value === color);
  }else{
    return null;
  }
}


function SelectColor() {
  const { data, status } = useColorsList();
  const { setColor, setSearch, color } = useData();

  const handleOnChange = (res) =>{
    if(res?.value !== ""){
      setSearch("");
    }
    if(!res){
      setColor("");
    }else{
      setColor(res.value);
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
        placeholder="Select a color"
        isClearable
        value={findDefaultValue(options, color)}
      />
  )};

export default SelectColor;
