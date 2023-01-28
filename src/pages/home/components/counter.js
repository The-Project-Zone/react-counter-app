/* node module imports */
import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  /* top vars */
  const value = useSelector((state) => state.counter.value);
  const textColor = useSelector((state) => {
    if (!state.colors.allColors || state.colors.allColors.length === 0) {
      return state.colors.text;
    }
    else {
      const selectedColor = state.colors.allColors.find((color) => {
        return color.selected === true;
      });
      return selectedColor.text;
    }
  });

  return (
    <div className="posContainer text-center">
      <span style={{color: textColor}} className="num">{value}</span>
    </div>
  );
};
