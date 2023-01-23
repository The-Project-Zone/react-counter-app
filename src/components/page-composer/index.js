/* node module imports */
import React from "react";

/* app imports */
import {AppLoader} from "@components/app-loader/index.js";

export const PageComposer = (props) => {
  return (
    <React.Fragment>
      <AppLoader/>
      {props.children}
    </React.Fragment>
  );
};
