/* node module imports */
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

/* app imports */
import {AppButton} from "@components/buttons/button.js";
import {setValue as setCounterValue} from "@appReduxStore/reducers/counter/index.js";

export const ModalSetCounterComponent = (props) => {
  let [value, setValue] = useState(0);
  let [showError, setShowError] = useState(false);
  const dispatchToReduxStore = useDispatch();

  function handleOnChange(event) {
    setValue(() => event.target.value);
  }

  function handleOnSubmit() {
    if (window.isNaN(Math.abs(value))) {
      setShowError(true);
    }
    else {
      setShowError(false);
      dispatchToReduxStore(setCounterValue(Number(value)));
      props.hideModal();
    }
  }

  return (
    <div className="formGroup positionRelative mb-3">
      <label className="form-label" htmlFor="counterValue">Set Counter</label>
      <input type="text" id="counterValue" name="counterValue" className="form-control counterInput"
      value={value}
      onChange={handleOnChange}/>
      <span className={showError ? "error" : "error hiddenTransform"}>Set A Number</span>
      <AppButton
        attributes={{className:"btn btn-success counterSetButton"}}
        render="OK"
        onClick={handleOnSubmit}
      />
    </div>
  );
};
