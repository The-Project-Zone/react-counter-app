/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* create slicer */
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increaseValue: (state) => {
      state.value = state.value + 1;
    },
    decreaseValue: (state) => {
      state.value = state.value - 1;
    }
  }
});

/* export actions and the reducer */
export const {increaseValue, decreaseValue} = counterSlice.actions;
export default counterSlice.reducer;
