// action type
import { POKEMON_ADD_FAV, POKEMON_REMOVE_FAV } from "./actionsType";
//--------------------------------------------------------
const pokemonFavoriteReducer = (
  state = JSON.parse(localStorage.getItem("pokemonFavorite")) || [],
  action
) => {
  switch (action.type) {
    case POKEMON_ADD_FAV:
      const { newFavListAdd } = action;

      return newFavListAdd;

    case POKEMON_REMOVE_FAV:
      const { newFavListRemove } = action;

      return newFavListRemove;

    default:
      return state;
  }
};

export default pokemonFavoriteReducer;
