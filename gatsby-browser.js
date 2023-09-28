// import React from "react";
// import { Provider } from "react-redux";
// import store from "./src/redux/store";

// export const wrapRootElement = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };


// gatsby-browser.js or gatsby-ssr.js
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
 import '@fortawesome/fontawesome-free/css/all.css';

  import '@fortawesome/fontawesome-free/css/all.min.css';
  import 'bootstrap-css-only/css/bootstrap.min.css';
  import 'mdbreact/dist/css/mdb.css';
  //import 'bootstrap/dist/css/bootstrap.min.css';
  import "react-toastify/dist/ReactToastify.css";

  import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <ToastContainer /> */}
      {element}
    </PersistGate>
  </Provider>
);


