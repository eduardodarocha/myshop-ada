// import { applyMiddleware, createStore } from "redux";
// import { applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { configureStore, Tuple } from "@reduxjs/toolkit";

// export const store = createStore(rootReducer);
export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // https://redux-toolkit.js.org/api/getDefaultMiddleware#intended-usage
});
