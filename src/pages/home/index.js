/* node module imports */
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

/* component stylesheets */
import "./style.scss";

/* components */
import {PageComposer} from "@components/page-composer/index.js";
import {Counter} from "./components/counter.js";
import {Controls} from "./components/controls.js";
import {ButtonContainer} from "./components/button-container.js";
import {CounterConfigModal} from "./components/config-modal.js";
import {CounterLimitor} from "./components/limitor.js";

/* app imports */
import {fetchColorsData} from "@appReduxStore/reducers/colors/index.js";
import {deriveSelectedColor} from "@components/common/scripts/get-selected-color.js";

export const HomePage = () => {
  /* top vars */
  const colorConfig = useSelector(deriveSelectedColor);
  const dispatchToReduxStore = useDispatch();

  /* on load */
  useEffect(() => {
    dispatchToReduxStore(fetchColorsData());
  }, []);

  return (
    <React.Fragment>
      <PageComposer>
        <div className="mainContainer positionRelative" style={{background: colorConfig.background}}>
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
      </PageComposer>
    </React.Fragment>
  );
};
