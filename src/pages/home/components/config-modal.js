/* node modules import */
import React, {useState, useEffect, useRef} from "react";
import {useSelector} from "react-redux";

/* app imports */
import {AppButton} from "@components/buttons/button.js";
import {ModalSetCounterComponent} from "./modal-set-counter.js";
import {ModalSetLimitComponent} from "./modal-set-limit.js";
import {ModalSetColorComponent} from "./modal-set-color.js";
import xMarkIconWhite from "@appIcons/x-mark-icon-white.svg";
import xMarkIconBlack from "@appIcons/x-mark-icon-black.svg";
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

export const CounterConfigModal = (props) => {
  const [modalClass, setModalClass] = useState("configModal hiddenTransform");
  const colorConfig = useSelector((state) => deriveSelectedColor(state));
  const xMarkIconSource = colorConfig.buttons === "white" ? xMarkIconWhite : xMarkIconBlack;

  function handleShow() {
    setModalClass(() => {return "configModal hiddenTransform";});
    setTimeout(() => {
      setModalClass(() => {return "configModal"});
    }, 60);
  }

  function handleHide() {
    setModalClass(() => {return "configModal hiddenTransform";});
    setTimeout(() => {
      setModalClass(() => {return "configModal hiddenTransform d-none";});
    }, 250);
  }

  /* show-n-hide toggle */
  useEffect(() => {
    if (props.show) {
      handleShow();
    }
    else {
      handleHide();
    }
  }, [props.show]);

  const backgroundStyles = {background: colorConfig.background};
  return (
    <div className={modalClass} style={backgroundStyles}>
      <AppButton
        attributes={{className:"btn btn-default closeBtn"}}
        onClick={() => {props.toggleModalShow(() => false)}}
        render={<img src={xMarkIconSource} className="img-fluid center-block" alt="Close" title="Close"/>}
      />
      <div className="customRow top">
        <div className="segment mb-4">
          <ModalSetCounterComponent hideModal={() => {props.toggleModalShow(() => false)}}/>
          <ModalSetLimitComponent hideModal={() => {props.toggleModalShow(() => false)}}/>
        </div>
        <div className="segment">
          <ModalSetColorComponent hideModal={() => {props.toggleModalShow(() => false)}}/>
        </div>
      </div>
    </div>
  );
};
