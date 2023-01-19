/* node module imports */
import React, {useEffect} from "react";
import {useSelector} from "react-redux";

/* app imports */
import softClickSound from "@appSounds/click-sound.wav";

export const WithSoundOnClick = (Component) => {
  const clickSound = new Audio(softClickSound);
  const isMute = useSelector((state) => state.mute);

  function handleClickSound() {
    if (!isMute) {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }
  }

  return (props) => {
    let composed = {
      ...props,
      playSoundOnClick: handleClickSound
    };
    return (<Component {...composed}/>);
  };
};
