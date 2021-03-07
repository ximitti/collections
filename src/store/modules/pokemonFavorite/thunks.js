// actions
import { pokemonAddFavorite, pokemonRemoveFavorite } from "./actions";

//-------------------------------------------------------
export const pokemonAddFavThunk = (char) => (dispatch) => {
  const oldList = JSON.parse(localStorage.getItem("pokemonFavorite")) || [];
  let newList = [];

  if (oldList.length) {
    newList = [...oldList, char];
  } else {
    newList.push(char);
  }

  localStorage.setItem("pokemonFavorite", JSON.stringify(newList));
  dispatch(pokemonAddFavorite(newList));
};

export const pokemonRemoveFavThunk = (id) => (dispatch, getStore) => {
  const oldList = JSON.parse(localStorage.getItem("pokemonFavorite"));
  let newList = [];
  if (oldList.length < 2) {
    localStorage.clear();
  } else {
    newList = oldList.filter((char) => char.id !== id);
    localStorage.setItem("pokemonFavorite", JSON.stringify(newList));
  }

  dispatch(pokemonRemoveFavorite(newList));
};
