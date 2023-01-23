/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* slicer */
const loaderSlice = createSlice({
  name: "app_loader",
  initialState: {
    show: true
  },
  reducers: {
    showAppLoader: (state) => {
      state.show = true;
    },
    hideAppLoader: (state) => {
      state.show = false;
    }
  }
});

/* export */
export const {showAppLoader, hideAppLoader} = loaderSlice.actions;
export default loaderSlice.reducer;
