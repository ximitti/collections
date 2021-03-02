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

    dispatch(pokemonStart(response));
  } catch (e) {
    console.log(e);
  }
};

export const pokemonNextThunk = () => async (dispatch, getStore) => {
  const { pokemonAPI } = getStore();

  try {
    const response = await axios.get(pokemonAPI.data.next);

    dispatch(pokemonNext(response));
  } catch (e) {
    console.log(e);
  }
};

export const pokemonPreviousThunk = () => async (dispatch, getStore) => {
  const { pokemonAPI } = getStore();

  try {
    const response = await axios.get(pokemonAPI.data.previous);

    dispatch(pokemonPrevious(response));
  } catch (e) {
    console.log(e);
  }
};
