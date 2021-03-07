// redux
import { createStore, applyMiddleware, combineReducers } from "redux";

// thunk
import thunk from "redux-thunk";

// reducers
import remReducer from "./modules/rem/reducer";
import pokemonReducer from "./modules/pokemon/reducer";
import remFavoriteReducer from "./modules/remFavorite/reducer";
import pokemonFavoriteReducer from "./modules/pokemonFavorite/reducer";

//-----------------------------------------------------------------
const reducers = combineReducers({
  remAPI: remReducer,
  pokemonAPI: pokemonReducer,
  remFavorite: remFavoriteReducer,
  pokemonFavorite: pokemonFavoriteReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
