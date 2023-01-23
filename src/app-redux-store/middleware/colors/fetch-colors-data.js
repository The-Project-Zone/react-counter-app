/* node module imports */
import axios from "axios";

export const handleFetchColorsData = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://api.npoint.io/ee719e377bd98f61a7fb")
    .then((response) => {
      if (response.status === 200 && response.data.length > 0) {
        resolve(response.data);
      }
      else {
        reject([]);
      }
    })
    .catch((error) => {
      console.log(error);
      reject([]);
    });
  });
};
