/* app imports */
import {fetchColorsData} from "@appReduxStore/reducers/colors/index.js";
import {hideAppLoader} from "@appReduxStore/reducers/app-loader/index.js";
import {handleFetchColorsData} from "./fetch-colors-data.js";

export const colorsMiddleware = (storeApi) => {
  return (next) => {
    return (action) => {
      if (action.type === fetchColorsData().type) {
        (async () => {
          try {
            action.payload = await handleFetchColorsData();
            return next(action);
          }
          catch (error) {
            console.error(error);
            action.payload = [];
            return next(action);
          }
          finally {
            storeApi.dispatch(hideAppLoader());
          }
        })();
      }

      return next(action);
    };
  };
};
