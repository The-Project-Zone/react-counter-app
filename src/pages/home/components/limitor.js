/* node module imports */
import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

export const CounterLimitor = () => {
  const limit = useSelector((state) => state.limit);
  const maxed = useSelector((state) => state.counter.maxed);
  const [classString, setClassString] = useState("limitor");

  /* on limit update */
  useEffect(() => {
    setClassString(() => {
      return (!limit.active) ? "limitor" : "limitor active";
    });
  }, [limit]);

  /* on max update */
  useEffect(() => {
    setClassString((prevState) => {
      if (!limit.active || !maxed) {
        return prevState;
      }
      else {
        return "limitor active maxed";
      }
    });
  }, [maxed]);

  return (
    <div className={classString}>
      <span className="value">{limit.value}</span>
      <span className="text">Limit: {!limit.active ? "Not Active" : "Active"}</span>
    </div>
  );
};
