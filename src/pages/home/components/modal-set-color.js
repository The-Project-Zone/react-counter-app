/* node module imports */
import React from "react";
import {useSelector} from "react-redux";

/* app imports */
import tickMarkSource from "@appIcons/tick-icon.svg";
import {ColorComponent} from "./color-component.js";
import {AppButton} from "@components/buttons/button.js";
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

export const ModalSetColorComponent = ({hideModal}) => {
  const allColors = useSelector((state) => state.colors.allColors);
  const colorConfig = useSelector((state) => deriveSelectedColor(state));

  if (!allColors || allColors.length === 0) {
    return null;
  }
  return (
    <div className="formGroup">
      <label style={{color:colorConfig.text}} htmlFor="colorValue" className="form-label">Set Color</label>
      <div className="palette customRow">
        {
          allColors.map((color, index) => {
            return (
              <React.Fragment key={color.background}>
                <ColorComponent {...color} triggerHideModal={hideModal}/>
                { ((index + 1) % 4 === 0) && <div className="clearfix"></div> }
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
};
