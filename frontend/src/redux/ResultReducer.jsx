import { createSlice } from "@reduxjs/toolkit";

export const ResultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const { startExamAction } = ResultReducer.actions;
export default ResultReducer.reducer;
