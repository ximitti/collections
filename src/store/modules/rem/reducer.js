// action types
import { REM_START, REM_NEXT, REM_PREVIOUS } from "./actionsType";

// ------------------------------------------------------------
const remReducer = (state = {}, action) => {
  switch (action.type) {
    case REM_START:
      const { api } = action;
      return api;

    case REM_NEXT:
      const { nextPage } = action;
      return nextPage;

    case REM_PREVIOUS:
      const { previousPage } = action;
      return previousPage;

    default:
      return state;
  }
};

export default remReducer;
