// import React from "react";
// import { Provider } from "react-redux";
// import store from "./src/redux/store";

// export const wrapRootElement = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// // gatsby-browser.js or gatsby-ssr.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from "./src/redux/store";

// //import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// //import 'mdbreact/dist/css/mdb.css';

// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css'

// export const wrapRootElement = ({ element }) => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//     {/* <ToastContainer /> */}
//       {element}
//     </PersistGate>
//   </Provider>
// );

// // gatsby-browser.js

// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./src/redux/store";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import Cookies from "js-cookie";

// const fetchNewAccessToken = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/getAccessToken");
//     const data = await response.json();

//     Cookies.set("accessToken", data.accessToken, {
//       sameSite: "None",
//       secure: true,
//     });

//     setTimeout(fetchNewAccessToken, 1 * 60 * 1000);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// export const onClientEntry = () => {
//   try {
//     fetchNewAccessToken();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// export const wrapRootElement = ({ element }) => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       {element}
//     </PersistGate>
//   </Provider>
// );

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  );
};
