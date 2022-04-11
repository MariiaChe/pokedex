import { CustomSelect, StyledOption } from "./CustomSelect";
import { useTypesList } from '../queries/pokemon.queries';
import { useData } from '../context/dataProvider';
import { capitalize} from "../helpers/capitalize";


function SelectType() {
  const { setType, setSearch, type } = useData();
  const { data, status } = useTypesList();

  const handleOnChange = (res) => {
    if(res !== ""){
      setSearch("");
    } 
    setType(res);
  }

  return (
    <CustomSelect onChange={handleOnChange} value={type || ""}>
    {(status === "loading" ||status ===  "error" || status === "success") && <StyledOption value={""}>All types</StyledOption>}

    {status ==="success" && data.results.map(({ name }) => (
    <StyledOption key={name} value={name}>{capitalize(name)}</StyledOption>
    ))}

  </CustomSelect>
  )
}

export default SelectType;
