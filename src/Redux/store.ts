import { configureStore } from "@reduxjs/toolkit";
import filterReduce from "./Slices/filterSlice";
import linkReduce from "./Slices/linkSlice";
export const store = configureStore({
  reducer: { filter: filterReduce, linsk: linkReduce },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
