// actions
import { pokemonAddFavorite, pokemonRemoveFavorite } from "./actions";

//-------------------------------------------------------
export const pokemonAddFavThunk = (char) => async (dispatch, getStore) => {
  const { pokemonFavorite } = await getStore();
  let newList = [];

  if (pokemonFavorite.length) {
    newList = [...pokemonFavorite, char];
  } else {
    newList.push(char);
  }

  localStorage.setItem("pokemonFavorite", JSON.stringify(newList));
  dispatch(pokemonAddFavorite(newList));
};

export const pokemonRemoveFavThunk = (id) => async (dispatch, getStore) => {
  const { pokemonFavorite } = await getStore();
  let newList = [];

  if (pokemonFavorite.length < 2) {
    localStorage.clear();
  } else {
    newList = pokemonFavorite.filter((char) => char.id !== id);
    localStorage.setItem("pokemonFavorite", JSON.stringify(newList));
  }

  dispatch(pokemonRemoveFavorite(newList));
};
