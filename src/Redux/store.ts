import { configureStore } from "@reduxjs/toolkit";
import filterReduce from "./Slices/filterSlice";
import linkReduce from "./Slices/linkSlice";
import cartReduce from "./Slices/cartSlice";
import reportReduce from "./Slices/reportSlice";
import arrReportSlice from "./Slices/arrReportSlice";
export const store = configureStore({
  reducer: {
    filter: filterReduce,
    linsk: linkReduce,
    cart: cartReduce,
    report: reportReduce,
    arrReport: arrReportSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
