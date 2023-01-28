/* node module imports */
import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

/* app imports */
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

export const CounterLimitor = () => {
  const limit = useSelector((state) => state.limit);
  const colorConfig = useSelector((state) => deriveSelectedColor(state));
  const currentValue = useSelector((state) => state.counter.value);
  const [maxed, setMaxed] = useState(false);
  const [classString, setClassString] = useState("limitor");

  /* on limit update */
  useEffect(() => {
    let mode = "limitor";

    if (limit.active) {
      mode = "limitor active";
      if (currentValue >= limit.value) {
        mode = "limitor active maxed";
        setMaxed(() => true);
      }
      else {
        setMaxed(() => false);
      }
    }
    else {
      setMaxed(() => false);
    }

    mode += " " + colorConfig.buttons;
    setClassString(() => mode);
  }, [limit, currentValue, colorConfig.buttons]);

  return (
    <div className={classString}>
      <span className="value">{limit.value}</span>
      {
        (!maxed) ?
        (<span className="text">Limit: {!limit.active ? "Not Active" : "Active"}</span>) :
        (<span className="text">Limit: Reached/Crossed</span>)
      }
    </div>
  );
};
