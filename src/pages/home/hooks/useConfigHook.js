/* node module imports */
import React, {useState} from "react";

export const useConfigHook = () => {
  const [showModal, setShowModal] = useState(false);

  /* exposed api */
  const config = {
    show: showModal,
    toggleModalShow: setShowModal
  }
  return config;
};
