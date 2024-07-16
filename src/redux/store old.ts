// import { applyMiddleware, createStore } from "redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

// export const store = createStore(rootReducer);
export const store = createStore(rootReducer, {}, applyMiddleware(logger));
