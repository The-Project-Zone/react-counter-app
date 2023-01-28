/* node module imports */
import {useRef, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* app imports */
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

/* icons */
import soundIconWhite from "@appIcons/sound-icon-white.svg";
import soundIconBlack from "@appIcons/sound-icon-black.svg";
import muteIconBlack from "@appIcons/mute-icon-black.svg";
import muteIconWhite from "@appIcons/mute-icon-white.svg";

/* audio */
import {toggleSound} from "@appReduxStore/reducers/sounds/index.js";

export const useSoundHook = () => {
  let [isMute, setIsMute] = useState(false);
  const colorConfig = useSelector((state) => deriveSelectedColor(state));
  const soundBtnRef = useRef();
  const dispatchToReduxStore = useDispatch();

  /* create the icon as per state */
  const soundIcon = {
    className: "img-fluid center-block",
    alt: !isMute ? "Sounds:On" : "Sounds:Off",
    title: !isMute ? "Sounds:On" : "Sounds:Off"
  };
  if (!isMute) {
    soundIcon.src = colorConfig.buttons === "white" ? soundIconWhite : soundIconBlack;
  }
  else {
    soundIcon.src = colorConfig.buttons === "white" ? muteIconWhite : muteIconBlack;
  }

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
