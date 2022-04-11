import axios from 'axios';

const serializer = (arr) => arr.map(({ pokemon : { name, url }}) =>({ name, url }));

export const getPokemonList = ({ params: {  offset = 0} }) => axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${offset}`).then(response => response.data);

export const getPokemon = ({ params: { name } }) => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.data);


export const getAbilitiesList = ({ params: { name = "" } }) => axios.get(`https://pokeapi.co/api/v2/ability/${name}`).then(response => response.data);


export const getTypesList= () => axios.get(`https://pokeapi.co/api/v2/type/`).then(response => response.data);

export const getType = ({ params: { type = "" } }) => axios.get(`https://pokeapi.co/api/v2/type/${type}`).then(response => serializer(response.data.pokemon));

export const getColorsList = () => axios.get(`https://pokeapi.co/api/v2/pokemon-color/`).then(response => response.data);

export const getColor = ({ params: { color = "" }  }) => axios.get(`https://pokeapi.co/api/v2/pokemon-color/${color}`).then((response) => {
    const  responseToMap = response.data.pokemon_species;
    const result = responseToMap.map(({name}) => {
       return  axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
          .then(response => response.data.varieties[0].pokemon )
    });
   return Promise.all(result).then(res => res);
});


