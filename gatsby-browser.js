// import React from "react";
// import { Provider } from "react-redux";
// import store from "./src/redux/store";

// export const wrapRootElement = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// // gatsby-browser.js or gatsby-ssr.js
// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./src/redux/store";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fortawesome/fontawesome-free/css/all.css";

// //   import '@fortawesome/fontawesome-free/css/all.min.css';
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";

// //import 'bootstrap/dist/css/bootstrap.min.css';
// //import 'bootstrap/dist/js/bootstrap.bundle.min';

// import Cookies from "js-cookie";

// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// export const wrapRootElement = ({ element }) => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       {/* <ToastContainer /> */}
//       {element}
//     </PersistGate>
//   </Provider>
// );

// // export const onClientEntry = async () => {
// //   try {
// //     const response = await fetch("http://localhost:5000/getAccessToken");
// //     const data = await response.json();

// //     // Set the access token in a cookie to expire in 30 minutes
// //     const expirationTime = new Date(new Date().getTime() + 30 * 60 * 1000); // 30 minutes
// //     Cookies.set('accessToken', data.accessToken, { expires: expirationTime });
// //   } catch (error) {
// //     console.error('Error:', error);
// //   }
// // };

// const fetchNewAccessToken = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/getAccessToken");
//     const data = await response.json();

//     // Set the new access token in the cookie
//     //const expirationTime = new Date(new Date().getTime() + 1 * 60 * 1000); // 1 minute
//     Cookies.set("accessToken", data.accessToken, {
//       sameSite: "None",
//       secure: true,
//     });
//     // const expirationTime = new Date(new Date().getTime() + 1 * 60 * 1000); // 1 minute
//     // Cookies.set('accessToken', data.accessToken, { expires: expirationTime });

//     // Schedule the next fetch after 1 minute
//     setTimeout(fetchNewAccessToken, 1 * 60 * 1000);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// const onClientEntry = async () => {
//   useEffect(() => {
//     try {
//       fetchNewAccessToken();
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }, []);
// };

// export default onClientEntry;

// const fetchNewAccessToken = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/getAccessToken");
//     const data = await response.json();

//     // Set the new access token in the cookie
//     const expirationTime = new Date(new Date().getTime() + 40 * 60 * 1000); // 40 minutes

//     Cookies.set("accessToken", data.accessToken, {
//       expires: expirationTime,
//       sameSite: "None",
//       secure: true,
//     });

//     // Schedule the next fetch after 40 minutes
//     setTimeout(fetchNewAccessToken, 40 * 60 * 1000);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// export const onClientEntry = async () => {
//   try {
//     await fetchNewAccessToken();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

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

// // const fetchNewAccessToken = async () => {
// //   try {
// //     const response = await fetch("http://localhost:5000/getAccessToken");
// //     const data = await response.json();

// //     Cookies.set("accessToken", data.accessToken, {
// //       sameSite: "None",
// //       secure: true,
// //     });

// //     setTimeout(fetchNewAccessToken, 1 * 60 * 1000);
// //   } catch (error) {
// //     console.error("Error:", error);
// //   }
// // };

// // export const onClientEntry = () => {
// //   try {
// //     fetchNewAccessToken();
// //   } catch (error) {
// //     console.error("Error:", error);
// //   }
// // };

// export const wrapRootElement = ({ element }) => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       {element}
//     </PersistGate>
//   </Provider>
// );

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
// import axios from "axios";

// async function fetchAndSetAccessToken() {
//   try {
//     const response = await fetch("http://localhost:5000/getAccessToken");
//     const data = await response.json();

//     Cookies.set("accessToken", data.accessToken, {
//       sameSite: "None",
//       secure: true,
//     });

//     // Set the access token as a default header for Axios
//     axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // Initial call
// fetchAndSetAccessToken();

// // Set interval to call fetchAndSetAccessToken every 1 minute
// setInterval(fetchAndSetAccessToken, 1 * 60 * 1000);

// // Add an Axios interceptor to handle 401 Unauthorized responses
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Refresh the page on a 401 response
//       window.location.reload();
//     }
//     return Promise.reject(error);
//   }
// );

// export const wrapRootElement = ({ element }) => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       {element}
//     </PersistGate>
//   </Provider>
// );

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
// import { fetchNewToken } from "./src/components/Auth/Token";
// import { TrackerProvider } from 'react-tracking';
// import TrackedButton from './src/components/TrackedButton';

// export const wrapRootElement = ({ element }) => {
//   // Call the function to fetch and set the token
//   fetchNewToken();

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {element}
//       </PersistGate>
//     </Provider>
//   );
// };

// import React, { useEffect } from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./src/redux/store";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import Cookies from "js-cookie";
// import { fetchNewToken } from "./src/components/Auth/Token";
// import { TrackerProvider } from 'react-tracking';
// import TrackedButton from './src/components/Buttons/TrackedButton';

// export const wrapRootElement = ({ element }) => {
//   // Call the function to fetch and set the token
//   fetchNewToken();

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {/* <TrackerProvider
//           // Initialize your tracking provider here (e.g., Google Analytics)
//           // This example uses an empty function, you would replace it with your actual initialization
//           onInit={() => {}}
//           // Additional options and settings for your tracking provider
//           // For example, you might pass your tracking ID or other configurations here
//         >

//           <TrackedButton /> */}
//           {element}
//         {/* </TrackerProvider> */}
//       </PersistGate>
//     </Provider>
//   );
// };


// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./src/redux/store";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import Logout from "./src/components/Auth/Logout";
// import handleLogout from './src/components/Auth/Logout';

// // const handleBeforeUnload = () => {
// //   handleLogout(); 
// // };

// // export const onRouteUpdate = ({ location }) => {
// //   window.addEventListener("beforeunload", handleBeforeUnload);

// //   return () => {
// //     window.removeEventListener("beforeunload", handleBeforeUnload);
// //   };
// // };
// // export const onClientEntry = () => {
// //   window.handleLogout = handleLogout;
// // };



// export const wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {element}
//       </PersistGate>
//     </Provider>
//   );
// };




import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "./src/components/Auth/Logout";
import handleLogout from './src/components/Auth/Logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const handleBeforeUnload = () => {
//   handleLogout(); 
// };

// export const onRouteUpdate = ({ location }) => {
//   window.addEventListener("beforeunload", handleBeforeUnload);

//   return () => {
//     window.removeEventListener("beforeunload", handleBeforeUnload);
//   };
// };
// export const onClientEntry = () => {
//   window.handleLogout = handleLogout;
// };



export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};
