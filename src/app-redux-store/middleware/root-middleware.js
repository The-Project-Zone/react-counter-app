/* app imports */
import {colorsMiddleware} from "./colors/index.js";

export const rootMiddleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(colorsMiddleware);
};
