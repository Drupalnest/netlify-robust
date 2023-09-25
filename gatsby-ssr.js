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
import { store, persistor } from "./src/redux/store";

//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//import 'mdbreact/dist/css/mdb.css';






// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <ToastContainer /> */}
      {element}
    </PersistGate>
  </Provider>
);


// gatsby-browser.js



