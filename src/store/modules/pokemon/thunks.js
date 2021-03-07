// axios
import axios from "axios";

// API
import { API_POKEMON } from "../../../services";

// actions
import { pokemonStart, pokemonNext, pokemonPrevious } from "./actions";

//--------------------------------------------------------------------
export const pokemonStartThunk = () => async (dispatch) => {
  try {
    const response = await axios.get(API_POKEMON);
    const newData = { ...response.data };

    newData.results.forEach((element) => {
      const brokeUrl = element.url.split("/");
      const id = brokeUrl[brokeUrl.length - 2];
      element.id = id;
      element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    });

    dispatch(pokemonStart(newData));
  } catch (e) {
    console.log(e);
  }
};

export const pokemonNextThunk = () => async (dispatch, getStore) => {
  const { pokemonAPI } = getStore();

  try {
    const response = await axios.get(pokemonAPI.next);

    const newData = { ...response.data };

    newData.results.forEach((element) => {
      const brokeUrl = element.url.split("/");
      const id = brokeUrl[brokeUrl.length - 2];

      element.id = id;
      element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    });

    dispatch(pokemonNext(newData));
  } catch (e) {
    console.log(e);
  }
};

export const pokemonPreviousThunk = () => async (dispatch, getStore) => {
  const { pokemonAPI } = getStore();

  try {
    const response = await axios.get(pokemonAPI.previous);

    const newData = { ...response.data };

    newData.results.forEach((element) => {
      const brokeUrl = element.url.split("/");
      const id = brokeUrl[brokeUrl.length - 2];

      element.id = id;
      element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    });

    dispatch(pokemonPrevious(newData));
  } catch (e) {
    console.log(e);
  }
};
