/* node module imports */
import React from "react";
import { useSelector } from "react-redux";

/* component stylesheets */
import "./style.scss";
import {Counter} from "./components/counter.js";
import {Controls} from "./components/controls.js";
import {ButtonContainer} from "./components/button-container.js";
import {CounterConfigModal} from "./components/config-modal.js";
import {CounterLimitor} from "./components/limitor.js";

export const HomePage = () => {
  /* top vars */
  const background = useSelector((state) => state.colors.background);

  return (
    <React.Fragment>
      <div className="mainContainer positionRelative" style={{background: background}}>
        <Controls>
          {
            (props) => {
              return (
                <React.Fragment>
                  <CounterConfigModal {...props}/>
                  <CounterLimitor/>
                </React.Fragment>
              );
            }
          }
        </Controls>
        <Counter/>
        <ButtonContainer/>
      </div>
    </React.Fragment>
  );
};
