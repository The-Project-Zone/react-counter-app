/* node module imports */
import React from "react";

/* app imports */
import {AppButton} from "@components/buttons/button.js";

export const ModalSetColorComponent = () => {
  return (
    <div className="formGroup">
      <label htmlFor="colorValue" className="form-label">Set Color</label>
      <div className="palette customRow">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="clearfix"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
      </div>
    </div>
  );
};
