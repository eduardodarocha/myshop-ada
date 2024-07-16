import { combineReducers } from "redux";
// import { userReducer } from "./User/reducer";
// import { cartReducer } from "./Cart/cart-reducer";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart-slice";

export const rootReducer = combineReducers({
  // userReducer,
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
