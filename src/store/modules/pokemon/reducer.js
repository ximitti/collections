// actions types
import { POKEMON_START, POKEMON_NEXT, POKEMON_PREVIOUS } from "./actionsType";

//-------------------------------------------------------------------------
const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMON_START:
      const { api } = action;
      return api;
    case POKEMON_NEXT:
      const { nextPage } = action;
      return nextPage;
    case POKEMON_PREVIOUS:
      const { previousPage } = action;
      return previousPage;
    default:
      return state;
  }
};

export default pokemonReducer;
