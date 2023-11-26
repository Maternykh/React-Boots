import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { filterType } from "../../Type";

const initialState: filterType = {
  selectCategstate: "All",
  selectAlphavite: "A-Z",
  selectTrading: "Retail",
  selectVariants: "All stock",
  selectCategory: "All product",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectCategstate: (state, action: PayloadAction<string>) => {
      state.selectCategstate = action.payload;
    },
    setSelectAlphavite: (state, action: PayloadAction<string>) => {
      state.selectAlphavite = action.payload;
    },
    setSelectTrading: (state, action: PayloadAction<string>) => {
      state.selectTrading = action.payload;
    },
    setSelectVariants: (state, action: PayloadAction<string>) => {
      state.selectVariants = action.payload;
    },
    setSelectCategory: (state, action: PayloadAction<string>) => {
      state.selectCategory = action.payload;
    },
  },
});
export const {
  setSelectCategstate,
  setSelectAlphavite,
  setSelectTrading,
  setSelectVariants,
  setSelectCategory,
} = filterSlice.actions;
export default filterSlice.reducer;
