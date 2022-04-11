import { getPokemonList, getPokemon, getAbilitiesList, getTypesList, getType, getColorsList, getColor } from "../services/pokemon.services";
import { useQuery } from "react-query";


export const QUERY_KEYS = {
  POKEMON_LIST: "pokemon-list",
  POKEMON: "pokemon",
  ABILITIES: "abilities",
  TYPES: "types",
  TYPE: "type",
  COLORS: "colors",
  COLOR: "color",
};

export const usePokemonList = ({ params }) => useQuery(
  [QUERY_KEYS.POKEMON_LIST,  { params }],
  () => getPokemonList({params}),
);

export const usePokemon = ({ params }) => useQuery(
  [QUERY_KEYS.POKEMON,  { params }],
  () => getPokemon({ params }),
);

export const useAbilitiesList = ({ params }) => useQuery([QUERY_KEYS.ABILITIES,  { params }], () => getAbilitiesList({ params }));

export const useTypesList = () => useQuery([QUERY_KEYS.TYPES], () => getTypesList());

export const useType = ({ params }, { enabled }) => useQuery([QUERY_KEYS.TYPES,  { params }], () => getType({ params }), { enabled });

export const useColorsList = () => useQuery([QUERY_KEYS.COLORS], () => getColorsList());

export const useColor = ({ params }, { enabled }) => useQuery([QUERY_KEYS.COLORS,  { params }], () => getColor({ params }), { enabled });