/* node module imports */
import React from "react";

/* app imports */
import {AppButton} from "@components/buttons/button.js";

export const ModalSetLimitComponent = () => {
  return (
    <div className="formGroup positionRelative">
      <div className="customRow">
        <label className="form-label" htmlFor="limitValue">Set Limit</label>
      </div>
      <input type="text" id="limitValue" name="limitValue" className="form-control counterInput"/>
      <AppButton
        attributes={{className:"btn btn-success counterSetButton"}}
        render="OK"
      />
    </div>
  );
};
