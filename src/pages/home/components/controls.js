/* node module imports */
import React, {useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";

/* app imports */
import {useResetHook} from "../hooks/useResetHook.js";
import {useSoundHook} from "../hooks/useSoundHook.js";
import {useConfigHook} from "../hooks/useConfigHook.js";
import configIcon from "@appIcons/control-panel-icon-white.svg";
import {AppButton} from "@components/buttons/button.js";

export const Controls = (props) => {
  const {resetBtnRef, resetIcon} = useResetHook();
  const {soundBtnRef, soundIcon} = useSoundHook();
  const configProps = useConfigHook();

  return (
    <React.Fragment>
      <div className="controls customRow">
        <AppButton
          onClick={() => {
            configProps.toggleModalShow(() => true);
          }}
          render={<img src={configIcon} className="img-fluid center-block"/>}
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
