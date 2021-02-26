// redux
import { createStore, applyMiddleware, combineReducers } from "react";

// thunk
import thunk from "redux-thunk";

// reducers

//-----------------------------------------------------------------
const reducers = combineReducers({});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
