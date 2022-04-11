import SelectType from "./SelectType";
import { Grid } from "@mui/material";
import Search from "./Search";
import SelectColor from "./SelectColor";


function Toolbar() {

  return (
    <Grid container spacing={2}>
      <Grid sx={{display: "flex", justifyContent:"flex-start", marginBottom:"20px", alignItems:"center"}} item xs={12} sm={12} md={4}>
        <Search />
      </Grid>
      <Grid sx={{display: "flex", justifyContent:"flex-start", marginBottom:"20px", alignItems:"center"}} item xs={12} sm={12} md={4}>
        <SelectColor />
      </Grid>
      <Grid sx={{display: "flex", justifyContent:"flex-start", marginBottom:"20px", alignItems:"center"}} item xs={12} sm={12} md={4}>
        <SelectType />
      </Grid>
    </Grid>
  );
};

export default Toolbar;
