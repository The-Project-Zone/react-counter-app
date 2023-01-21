/* node module imports */
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* app imports */
import {AppButton} from "@components/buttons/button.js";
import {
  setLimit as setCounterLimit,
  setActive as setLimitActive,
  setInactive as setLimitInactive
} from "@appReduxStore/reducers/limitor/index.js";

export const ModalSetLimitComponent = (props) => {
  let [value, setValue] = useState(0);
  let [showError, setShowError] = useState(false);
  let [isDisabled, setIsDisabled] = useState(true);
  const dispatchToReduxStore = useDispatch();

  function handleOnChange(event) {
    setValue(() => event.target.value);
  }

  function handleCheckboxOnChange(event) {
    if (event.target.checked) {
      dispatchToReduxStore(setLimitActive());
      setIsDisabled(() => false);
    }
    else {
      dispatchToReduxStore(setLimitInactive());
      setIsDisabled(() => true);
    }
  }

  function handleOnSubmit() {
    if (window.isNaN(Math.abs(value))) {
      setShowError(true);
    }
    else {
      dispatchToReduxStore(setCounterLimit(Number(value)))
      setShowError(false);
      props.hideModal();
    }
  }

  return (
    <div className="formGroup positionRelative">
      <div className="customRow">
        <label className="form-label limitLabel" htmlFor="limitValue">Set Limit</label>
        <label className="sliderLabel positionRelative" htmlFor="sliderLabel">
          <input onChange={handleCheckboxOnChange} type="checkbox" value="active" name="sliderLabel" id="sliderLabel"/>
          <span className="circle"></span>
        </label>
      </div>
      <input disabled={isDisabled} type="text" id="limitValue" name="limitValue" className="form-control counterInput"
      value={value} onChange={handleOnChange}/>
      <span className={showError ? "error" : "error hiddenTransform"}>Set A Number</span>
      <AppButton
        attributes={{className:"btn btn-success counterSetButton", disabled: isDisabled}}
        render="OK"
        onClick={handleOnSubmit}
      />
    </div>
  );
};
