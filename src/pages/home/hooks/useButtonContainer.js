/* node module imports */
import {useSelector, useDispatch} from "react-redux";

/* app imports */
import plusIconWhite from "@appIcons/plus-icon-ffffff.svg";
import minusIconWhite from "@appIcons/minus-icon-ffffff.svg";
import plusIconBlack from "@appIcons/plus-icon-000000.svg";
import minusIconBlack from "@appIcons/minus-icon-000000.svg";
import {increaseValue, decreaseValue} from "@appReduxStore/reducers/counter/index.js";
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

export const useButtonContainer = () => {
  const colorConfig = useSelector((state) => deriveSelectedColor(state));
  const dispatchToReduxStore = useDispatch();

  /* create */
  const incrementButtonConfig = {
    attributes: {
      className: `btn btn-dark increment counterBtn ${colorConfig.buttons}`,
    },
    onClick: () => {
      dispatchToReduxStore(increaseValue());
    },
    icon: {
      src: colorConfig.buttons === "white" ? plusIconWhite : plusIconBlack,
      className: `img-fluid center-block`,
      alt: "Increment",
      title: "Increment"
    }
  };

  /* create */
  const decrementButtonConfig = {
    attributes: {
      className: `btn btn-dark decrement counterBtn ${colorConfig.buttons}`,
    },
    onClick: () => {
      dispatchToReduxStore(decreaseValue());
    },
    icon: {
      src: colorConfig.buttons === "white" ? minusIconWhite : minusIconBlack,
      className: "img-fluid center-block",
      alt: "Decrement",
      title: "Decrement"
    }
  };

  /* expose the api for this hook */
  return {
    incrementButtonConfig,
    decrementButtonConfig
  };
};
