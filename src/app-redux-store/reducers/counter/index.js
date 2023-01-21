/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* create slicer */
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    maxed: false
  },
  reducers: {
    increaseValue: (state) => {
      state.value = state.value + 1;
    },
    decreaseValue: (state) => {
      state.value = state.value - 1;
    },
    performReset: (state) => {
      state.value = 0;
    },
    setIsMaxed: (state) => {
      state.maxed = true;
    },
    setIsNotMaxed: (state) => {
      state.maxed = false;
    },
    setValue: {
      reducer: (state, action) => {
        state.value = action.payload.value;
      },
      prepare: (value) => {
        return {
          payload: {value}
        }
      }
    }
  }
});

/* export actions and the reducer */
export const {increaseValue, decreaseValue, setValue, performReset} = counterSlice.actions;
export default counterSlice.reducer;
