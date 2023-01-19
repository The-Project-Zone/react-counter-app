/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* create slicer */
const soundSlice = createSlice({
  name: "mute",
  initialState: false,
  reducers: {
    toggleSound: {
      reducer: (state, action) => {
        return action.payload;
      },
      prepare: (update) => {
        return  {payload: update};
      }
    }
  }
});

/* export actions and the reducer */
export const {toggleSound} = soundSlice.actions;
export default soundSlice.reducer;
