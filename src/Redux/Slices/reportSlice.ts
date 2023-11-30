import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reportType } from "../../Type";

const initialState: reportType = {
  id: 0,
  pushedname: "",
  value: "",
  estimation: "",
};
export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.pushedname = action.payload;
    },
    setReportValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setEstimationValue: (state, action: PayloadAction<string>) => {
      state.estimation = action.payload;
    },
  },
});
export const { setName, setReportValue, setEstimationValue } =
  reportSlice.actions;
export default reportSlice.reducer;
