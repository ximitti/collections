// action type
import { POKEMON_ADD_FAV, POKEMON_REMOVE_FAV } from "./actionsType";

//--------------------------------------------------------
export const pokemonAddFavorite = (newFavListAdd) => ({
  type: POKEMON_ADD_FAV,
  newFavListAdd,
});

export const pokemonRemoveFavorite = (newFavListRemove) => ({
  type: POKEMON_REMOVE_FAV,
  newFavListRemove,
});
