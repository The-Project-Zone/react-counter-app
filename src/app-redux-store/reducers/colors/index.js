/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* create slicer */
const colorSlice = createSlice({
  name: "colors",
  initialState: {
    text: "#ffffff",
    buttons: "white",
    byDefault: {
      background: "#262626",
      text: "#ffffff",
      buttons: "white"
    },
    allColors: [],
  },
  reducers: {
    fetchColorsData: (state, action) => {
      state.allColors = action.payload;
    },
    selectColorByHex: {
      prepare: (hexCode) => {
        return {payload: hexCode};
      },
      reducer: (state, action) => {
        let selectedIndex = state.allColors.findIndex((color) => {
          return color.selected === true;
        });
        state.allColors[selectedIndex].selected = false;

        let requiredIndex = state.allColors.findIndex((color) => {
          return color.background === action.payload;
        });
        state.allColors[requiredIndex].selected = true;
      }
    }
  }
});

/* export actions and the reducer */
export const {fetchColorsData, selectColorByHex} = colorSlice.actions;
export default colorSlice.reducer;
