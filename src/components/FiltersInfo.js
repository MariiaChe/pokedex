import {  Grid, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { capitalize } from "../helpers/capitalize";
import { useData } from  "../context/dataProvider";

const style = {
  span:{
    color: "var(--red)",
  },
  gridContainer: {
    marginBottom:"20px", 
    display:"flex", 
    justifyContent:"space-between", 
    alignItems:"center"
  },
  button:{
    color:"var(--red)",
    border:"1px solid var(--red)",
    borderRadius:"var(--border-radius)",
    padding:"5px 12px",
  }
}


function FiltersInfo({ color, type, search }) {
  const {  setType, setColor, setSearch} = useData();
  const handleOnClick = () => {
    setSearch("");
    setType("");
    setColor("");
  }
  return (
    <Grid container sx={style.gridContainer} spacing={2}>

    {type && !color && !search  &&
      <Grid item xs={12} md={3}> 
        <h3>Filtered by type: <span style={style.span}>{capitalize(type)}</span>
        </h3>
      </Grid>}
    {color && !type &&!search && 
      <Grid item xs={12} md={3}> 
         <h3>Filtered by color: <span style={style.span}>{capitalize(color)}</span> 
         </h3>
      </Grid>}
    {color && type && !search && 
      <Grid item xs={12} md={4}>
        <h3>Filtered by type: <span style={style.span}>{capitalize(type)}</span> and color: <span style={style.span}>{capitalize(color)}</span> 
        </h3>
      </Grid>}
    {search && 
      <Grid item xs={12} md={4}>
        <h3>Searched by: <span style={style.span}>{search}</span>
        </h3>
      </Grid>}
    {(type || color|| search) && 
      <Grid item xs={12} md={3} sx={{display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
        <Button style={style.button} onClick={handleOnClick}>Clear all</Button>
      </Grid>}
    </Grid>
  )
}

FiltersInfo.propTypes = {}

export default FiltersInfo
