// actions
import { remAddFavorite, remRemoveFavorite } from "./actions";

//-------------------------------------------------------
export const remAddFavThunk = (char) => async (dispatch, getStore) => {
  const { remFavorite } = await getStore();
  let newList = [];

  if (remFavorite.length) {
    newList = [...remFavorite, char];
  } else {
    newList.push(char);
  }

  localStorage.setItem("remFavorite", JSON.stringify(newList));
  dispatch(remAddFavorite(newList));
};

export const remRemoveFavThunk = (id) => async (dispatch, getStore) => {
  const { remFavorite } = await getStore();
  let newList = [];

  if (remFavorite.length < 2) {
    localStorage.clear();
  } else {
    newList = remFavorite.filter((char) => char.id !== id);
  }

  localStorage.setItem("remFavorite", JSON.stringify(newList));
  dispatch(remRemoveFavorite(newList));
};
