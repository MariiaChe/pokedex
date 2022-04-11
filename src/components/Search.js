
import { useEffect, useState } from "react";
import { Paper, InputBase, IconButton }from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useData } from "../context/dataProvider";
import "./style.css";


function Search() {
  const { setSearch, search, setColor, setType, color, type } = useData();
  const [value, setValue] = useState(search);
  

  useEffect(() => {
    if(color || type){
      setValue("")
    }
  }, [color, type]);

  const handleOnSearch = () => {
    if(value.length > 0){
      setSearch(value);
      setColor("");
      setType("");
    }
    if(value.length === 0){
      setSearch("");
    };
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Paper
      className="search-container"
      component="form"
     >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search by full name or id"
        inputProps={{ 'aria-label': 'search by full name or id' }}
        onChange={handleOnChange}
        value={value}
      />
      <IconButton onClick={handleOnSearch} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
  </Paper>
  );
};

export default Search;
