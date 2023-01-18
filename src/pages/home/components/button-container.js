/* node module imports */
import React from "react";

/* app imports */
import {useButtonContainer} from "../hooks/useButtonContainer.js";
import {CounterButton} from "@components/buttons/counter-button.js";

export const ButtonContainer = () => {
  const {incrementButtonConfig, decrementButtonConfig} = useButtonContainer();

  return (
    <div className="buttonContainer text-center customRow">
      <CounterButton {...decrementButtonConfig}/>
      <CounterButton {...incrementButtonConfig}/>
    </div>
  );
};
