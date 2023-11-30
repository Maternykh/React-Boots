import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itemsproductMap, productMap } from "../../Type";
const initialState: itemsproductMap | null = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<productMap>) => {
      state.cartItems.push(action.payload);
    },
    removeCartItems: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload
      );
    },
    clearCartItems: (state) => {
      state.cartItems = [];
    },
  },
});
export const { setCartItems, removeCartItems, clearCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
