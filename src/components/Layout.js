// import React from "react";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// import withAuth from "./HOC/withAuth";
// import InternetAlert from "./InternetAlert/internetAlert";

// const Layout = ({ children }) => {

//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//     >
//       <Header />
//       <div style={{ flex: 1 }}>{children}</div>
//       <InternetAlert />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default withAuth(Layout);

// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// import withAuth from "./HOC/withAuth";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("eventsLogout", events);
//   const dispatch = useDispatch();

//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;

//   const userName = loginResponse?.current_user?.name;
//   console.log("userName", userName);

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       // Make your API call here
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken, // Make sure to define csrfToken
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: JSON.stringify(combinedEvents), // Make sure to define events
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//     >
//       <Header />
//       <div style={{ flex: 1 }}>{children}</div>
//       <InternetAlert />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default withAuth(Layout);

// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;
//   const userName = loginResponse?.current_user?.name;

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);

//   const handleBeforeUnload = (e) => {
//     const confirmationMessage = "Are you sure you want to leave this page?";

//     e.returnValue = confirmationMessage; // Standard for most browsers

//     if (!window.confirm(confirmationMessage)) {
//       e.preventDefault();
//     }

//     return confirmationMessage; // For some older browsers
//   };

//   const handleLeavePage = () => {
//     if (csrfToken) {
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: [JSON.stringify(combinedEvents)],
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           dispatch(resetEvents());

//           localStorage.removeItem("logout_token");
//           alert("Logout successful");
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("An error occurred while logging out.");
//         });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [combinedEvents, csrfToken, userName]);

//   return (
//     <>
//       <Helmet>
//         <script>
//           {`
//             window.addEventListener('beforeunload', function (e) {
//               const confirmationMessage = "Are you sure you want to leave this page?";
//               e.returnValue = confirmationMessage;
//               if (!window.confirm(confirmationMessage)) {
//                 e.preventDefault();
//               }
//               return confirmationMessage;
//             });
//           `}
//         </script>
//       </Helmet>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         <div style={{ flex: 1 }}>{children}</div>
//         <InternetAlert />
//       </div>
//     </>
//   );
// };

// export default Layout;

// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;
//   const userName = loginResponse?.current_user?.name;

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);

//   const handleBeforeUnload = (e) => {
//     const confirmationMessage = "Are you sure you want to leave this page?";

//     e.returnValue = confirmationMessage; // Standard for most browsers

//     const confirmationDialog = `
//       <div style="text-align: center;">
//         <p>${confirmationMessage}</p>
//         <button id="stayButton">Stay on Page</button>
//         <button id="leaveButton">Leave Page</button>
//       </div>
//     `;

//     const container = document.createElement("div");
//     container.innerHTML = confirmationDialog;

//     const stayButton = container.querySelector("#stayButton");
//     const leaveButton = container.querySelector("#leaveButton");

//     stayButton.addEventListener("click", () => {
//       container.remove();
//       e.preventDefault();
//     });

//     leaveButton.addEventListener("click", () => {
//       container.remove();
//       handleLeavePage();
//     });

//     document.body.appendChild(container);

//     return confirmationMessage; // For some older browsers
//   };

//   const handleLeavePage = () => {
//     if (csrfToken) {
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: [JSON.stringify(combinedEvents)],
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           dispatch(resetEvents());

//           localStorage.removeItem("logout_token");
//           alert("Logout successful");
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("An error occurred while logging out.");
//         });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [combinedEvents, csrfToken, userName]);

//   return (
//     <>
//       <Helmet>
//         {/* <script>
//           {`
//              window.addEventListener('beforeunload', function (e) {
//                const confirmationMessage = "Are you sure you want to leave this page?";
//                e.returnValue = confirmationMessage;
//                if (!window.confirm(confirmationMessage)) {
//                  e.preventDefault();
//                }
//                return confirmationMessage;
//              });
//            `}
//         </script> */}
//       </Helmet>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         <div style={{ flex: 1 }}>{children}</div>
//         <InternetAlert />
//       </div>
//     </>
//   );
// };

// export default Layout;

// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;
//   const userName = loginResponse?.current_user?.name;

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);

//   const handleBeforeUnload = (e) => {
//     const confirmationMessage = "Are you sure you want to leave this page?";

//     e.returnValue = confirmationMessage; // Standard for most browsers

//     const confirmationDialog = `
//       <div style="text-align: center;">
//         <p>${confirmationMessage}</p>
//         <button id="stayButton">Stay on Page</button>
//         <button id="leaveButton">Leave Page</button>
//       </div>
//     `;

//     const container = document.createElement('div');
//     container.innerHTML = confirmationDialog;

//     const stayButton = container.querySelector('#stayButton');
//     const leaveButton = container.querySelector('#leaveButton');

//     stayButton.addEventListener('click', () => {
//       container.remove();
//       e.preventDefault();
//     });

//     leaveButton.addEventListener('click', () => {
//       container.remove();
//       handleLeavePage();
//     });

//     document.body.appendChild(container);

//     return confirmationMessage; // For some older browsers
//   };

//   const handleLeavePage = () => {
//     if (csrfToken) {
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: [JSON.stringify(combinedEvents)],
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           dispatch(resetEvents());

//           localStorage.removeItem("logout_token");
//           alert("Logout successful");
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("An error occurred while logging out.");
//         });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [combinedEvents, csrfToken, userName]);

//   return (
//     <>
//       <Helmet>
//         <script>
//           {`
//             window.addEventListener('beforeunload', function (e) {
//               const confirmationMessage = "Are you sure you want to leave this page?";
//               e.returnValue = confirmationMessage;
//               const confirmationDialog = \`
//                 <div style="text-align: center;">
//                   <p>\${confirmationMessage}</p>
//                   <button id="stayButton">Stay on Page</button>
//                   <button id="leaveButton">Leave Page</button>
//                 </div>
//               \`;

//               const container = document.createElement('div');
//               container.innerHTML = confirmationDialog;

//               const stayButton = container.querySelector('#stayButton');
//               const leaveButton = container.querySelector('#leaveButton');

//               stayButton.addEventListener('click', () => {
//                 container.remove();
//                 e.preventDefault();
//               });

//               leaveButton.addEventListener('click', () => {
//                 container.remove();
//                 const leavePageEvent = new Event('leavePage');
//                 window.dispatchEvent(leavePageEvent);
//               });

//               document.body.appendChild(container);
//             });
//           `}
//         </script>
//       </Helmet>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         <div style={{ flex: 1 }}>{children}</div>
//         <InternetAlert />
//       </div>
//     </>
//   );
// };

// export default Layout;

// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;
//   const userName = loginResponse?.current_user?.name;

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);
//   const customLogoutFunction = () => {
//     if (csrfToken) {
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: [JSON.stringify(combinedEvents)],
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           dispatch(resetEvents());

//           localStorage.removeItem("logout_token");
//           alert("Logout successful");
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("An error occurred while logging out.");
//         });
//     }
//   };

//   const handleBeforeUnload = (e) => {
//     const confirmationMessage = "Are you sure you want to leave this page?";
//     e.returnValue = confirmationMessage; // Standard for most browsers
//     return confirmationMessage; // For some older browsers
//   };

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [csrfToken, userName]);

//   return (
//     <>
//       <Helmet>
//         <script>
//           {`
//             window.addEventListener('beforeunload', function (e) {
//               const confirmationMessage = "Are you sure you want to leave this page?";
//               const result = window.confirm(confirmationMessage);
//               if (result) {
//                 ${customLogoutFunction()};
//               } else {
//                 e.preventDefault();
//               }
//             });
//           `}
//         </script>
//       </Helmet>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         <div style={{ flex: 1 }}>{children}</div>
//         <InternetAlert />
//       </div>
//     </>
//   );
// };

// export default Layout;

// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;
//   const userName = loginResponse?.current_user?.name;

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);

//   const customLogoutFunction = () => {
//     if (csrfToken) {
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: [JSON.stringify(combinedEvents)],
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           dispatch(resetEvents());

//           localStorage.removeItem("logout_token");
//           alert("Logout successful");
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("An error occurred while logging out.");
//         });
//     }
//   };

//   const handleBeforeUnload = (e) => {
//     const confirmationMessage = "Are you sure you want to leave this page?";
//     const result = window.confirm(confirmationMessage);
//     if (result) {
//       customLogoutFunction(); // Call the logout function if user confirms leaving
//     } else {
//       e.preventDefault();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [csrfToken, userName]);

//   return (
//     <>
//       <Helmet>
//         <script>
//           {`
//             window.addEventListener('beforeunload', function (e) {
//               const confirmationMessage = "Are you sure you want to leave this page?";
//               const result = window.confirm(confirmationMessage);
//               if (result) {
//                 // Custom logout function will be called if user confirms leaving
//               } else {
//                 e.preventDefault();
//               }
//             });
//           `}
//         </script>
//       </Helmet>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         <div style={{ flex: 1 }}>{children}</div>
//         <InternetAlert />
//       </div>
//     </>
//   );
// };

// export default Layout;

// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { navigate } from "gatsby";
// import { ToastContainer, toast } from "react-toastify";
// import { useBeforeunload } from 'react-beforeunload';

// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;
//   const userName = loginResponse?.current_user?.name;

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);

//   const handleBeforeUnload = () => {
//     if (csrfToken) {
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: [JSON.stringify(combinedEvents)],
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           dispatch(resetEvents());

//           localStorage.removeItem("logout_token");
//           //alert("Logout successful");
//           toast.success("Logout successful");
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           //alert("An error occurred while logging out.");
//           toast.error("An error occurred while logging out");
//         });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [combinedEvents, csrfToken, userName]);

//   window.addEventListener("beforeunload", function (event) {
//     event.preventDefault();
//     event.returnValue = "";

//   });

//   return (
//     <>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         <div style={{ flex: 1 }}>{children}</div>
//         <InternetAlert />
//         <ToastContainer />
//         {/* <Footer /> */}
//       </div>
//     </>
//   );
// };

// export default Layout;



// import React, { useEffect } from "react";
// import Header from "./Header/Header";
// import InternetAlert from "./InternetAlert/internetAlert";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { navigate } from "gatsby";
// import { ToastContainer, toast } from "react-toastify";
// import { useBeforeunload } from "react-beforeunload";
// import BeforeUnloadComponent from "react-beforeunload-component";

// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../redux/store";

// const Layout = ({ children }) => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse ? loginResponse.csrf_token : null;
//   const userName = loginResponse?.current_user?.name;

//   const logoutEvent = {
//     username: userName,
//     timestamp: new Date(),
//     operations: `User ${userName} is logging out`,
//   };

//   const combinedEvents = events.concat(logoutEvent);


//   useBeforeunload((event) => {
//     const message = "Are you sure you want to leave?";
//     if (window.confirm(message)) {
//       event.preventDefault(); // Page won't reload
//       handleBeforeUnload();
//     } else {
//       event.preventDefault();
//     }
//   });

//   const handleBeforeUnload = async () => {
//     if (csrfToken) {
//       fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           withCredentials: true,
//         },
//         body: JSON.stringify({
//           description: [JSON.stringify(combinedEvents)],
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           dispatch(resetEvents());

//           localStorage.removeItem("logout_token");
//           toast.success("Logout successful");
//           navigate("/login");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           toast.error("An error occurred while logging out");
//         });
//     }
//   };


//   return (
//     <>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         <div style={{ flex: 1 }}>{children}</div>
//         <InternetAlert />
//         <ToastContainer />
//         {/* <Footer /> */}
//       </div>
//     </>
//   );
// };

// export default Layout;

import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import InternetAlert from "./InternetAlert/internetAlert";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import { ToastContainer, toast } from "react-toastify";
import { useBeforeunload } from "react-beforeunload";

import {
  trackEvent,
  trackErrorEvent,
  resetEvents,
  setLoginResponse,
} from "../redux/store";

const Layout = ({ children }) => {
  const events = useSelector((state) => state.eventLoginReducer.events);
  const dispatch = useDispatch();
  const loginResponse = useSelector((state) => state.loginReducer.loginResponse);
  const csrfToken = loginResponse ? loginResponse.csrf_token : null;
  const userName = loginResponse?.current_user?.name;

  const [timeoutId, setTimeoutId] = useState(null);

  const logoutEvent = {
    username: userName,
    timestamp: new Date(),
    operations: `User ${userName} is logging out`,
  };

  const combinedEvents = events.concat(logoutEvent);

  
  console.log("ninja")
  useBeforeunload((event) => {
    const message = "Are you sure you want to leave?";

    console.log("log log")
    if (window.confirm(message)) {
      handleBeforeUnload();
      event.preventDefault();
      console.log("log log log")
     
    } else {
      event.preventDefault();
    }
  });

  const handleBeforeUnload = () => {
    if (csrfToken) {
      fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
          withCredentials: true,
        },
        body: JSON.stringify({
          description: [JSON.stringify(combinedEvents)],
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          dispatch(resetEvents());

          localStorage.removeItem("logout_token");
          toast.success("Logout successful");
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("An error occurred while logging out");
        });
    }
  };



  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <div style={{ flex: 1 }}>{children}</div>
        <InternetAlert />
        <ToastContainer />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;


