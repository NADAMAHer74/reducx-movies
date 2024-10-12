// import { createStore, applyMiddleware } from "redux";
// import { moviesReducer } from "../reducers/moviesReducer";
// import { thunk } from "redux-thunk";

// export const store = createStore(moviesReducer, applyMiddleware(thunk));
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { moviesReducer } from "../reducers/moviesReducer";

// Make sure you're exporting the store properly
export const store = createStore(moviesReducer, applyMiddleware(thunk));
