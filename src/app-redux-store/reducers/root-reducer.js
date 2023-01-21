/* app imports */
import counterReducer from "./counter/index.js";
import colorReducer from "./colors/index.js";
import soundReducer from "./sounds/index.js";
import limitorReducer from "./limitor/index.js";

export const rootReducer = () => {
  return {
    counter: counterReducer,
    colors: colorReducer,
    mute: soundReducer,
    limit: limitorReducer
  }
};
