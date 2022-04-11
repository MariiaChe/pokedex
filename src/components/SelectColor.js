import { useColorsList } from "../queries/pokemon.queries";
import { useData } from "../context/dataProvider";
import { CustomSelect, StyledOption } from "./CustomSelect";
import { capitalize } from "../helpers/capitalize";


function SelectColor() {
  const { data, status } = useColorsList();
  const { setColor, setSearch, color } = useData();

  const handleOnChange = (res) =>{
    if(res !== ""){
      setSearch("");
    }
    setColor(res);
  }
    return (
    <CustomSelect onChange={ handleOnChange} value={color || ""}>
      {(status === "loading" ||status ===  "error" || status === "success") && <StyledOption value={""}>All colors</StyledOption>}
      {status ==="success" && data.results.map(({ name }) => (
      <StyledOption key={name} value={name}>{capitalize(name)}</StyledOption>
      ))}
    </CustomSelect>
  )};

export default SelectColor;
