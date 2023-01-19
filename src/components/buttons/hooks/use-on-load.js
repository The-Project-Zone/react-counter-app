/* node module imports */
import React, {useRef, useEffect} from "react";

export const useButtonOnLoad = (props) => {
  /* create */
  const btn = useRef();

  /* on load */
  useEffect(() => {
    function handleOnClick() {
      props.onClick();
      if ("playSoundOnClick" in props) {
        props.playSoundOnClick();
      }
    }

    const button = btn.current;
    button.addEventListener("click", handleOnClick);
    return () => {
      button.removeEventListener("click", handleOnClick);
    }
  }, []);

  /* expose api */
  return {btn};
};
