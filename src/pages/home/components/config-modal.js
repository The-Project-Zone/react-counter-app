/* node modules import */
import React, {useState, useEffect, useRef} from "react";

/* app imports */
import {AppButton} from "@components/buttons/button.js";
import {ModalSetCounterComponent} from "./modal-set-counter.js";
import {ModalSetLimitComponent} from "./modal-set-limit.js";
import {ModalSetColorComponent} from "./modal-set-color.js";
import xMarkIconWhite from "@appIcons/x-mark-icon-white.svg";

export const CounterConfigModal = (props) => {
  const [modalClass, setModalClass] = useState("configModal hiddenTransform");

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

  if (modalClass.indexOf("d-none") > -1) {
    return null;
  }
  return (
    <div className={modalClass}>
      <AppButton
        attributes={{className:"btn btn-default closeBtn"}}
        onClick={() => {props.toggleModalShow(() => false)}}
        render={<img src={xMarkIconWhite} className="img-fluid center-block" alt="Close" title="Close"/>}
      />
      <div className="customRow top">
        <div className="segment mb-3">
          <ModalSetCounterComponent hideModal={() => {props.toggleModalShow(() => false)}}/>
          <ModalSetLimitComponent hideModal={() => {props.toggleModalShow(() => false)}}/>
        </div>
        <div className="segment">
          <ModalSetColorComponent/>
        </div>
      </div>
    </div>
  );
};
