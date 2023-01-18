/* node module imports */
import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  /* top vars */
  const value = useSelector((state) => state.counter.value);
  const textColor = useSelector((state) => state.colors.text);

  return (
    <div className="posContainer text-center">
      <span style={{color: textColor}} className="num">{value}</span>
    </div>
  );
};
