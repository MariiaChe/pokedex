import { useState, useEffect }from 'react';
import { useData } from  "../context/dataProvider";
import { Container, Backdrop, CircularProgress, Grid } from '@mui/material';
import Pagination from '../components/Pagination';
import PokemonsGrid from "../components/Grid";
import Toolbar from "../components/Toolbar";
import { capitalize } from "../helpers/capitalize";

const spanStyle = {
  color: "var(--red)",
}


function Home() {
  const { data, status, offset, setOffset, type, color, search} = useData();
  const [open, setOpen] = useState(false);
 

  const onNext= () => {
    setOffset(offset + 8);
  };
  const onPrevious = () => {
    setOffset(offset - 8);
  };
  useEffect(() => {
   if(status === "loading"){
      setOpen(true)
   }else{ setOpen(false)}
  },[ status ]);

  return (
    <>
    {open && 
    <Backdrop  sx={{ color: '#fff' }}  open={open}>
       <CircularProgress color="inherit" />
    </Backdrop>}
    <Container>
      <Toolbar />
      <Grid container sx={{marginBottom:"20px"}}>
      {type && !color  &&<Grid item xs={12}> <h3>Filtered by type: <span style={spanStyle}>{capitalize(type)}</span></h3></Grid>}
      {color && !type &&<Grid item xs={12}> <h3>Filtered by color: <span style={spanStyle}>{capitalize(color)}</span> </h3></Grid>}
      {color && type &&  <Grid item xs={12}><h3>Filtered by type: <span style={spanStyle}>{capitalize(type)}</span> and color: <span style={spanStyle}>{capitalize(color)}</span> </h3></Grid>}
      {search && <Grid item xs={12}><h3>Searched by: <span style={spanStyle}>{search}</span>
       </h3></Grid>}
      {status === "error" && <Grid item xs={12}><h3>Error</h3></Grid>}
      </Grid>
      {((search?.length === 0 && !type && !color && status === "success"  && data?.results?.length > 0) || (status === "success" &&  (search?.length > 0 || type || color ) && data.length > 0)) && (
        <>
          <PokemonsGrid pokemons={type || color || search.length > 0   ? data : data.results} />
          {search?.length === 0 && !type && !color && <Pagination 
          total={data.count} 
          offset={offset} 
          onNext={onNext} 
          onPrevious={onPrevious} 
          />}
        </>
      )}
     </Container>
    </>
  );
};

export default Home;
