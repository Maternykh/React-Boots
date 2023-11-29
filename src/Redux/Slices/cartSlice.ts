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
  },
});
export const { setCartItems, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;
