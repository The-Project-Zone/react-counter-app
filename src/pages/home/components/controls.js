/* node module imports */
import React, {useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";

/* app imports */
import soundIconWhite from "@appIcons/sound-icon-white.svg";
import soundIconBlack from "@appIcons/sound-icon-black.svg";
import muteIconBlack from "@appIcons/mute-icon-black.svg";
import muteIconWhite from "@appIcons/mute-icon-white.svg";
import {toggleSound} from "@appReduxStore/reducers/sounds/index.js";

export const Controls = () => {
  const [isMute, setIsMute] = useState(false);
  const dispatchToReduxStore = useDispatch();
  const soundBtn = useRef();

  /* sound btn handler */
  useEffect(() => {
    function handleOnClick() {
      setIsMute((prevState) => !prevState);
    }
    soundBtn.current.addEventListener("click", handleOnClick);

    return () => {
      soundBtn.current.removeEventListener("click", handleOnClick);
    };
  }, []);

  /* on mute changed */
  useEffect(() => {
    dispatchToReduxStore(toggleSound(isMute));
  }, [isMute]);

  const icon = {
    src: !isMute ? soundIconWhite : muteIconWhite,
    className: "img-fluid center-block",
    alt: !isMute ? "Sounds:On" : "Sounds:Off"
  };

  return (
    <div className="controls customRow">
      <button type="button" className="btn btn-default" ref={soundBtn}>
        <img {...icon}/>
      </button>
    </div>
  );
};
