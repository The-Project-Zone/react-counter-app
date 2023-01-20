/* node module imports */
import {useRef, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

/* app imports */
import soundIconWhite from "@appIcons/sound-icon-white.svg";
import soundIconBlack from "@appIcons/sound-icon-black.svg";
import muteIconBlack from "@appIcons/mute-icon-black.svg";
import muteIconWhite from "@appIcons/mute-icon-white.svg";
import {toggleSound} from "@appReduxStore/reducers/sounds/index.js";

export const useSoundHook = () => {
  let [isMute, setIsMute] = useState(false);
  const soundBtnRef = useRef();
  const dispatchToReduxStore = useDispatch();
  const soundIcon = {
    src: !isMute ? soundIconWhite : muteIconWhite,
    className: "img-fluid center-block",
    alt: !isMute ? "Sounds:On" : "Sounds:Off",
    title: !isMute ? "Sounds:On" : "Sounds:Off"
  };

  /* sound btn handler */
  useEffect(() => {
    function handleOnClick() {
      setIsMute((state) => !state);
    }

    const soundBtn = soundBtnRef.current;
    soundBtn.addEventListener("click", handleOnClick);
    return () => {
      soundBtn.removeEventListener("click", handleOnClick);
    };
  }, []);

  /* on mute changed */
  useEffect(() => {
    dispatchToReduxStore(toggleSound(isMute));
  }, [isMute]);

  return {soundBtnRef, soundIcon};
};
