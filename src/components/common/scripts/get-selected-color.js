export const deriveSelectedColor = (state) => {
  if (!state.colors.allColors || state.colors.allColors.length === 0) {
    return state.colors.byDefault;
  }
  else {
    return state.colors.allColors.find((color) => {
      return color.selected === true;
    });
  }
};
