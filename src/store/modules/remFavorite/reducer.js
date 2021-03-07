// action type
import { REM_ADD_FAV, REM_REMOVE_FAV } from "./actionsType";
//--------------------------------------------------------
const remFavoriteReducer = (
  state = JSON.parse(localStorage.getItem("remFavorite")) || [],
  action
) => {
  switch (action.type) {
    case REM_ADD_FAV:
      const { newFavListAdd } = action;

      return newFavListAdd;

    case REM_REMOVE_FAV:
      const { newFavListRemove } = action;

      return newFavListRemove;

    default:
      return state;
  }
};

export default remFavoriteReducer;
