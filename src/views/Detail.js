import { useParams } from "react-router-dom";
import { usePokemon } from '../queries/pokemon.queries';
import { Container, CircularProgress,Grid,Box, List, ListItem, ListItemText, Button} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import { capitalize} from "../helpers/capitalize";


const boxStyles = {
  minWidth: "280px",
  maxWidth: "60vw",
  margin: "auto",
  display:"flex",
  alignItems:"center",
}
const imgWrapper = {
  minWidth: "250px",
  maxWidth: "300px",
  margin:"auto",
}
const progressWrapper = {
  minWidth: "250px",
  maxWidth: "300px",
  margin:"auto",
  minHeight:"500px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}

const span = {
  borderColor:"#ff5000", 
  display:"inline-flex" , 
  justifyContent:"center", 
  alignItems:"center", 
  color:"#ff5000", 
  width:"120px", 
  margin:"8px", 
  height:"30px", 
  border:"1px solid var(--red)", 
  borderRadius:"var(--border-radius)"
}

const getTypes = (types = []) => {
  const array = types.map((item) => (item.type.name))
  return (
    <span>
      {array.map((type) => (
        <span key={type} style={span}>
          {type}
      </span>
      ))}
    </span>
  )

}
const getAbilities = (abilities = []) => {
  const array = abilities.map((item) =>(item.ability.name));
  return (
    <span>
      {array.map((ability) => (
        <span key={ability} style={span}>{ability}</span>
      ))}
    </span>
  );
};

function Detail() {
  let params = useParams();
  const { data, status } = usePokemon({ params: { name: params.name } });
  const navigate = useNavigate();
  return (
    <Container>
      <Box sx={{ 
              maxWidth: "60vw",
              margin: "auto",
              minWidth: "280px", 
              display:"flex",
              alignItems:"center",
              marginBottom:"8px"}}>
      <Button 
      onClick={() => navigate(-1)}
      sx={{borderRadius:"var(--border-radius)", borderColor:"var(--red)", color:"var(--red)"}}
      variant="outlined" startIcon={<ArrowBackIosNewIcon/>} 
      >
        Go back
      </Button>
      </Box>   

      <Box 
        sx={boxStyles}>
          {status ==="error" && <div>error</div>}
          {status === "loading" && <div style={progressWrapper} ><CircularProgress sx={{color:"#ffdbd0"}} /></div>}
          { status ==="success" && 
          <Grid container sx={{marginTop:"2rem", borderRadius: "var(--border-radius)",  backgroundColor: "#F7F8FC",padding:"20px", boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}}>
            <Grid 
              item 
              xs={12} 
              sm={12} 
              md={7}
              sx={{  display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div style={imgWrapper}>
             <img style={{width:"100%"}} src={data?.sprites.other.dream_world.front_default  || data?.sprites.other.home.front_default || data?.sprites.front_default} alt={data?.name}/>
            </div>
            </Grid>
            <Grid 
              sx={{padding:"20px"}} 
              item 
              xs={12} 
              sm={12} 
              md={5}
            >
             <List>
               <ListItem>
                 <ListItemText primary="Name:" secondary={capitalize(data?.name)} />
               </ListItem>
               <ListItem>
                 <ListItemText primary="Height:" secondary={`${data?.height}cm`} />
               </ListItem>
               <ListItem>
                 <ListItemText primary="Weight:" secondary={`${data?.weight}g`} />       
               </ListItem>
               <ListItem>
                 <ListItemText primary="Abilities:" secondary={getAbilities(data?.abilities)} />
               </ListItem>
               <ListItem>
                 <ListItemText primary="Types:" secondary={getTypes(data?.types)} />
               </ListItem>
             </List>
            </Grid>  
          </Grid> }
      </Box> 
    </Container>
  );
};

export default Detail;
