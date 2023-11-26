import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Linsk } from "../../Type";

const initialState: Linsk = {
  links: 0,
  enterPrice: 1,
  selectItem: 0,
};

export const linkSlice = createSlice({
  name: "linsk",
  initialState,
  reducers: {
    setLinks: (state, action: PayloadAction<number>) => {
      state.links = action.payload;
    },
    setEnterPrice: (state, action: PayloadAction<number>) => {
      state.enterPrice = action.payload;
    },
    setSelectItem: (state, action: PayloadAction<number>) => {
      state.selectItem = action.payload;
    },
  },
});
export const { setLinks, setEnterPrice, setSelectItem } = linkSlice.actions;
export default linkSlice.reducer;
