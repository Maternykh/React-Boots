import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialOnlyReports, reportType } from "../../Type";
const initialState: initialOnlyReports | null = {
  reports: [],
};
export const arrReportSlice = createSlice({
  name: "arrReport",
  initialState,
  reducers: {
    setReports: (state, action: PayloadAction<reportType>) => {
      state.reports.push(action.payload);
    },
    removeReports: (state, action: PayloadAction<number>) => {
      state.reports = state.reports.filter((rep) => rep.id !== action.payload);
    },
  },
});
export const { setReports, removeReports } = arrReportSlice.actions;
export default arrReportSlice.reducer;
