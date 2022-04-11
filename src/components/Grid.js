import Grid from '@mui/material/Grid';
import PokemonCard from "./Card";
import PropTypes from 'prop-types';

function PokemonsGrid({ pokemons }) {
  return (
    <Grid container spacing={4}>
      {pokemons.map(pokemon => (
        <Grid key={pokemon.name} item xs={12} sm={4} md={3}>
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        </Grid>
         ))}
    </Grid>
  )
};

PokemonsGrid.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokemonsGrid;
