// actions types 
import {POKEMON_START, POKEMON_NEXT, POKEMON_PREVIOUS} from "./actionsType"

// ----------------------------------------------------------------------
export const pokemonStart = (api) => ({type: POKEMON_START, api})
export const pokemonNext = (nextPage) => ({type: POKEMON_NEXT, nextPage})
export const pokemonPrevious = (previousPage) => ({type: POKEMON_PREVIOUS, previousPage})
