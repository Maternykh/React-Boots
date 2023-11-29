import { configureStore } from "@reduxjs/toolkit";
import filterReduce from "./Slices/filterSlice";
import linkReduce from "./Slices/linkSlice";
import cartReduce from "./Slices/cartSlice";
export const store = configureStore({
  reducer: { filter: filterReduce, linsk: linkReduce, cart: cartReduce },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
