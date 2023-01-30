/* node module imports */
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

/* app imports */
import App from './App';
import { appRTKStore } from "./app-redux-store/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={appRTKStore()}>
      <App />
    </Provider>
  </StrictMode>
);
