/* node module imports */
import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

export const CounterLimitor = () => {
  const limit = useSelector((state) => state.limit);
  const [maxed, setMaxed] = useState(false);
  const currentValue = useSelector((state) => state.counter.value);
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

    setClassString(() => mode);
  }, [limit, currentValue]);

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
