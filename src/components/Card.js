import { useNavigate } from "react-router-dom";
import { usePokemon } from '../queries/pokemon.queries'
import { CardContent,Card, CardMedia, Typography, CardActionArea, CircularProgress } from '@mui/material';
import { capitalize } from "../helpers/capitalize";
import PropTypes from 'prop-types';

function PokemonCard({ name }) {
  const { data, status } = usePokemon({ params: { name: name } });
  const navigate = useNavigate();
  return (
    <>
      <Card onClick={() => navigate(`/${name}`)} sx={{ background: "#F7F8FC",maxWidth: "250px", margin:"auto", height:"350px",display:"flex", alignItems:"center", justifyContent:"center", borderRadius: "var(--border-radius)" }}>
        {status === "loading" && <CircularProgress sx={{color:"#ffdbd0"}} />}
        {status === "error" && <div>Error</div>} 
        { status === "success" && 
        <CardActionArea sx={{height:"350px", display:"flex", flexDirection:"column"}}>
          <CardMedia
            sx={{ width:140, margin:"auto", padding:"20px" }}
            component="img"
            image={data?.sprites.other.dream_world.front_default  || data?.sprites.other.home.front_default || data?.sprites.front_default}
            alt={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
             {capitalize(data.name)}
            </Typography>
          </CardContent>
        </CardActionArea> }
      </Card> 
    </>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokemonCard;
