/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* create slicer */
const colorSlice = createSlice({
  name: "colors",
  initialState: {
    text: "#ffffff",
    background: "#262626",
    buttons: "white"
  },
  reducers: {}
});

/* export actions and the reducer */
export default colorSlice.reducer;
