/* node module imports */
import React from "react";

/* app imports */
import {AppButton} from "@components/buttons/button.js";

export const ModalSetCounterComponent = () => {
  return (
    <div className="formGroup positionRelative mb-3">
      <label className="form-label" htmlFor="counterValue">Set Counter</label>
      <input type="text" id="counterValue" name="counterValue" className="form-control counterInput"/>
      <AppButton
        attributes={{className:"btn btn-success counterSetButton"}}
        render="OK"
      />
    </div>
  );
};
