/* node module imports */
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

/* app imports */
import {AppButton} from "@components/buttons/button.js";
import {setValue as setCounterValue} from "@appReduxStore/reducers/counter/index.js";
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

export const ModalSetCounterComponent = (props) => {
  let [value, setValue] = useState(0);
  let [showError, setShowError] = useState(false);
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
      dispatchToReduxStore(setCounterValue(Number(value)));
    }
  }

  return (
    <div className="formGroup positionRelative mb-4">
      <label style={{color: colorConfig.text}} className="form-label" htmlFor="counterValue">Set Counter</label>
      <input style={{color: colorConfig.text, borderColor: colorConfig.text}} type="text" id="counterValue" name="counterValue" className="form-control counterInput"
      value={value} onChange={handleOnChange}/>
      <span className={showError ? "error" : "error hiddenTransform"}>Set A Number</span>
    </div>
  );
};
