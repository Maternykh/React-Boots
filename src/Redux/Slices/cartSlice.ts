import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itemsproductMap, productMap } from "../../Type";
const initialState: itemsproductMap | null = {
  cartItems: [],
  totalcartlenght: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<productMap>) => {
      const findItem = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (!!findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
    },
    removeCartItems: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload
      );
    },
    clearCartItems: (state) => {
      state.cartItems = [];
    },
    plusItem: (state, action: PayloadAction<number>) => {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);
      if (!!findItem) {
        findItem.count++;
      }
    },
    minusItem: (state, action: PayloadAction<number>) => {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);
      if (!!findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.cartItems = state.cartItems.filter(
            (cart) => cart.id !== action.payload
          );
        }
      }
    },
  },
});
export const {
  setCartItems,
  removeCartItems,
  clearCartItems,
  plusItem,
  minusItem,
} = cartSlice.actions;
export default cartSlice.reducer;
