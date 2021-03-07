// actions
import { remAddFavorite, remRemoveFavorite } from "./actions";

//-------------------------------------------------------
export const remAddFavThunk = (char) => (dispatch) => {
  const oldList = JSON.parse(localStorage.getItem("remFavorite")) || [];
  let newList = [];

  console.log("adicionar parametro entrada :", char);
  console.log("adicionar oldList entrada :", oldList);

  if (oldList.length) {
    newList = [...oldList, char];
  } else {
    newList.push(char);
  }

  console.log("adicionar newList entrada :", newList);

  localStorage.setItem("remFavorite", JSON.stringify(newList));
  dispatch(remAddFavorite(newList));
};

export const remRemoveFavThunk = (id) => (dispatch, getStore) => {
  const oldList = JSON.parse(localStorage.getItem("remFavorite"));
  let newList = [];
  if (oldList.length < 2) {
    localStorage.clear();
  } else {
    newList = oldList.filter((char) => char.id !== id);
    localStorage.setItem("remFavorite", JSON.stringify(newList));
  }

  dispatch(remRemoveFavorite(newList));
};