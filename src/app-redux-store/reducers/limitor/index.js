/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* create slicer */
const limitorSlice = createSlice({
  name: "limit",
  initialState: {
    active: false,
    value: 0
  },
  reducers: {
    setActive: (state) => {
      state.active = true;
    },
    setInactive: (state) => {
      state.active = false;
    },
    setLimit: {
      reducer: (state, action) => {
        state.value = action.payload.value;
      },
      prepare: (value) => {
        return {payload: {value}};
      }
    }
  }
});

/* export actions and the reducer */
export const {setActive, setInactive, setLimit} = limitorSlice.actions;
export default limitorSlice.reducer;
