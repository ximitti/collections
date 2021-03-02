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

    dispatch(remStart(response));
  } catch (e) {
    console.log(e);
  }
};

export const remNextThunk = () => async (dispatch, getStore) => {
  const { remAPI } = getStore();

  try {
    const response = await axios.get(remAPI.data.info.next);

    dispatch(remNext(response));
  } catch (e) {
    console.log(e);
  }
};

export const remPreviousThunk = () => async (dispatch, getStore) => {
  const { remAPI } = getStore();

  try {
    const response = await axios.get(remAPI.data.info.prev);

    dispatch(remPrevious(response));
  } catch (e) {
    console.log(e);
  }
};
