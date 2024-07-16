import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

interface CartState {
  cart: Product[];
}
const initialState: CartState = {
  cart: [],
};
export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      // state.cart.push(action.payload);
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      // state.cart = state.cart.filter(
      //   (product) => product.id !== action.payload
      // );
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      state.cart = cartFiltered;
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;
