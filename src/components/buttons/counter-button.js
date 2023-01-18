/* node module imports */
import React from "react";

/* app import */
import "./style.scss";

export const CounterButton = (props) => {
  /* override default config with incoming */
  const attributes = {
    ...props.config,
    ...props.attributes,
  };

  /* create the component */
  return (
    <button {...attributes}>
      <img {...props.icon}/>
    </button>
  );
};
CounterButton.defaultProps = {
  config: {
    className: "btn btn-default",
    id: null,
    type: "button",
    onClick: () => {}
  }
};
