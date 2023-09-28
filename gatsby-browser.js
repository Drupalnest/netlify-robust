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

import Cookies from 'js-cookie';


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




// export const onClientEntry = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/getAccessToken");
//     const data = await response.json();

//     // Set the access token in a cookie to expire in 30 minutes
//     const expirationTime = new Date(new Date().getTime() + 30 * 60 * 1000); // 30 minutes
//     Cookies.set('accessToken', data.accessToken, { expires: expirationTime });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };


const fetchNewAccessToken = async () => {
  try {
    const response = await fetch("http://localhost:5000/getAccessToken");
    const data = await response.json();

    // Set the new access token in the cookie
    const expirationTime = new Date(new Date().getTime() + 1 * 60 * 1000); // 1 minute
    Cookies.set('accessToken', data.accessToken, { expires: expirationTime });
    
    // Schedule the next fetch after 1 minute
    setTimeout(fetchNewAccessToken, 1 * 60 * 1000);
  } catch (error) {
    console.error('Error:', error);
  }
};

export const onClientEntry = async () => {
  try {
    await fetchNewAccessToken();
  } catch (error) {
    console.error('Error:', error);
  }
};
