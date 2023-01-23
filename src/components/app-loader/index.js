/* node module imports */
import React from "react";
import {useSelector} from "react-redux";

/* app imports */
import "./style.scss";
import appLoaderIconSource from "@appIcons/app-loader-icon.gif";

export const AppLoader = () => {
  let showLoader = useSelector((state) => state.app_loader.show);

  if (!showLoader) {
    return null;
  }

  return (
    <div className="appLoader">
      <img src={appLoaderIconSource}
      className="img-fluid loaderIcon" alt="Loading..." title="Loading..."/>
    </div>
  );
};
