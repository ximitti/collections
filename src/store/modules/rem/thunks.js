// axios
import axios from "axios";

// API
import { API_REM } from "../../../services";

// actions
import { remStart, remNext, remPrevious } from "./actions";

// ----------------------------------------------------
export const remStartThunk = () => async (dispatch) => {
  try {
    const response = await axios.get(API_REM);

    const newData = { ...response.data };

    dispatch(remStart(newData));
  } catch (e) {
    console.log(e);
  }
};

export const remNextThunk = () => async (dispatch, getStore) => {
  const { remAPI } = getStore();

  try {
    const response = await axios.get(remAPI.info.next);

    const newData = { ...response.data };

    dispatch(remNext(newData));
  } catch (e) {
    console.log(e);
  }
};

export const remPreviousThunk = () => async (dispatch, getStore) => {
  const { remAPI } = getStore();

  try {
    const response = await axios.get(remAPI.info.prev);

    const newData = { ...response.data };

    dispatch(remPrevious(newData));
  } catch (e) {
    console.log(e);
  }
};
