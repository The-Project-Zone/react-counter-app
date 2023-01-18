/* node module imports */
import React from "react";
import { useSelector } from "react-redux";

/* component stylesheets */
import "./style.scss";
import {Counter} from "./components/counter.js";
import {ButtonContainer} from "./components/button-container.js";

export const HomePage = () => {
  /* top vars */
  const background = useSelector((state) => state.colors.background);

  return (
    <div className="mainContainer positionRelative" style={{background: background}}>
      <Counter/>
      <ButtonContainer/>
    </div>
  );
};
