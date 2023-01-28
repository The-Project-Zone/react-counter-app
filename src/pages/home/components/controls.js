/* node module imports */
import React, {useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";

/* app imports */
import {useResetHook} from "../hooks/useResetHook.js";
import {useSoundHook} from "../hooks/useSoundHook.js";
import {useConfigHook} from "../hooks/useConfigHook.js";
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";
import {AppButton} from "@components/buttons/button.js";

/* icons */
import configIconWhite from "@appIcons/control-panel-icon-white.svg";
import configIconBlack from "@appIcons/control-panel-icon-black.svg";

export const Controls = (props) => {
  const colorConfig = useSelector((state) => deriveSelectedColor(state));
  const {resetBtnRef, resetIcon} = useResetHook();
  const {soundBtnRef, soundIcon} = useSoundHook();
  const configProps = useConfigHook();
  const configIcon = colorConfig.buttons === "white" ? configIconWhite : configIconBlack;

  return (
    <React.Fragment>
      <div className="controls customRow">
        <AppButton
          onClick={() => {
            configProps.toggleModalShow(() => true);
          }}
          render={<img src={configIcon} style={{width:"15px"}} className="img-fluid center-block"/>}
        />
        <AppButton
          attributes={{
            ref: soundBtnRef
          }}
          render={<img {...soundIcon}/>}
        />
        <AppButton
          attributes={{
            ref: resetBtnRef
          }}
          render={<img {...resetIcon}/>}
        />
      </div>
      {props.children(configProps)}
    </React.Fragment>
  );
};
