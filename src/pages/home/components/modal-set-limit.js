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
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

export const ModalSetLimitComponent = (props) => {
  let [value, setValue] = useState(0);
  let [showError, setShowError] = useState(false);
  let [isDisabled, setIsDisabled] = useState(true);
  const dispatchToReduxStore = useDispatch();
  const colorConfig = useSelector((state) => deriveSelectedColor(state));

  function handleOnChange(event) {
    let {value} = event.target;
    let absoluteValue = Math.abs(value);

    /* set value always for controlled component */
    setValue(() => event.target.value);

    /* validation and update to redux */
    if (window.isNaN(Math.abs(value))) {
      setShowError(true);
    }
    else {
      setShowError(false);
      dispatchToReduxStore(setCounterLimit(Number(value)))
    }
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

  return (
    <div className="formGroup positionRelative">
      <div className="customRow">
        <label style={{color: colorConfig.text}} className="form-label limitLabel" htmlFor="limitValue">Set Limit</label>
        <label className="sliderLabel positionRelative" htmlFor="sliderLabel">
          <input onChange={handleCheckboxOnChange} type="checkbox" value="active" name="sliderLabel" id="sliderLabel"/>
          <span className="circle"></span>
        </label>
      </div>
      <input style={{color: colorConfig.text, borderColor: colorConfig.text}} disabled={isDisabled} type="text" id="limitValue" name="limitValue" className="form-control counterInput"
      value={value} onChange={handleOnChange}/>
      <span className={showError ? "error" : "error hiddenTransform"}>Set A Number</span>
    </div>
  );
};
