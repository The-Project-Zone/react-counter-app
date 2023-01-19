/* node module imports */
import React from "react";

/* app imports */
import {useButtonContainer} from "../hooks/useButtonContainer.js";
import {CounterButton} from "@components/buttons/counter-button.js";
import {WithSoundOnClick} from "@components/with-sound-on-click/index.js";

export const ButtonContainer = () => {
  const {incrementButtonConfig, decrementButtonConfig} = useButtonContainer();
  const PlusButtonWithSound = WithSoundOnClick(CounterButton);
  const MinusButtonWithSound = WithSoundOnClick(CounterButton);

  return (
    <div className="buttonContainer text-center customRow">
      <MinusButtonWithSound {...decrementButtonConfig}/>
      <PlusButtonWithSound {...incrementButtonConfig}/>
    </div>
  );
};
