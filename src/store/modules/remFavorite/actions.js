// action type
import { REM_ADD_FAV, REM_REMOVE_FAV } from "./actionsType";

//--------------------------------------------------------
export const remAddFavorite = (newFavListAdd) => ({
  type: REM_ADD_FAV,
  newFavListAdd,
});

export const remRemoveFavorite = (newFavListRemove) => ({
  type: REM_REMOVE_FAV,
  newFavListRemove,
});
