/* node module imports */
import React, {useRef, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

/* app imports */
import {selectColorByHex} from "@appReduxStore/reducers/colors/index.js";
import tickMarkSource from "@appIcons/tick-icon.svg";

export const ColorComponent = (props) => {
  const colorRef = useRef();
  const dispatchToReduxStore = useDispatch();

  function handleOnClick() {
    dispatchToReduxStore(selectColorByHex(props.background));
    //props.triggerHideModal();
  }

  useEffect(() => {
    const colorElement = colorRef.current;
    colorElement.addEventListener("click", handleOnClick);
    return () => {
      colorElement.removeEventListener("click", handleOnClick);
    };
  }, []);

  return (
    <div ref={colorRef} className={props.selected ? "color active" : "color"} style={{background: props.background}}>
      {
        (props.selected) &&
        <img src={tickMarkSource} className="img-fluid tick" alt="Selected" title="Selected"/>
      }
    </div>
  );
};
