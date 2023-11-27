import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { filterType } from "../../Type";

const initialState: filterType = {
  selectCategstate: "All",
  selectAlphavite: "A-Z",
  selectTrading: "All trade",
  selectVariants: "All",
  selectCategory: "All product",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectCategstate: (state, action: PayloadAction<string>) => {
      state.selectCategstate = action.payload;
      state.selectAlphavite = "A-Z";
      state.selectTrading = "All trade";
      state.selectVariants = "All";
      state.selectCategory = "All product";
    },
    setSelectAlphavite: (state, action: PayloadAction<string>) => {
      state.selectAlphavite = action.payload;
      state.selectCategstate = "All";
      state.selectTrading = "All trade";
      state.selectVariants = "All";
      state.selectCategory = "All product";
    },
    setSelectTrading: (state, action: PayloadAction<string>) => {
      state.selectTrading = action.payload;
      state.selectVariants = "All";
      state.selectCategory = "All product";
      state.selectAlphavite = "A-Z";
      state.selectCategstate = "All";
    },
    setSelectVariants: (state, action: PayloadAction<string>) => {
      state.selectVariants = action.payload;
      state.selectCategory = "All product";
      state.selectAlphavite = "A-Z";
      state.selectCategstate = "All";
      state.selectTrading = "All trade";
    },
    setSelectCategory: (state, action: PayloadAction<string>) => {
      state.selectCategory = action.payload;
      state.selectAlphavite = "A-Z";
      state.selectTrading = "All trade";
      state.selectVariants = "All";
      state.selectCategstate = "All";
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
