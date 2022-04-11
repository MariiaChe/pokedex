import { useState, useEffect }from 'react';
import { useData } from  "../context/dataProvider";
import { Container, Backdrop, CircularProgress } from '@mui/material';
import Pagination from '../components/Pagination';
import PokemonsGrid from "../components/Grid";
import Toolbar from "../components/Toolbar";
import FiltersInfo from "../components/FiltersInfo";



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
      <FiltersInfo color={color} type={type} search={search} />
    
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
