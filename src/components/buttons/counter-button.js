/* node module imports */
import React, {useEffect} from "react";

/* app import */
import "./style.scss";
import {useButtonOnLoad} from "./hooks/use-on-load.js";

export const CounterButton = (props) => {
  /* top vars */
  const attributes = {...props.byDefault, ...props.attributes};
  const {btn} = useButtonOnLoad(props);

  /* create the component */
  return (
    <button {...attributes} ref={btn}>
      <img {...props.icon}/>
    </button>
  );
};
CounterButton.defaultProps = {
  byDefault: {
    className: "btn btn-default",
    id: null,
    type: "button",
  },
  onClick: () => {}
};
