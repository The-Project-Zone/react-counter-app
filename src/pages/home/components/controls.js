/* node module imports */
import React, {useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";

/* app imports */
import {useResetHook} from "../hooks/useResetHook.js";
import {useSoundHook} from "../hooks/useSoundHook.js";

export const Controls = () => {
  const {resetBtnRef, resetIcon} = useResetHook();
  const {soundBtnRef, soundIcon} = useSoundHook();

  return (
    <div className="controls customRow">
      <button type="button" className="btn btn-default" ref={soundBtnRef}>
        <img {...soundIcon}/>
      </button>
      <button type="button" className="btn btn-default" ref={resetBtnRef}>
        <img {...resetIcon}/>
      </button>
    </div>
  );
};
