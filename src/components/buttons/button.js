/* node module imports */
import React from "react";

export const AppButton = (props) => {
  const attributes = {
    ...props.byDefault,
    ...props.attributes
  };

  return (
    <button {...attributes} onClick={props.onClick}>
      {props.render}
    </button>
  );
};
AppButton.defaultProps = {
  byDefault: {
    className: "btn btn-default",
    id: null,
    type: "button",
    ref: null
  },
  onClick: () => {},
  render: "Submit"
};

