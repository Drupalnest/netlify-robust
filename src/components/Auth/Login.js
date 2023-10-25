// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Header from "../Header/Header";
// // import { navigate } from "gatsby";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [token, setToken] = useState("");

// //   const apiUrl = "https://robustapihub.io/session/token";

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(apiUrl, {
// //           headers: {
// //             "Content-Type": "application/json",
// //             "Access-Control-Allow-Origin": "*",
// //             "Access-Control-Allow-Methods": "GET",
// //             "Access-Control-Allow-Headers": "Content-Type, Authorization",
// //           },
// //         });

// //         if (response.status !== 200) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = response.data;
// //         setToken(data);
// //       } catch (error) {
// //         console.error("Error:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [apiUrl]);

// //   console.log(token);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(
// //         "https://robustapihub.io/user/login?_format=json",
// //         {
// //           name: username,
// //           pass: password,
// //         },
// //         {
// //           headers: {
// //             "X-CSRF-Token": `${token}`,
// //           },
// //         }
// //       );

// //       // Handle successful login here
// //       console.log("Login successful", response.data);
// //       alert("Login successful")
// //       localStorage.setItem("userData", JSON.stringify(response.data));
// //       navigate("/teams")

// //     } catch (error) {
// //       // Handle login error here
// //       console.error("Error:", error);
// //       alert("Incorrect Username and Password")
// //     }
// //   };

// //   return (
// //     <div>
// //       <Header />
// //       <div className="dialog-off-canvas-main-canvas">
// //         <div className="page">
// //           <div className="page__content-above">
// //             <div className="container-fluid px-0">
// //               <div className="block block--pagetitle bg-lighter py-4">
// //                 <div className="container">
// //                   <h1 className="page__title mb-0">Log in</h1>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <main className="main" role="main">
// //             <div className="page-layout-sidebar-default">
// //               <div className="container py-5">
// //                 <div className="row">
// //                   <div className="page__content col-md">
// //                     <div className="hidden" />
// //                     <form
// //                       className="user-login-form"
// //                       method="post"
// //                       onSubmit={handleSubmit}
// //                       acceptCharset="UTF-8"
// //                     >
// //                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-name js-form-item-name form-group">
// //                         <label
// //                           htmlFor="edit-name"
// //                           className="js-form-required form-required"
// //                         >
// //                           Username
// //                           <i className="fas fa-asterisk text-danger form-required__indicator" />
// //                         </label>
// //                         <input
// //                           autoCorrect="none"
// //                           autoCapitalize="none"
// //                           spellCheck="false"
// //                           autoFocus="autofocus"
// //                           data-drupal-selector="edit-name"
// //                           aria-describedby="edit-name--description"
// //                           type="text"
// //                           id="edit-name"
// //                           name="name"
// //                           value={username}
// //                           onChange={(e) => setUsername(e.target.value)}
// //                           size={60}
// //                           maxLength={60}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                         />
// //                         <small
// //                           id="edit-name--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter your Starbucks Developer Portal username.
// //                         </small>
// //                       </div>
// //                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
// //                         <label
// //                           htmlFor="edit-pass"
// //                           className="js-form-required form-required"
// //                         >
// //                           Password
// //                           <i className="fas fa-asterisk text-danger form-required__indicator" />
// //                         </label>
// //                         <input
// //                           aria-describedby="edit-pass--description"
// //                           type="password"
// //                           id="edit-pass"
// //                           name="pass"
// //                           value={password}
// //                           onChange={(e) => setPassword(e.target.value)}
// //                           size={60}
// //                           maxLength={128}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                         />
// //                         <small
// //                           id="edit-pass--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter the password that accompanies your username.
// //                         </small>
// //                       </div>
// //                       <input
// //                         autoComplete="off"
// //                         type="hidden"
// //                         name="form_build_id"
// //                         defaultValue="form-4kfs62KarGpfB4Y1Bv_AzISYQ5DfFiKECMJBaMuX5jI"
// //                         className="form-control"
// //                       />
// //                       <input
// //                         type="hidden"
// //                         name="form_id"
// //                         defaultValue="user_login_form"
// //                         className="form-control"
// //                       />
// //                       <div
// //                         className="form-actions js-form-wrapper form-wrapper"
// //                         id="edit-actions"
// //                       >
// //                         <button
// //                           type="submit"
// //                           id="edit-submit"
// //                           name="op"
// //                           defaultValue="Log in"
// //                           className="button js-form-submit form-submit btn btn-primary"
// //                         >
// //                           LOG IN
// //                         </button>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </main>
// //           <footer className="footer footer-fixed-bottom">
// //             <div className="container">
// //               <div className="footer__wrapper">
// //                 <div className="footer__links">
// //                   <ul className="footer__links-list">
// //                     <li>
// //                       <a href="/terms-use">Terms of Use</a>
// //                     </li>
// //                     <li>
// //                       <a href="mailto:APIGatewaySupport@starbucks.com">
// //                         Contact Us
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //                 <div className="footer__copyright">
// //                   <span className="copyright">
// //                     © 2023 Starbucks Corporation. All rights reserved
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </footer>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Header from "../Header/Header";
// // import { navigate } from "gatsby";
// // import Cookies from "js-cookie";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [token, setToken] = useState("");

// //   const apiUrl = "https://robustapihub.io/session/token";

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(apiUrl, {
// //           headers: {
// //             "Content-Type": "application/json",
// //             "Access-Control-Allow-Origin": "*",
// //             "Access-Control-Allow-Methods": "GET",
// //             "Access-Control-Allow-Headers": "Content-Type, Authorization",
// //           },
// //         });

// //         if (response.status !== 200) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = response.data;
// //         setToken(data);
// //       } catch (error) {
// //         console.error("Error:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [apiUrl]);

// //   console.log("token",token);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const optionsResponse = await fetch(
// //         "https://robustapihub.io/user/login?_format=json",
// //         {
// //           method: "OPTIONS",
// //           headers: {
// //             "Access-Control-Allow-Origin": "*",
// //             // "Access-Control-Allow-Methods": "GET, POST",
// //             "Access-Control-Allow-Headers": "Content-Type, Authorization",
// //           },
// //         }
// //       );

// //       if (optionsResponse.ok) {
// //         const csrfToken = optionsResponse.headers.get("X-CSRF-Token");

// //         const postResponse = await fetch(
// //           "https://robustapihub.io/user/login?_format=json",
// //           {
// //             method: "POST",
// //             headers: {
// //               "X-CSRF-Token": csrfToken,
// //               "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //               name: username,
// //               pass: password,
// //             }),
// //           }
// //         );

// //         if (postResponse.ok) {
// //           console.log(
// //             `[HTTP/3 ${postResponse.status} ${postResponse.statusText}]`
// //           );

// //           const data = await postResponse.json();
// //           console.log("Response data:", data);

// //           console.log("Request Headers:", postResponse.headers);
// //           console.log("Request Cookies:", postResponse.cookies);

// //           alert("Login successful");
// //           localStorage.setItem("userData", JSON.stringify(data));

// //           const cookies = postResponse.headers.get('set-cookie');
// //           console.log("Response Cookies:", cookies);

// //           navigate("/teams");
// //         } else {
// //           console.error("HTTP error! Status:", postResponse.status);
// //           alert("Login failed. Please check your credentials.");
// //         }
// //       } else {
// //         console.error(
// //           "Options request failed! Status:",
// //           optionsResponse.status
// //         );
// //         alert("An error occurred while logging in.");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("An error occurred while logging in.");
// //     }
// //   };

// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();
// //   //   try {
// //   //     const response = await fetch("https://robustapihub.io/user/login?_format=json", {
// //   //       method: "POST",
// //   //       headers: {
// //   //         "Content-Type": "application/json",

// //   //        },
// //   //       body: JSON.stringify({
// //   //         name: username,
// //   //         pass: password,
// //   //       }),
// //   //     });

// //   //     if (response.ok) {
// //   //       const responseData = await response.json();
// //   //       console.log("responseData",responseData)

// //   //       console.log("Request Headers:",response.headers);

// //   //       const cookies = response.headers.get('set-cookie');
// //   //       console.log("cookies",cookies)

// //   //       localStorage.setItem("userData", JSON.stringify(responseData));
// //   //       alert("Login successful");
// //   //       navigate("/teams")
// //   //     } else {
// //   //       const errorData = await response.json();
// //   //       alert(`Login failed. Error: ${errorData.message}`);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("Error:", error);
// //   //     alert("An error occurred while logging in.");
// //   //   }
// //   // };

// //   return (
// //     <div>
// //       <Header />
// //       <div className="dialog-off-canvas-main-canvas">
// //         <div className="page">
// //           <div className="page__content-above">
// //             <div className="container-fluid px-0">
// //               <div className="block block--pagetitle bg-lighter py-4">
// //                 <div className="container">
// //                   <h1 className="page__title mb-0">Log in</h1>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <main className="main" role="main">
// //             <div className="page-layout-sidebar-default">
// //               <div className="container py-5">
// //                 <div className="row">
// //                   <div className="page__content col-md">
// //                     <div className="hidden" />
// //                     <form
// //                       className="user-login-form"
// //                       method="post"
// //                       onSubmit={handleSubmit}
// //                       acceptCharset="UTF-8"
// //                     >
// //                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-name js-form-item-name form-group">
// //                         <label
// //                           htmlFor="edit-name"
// //                           className="js-form-required form-required"
// //                         >
// //                           Username
// //                           <i className="fas fa-asterisk text-danger form-required__indicator" />
// //                         </label>
// //                         <input
// //                           autoCorrect="none"
// //                           autoCapitalize="none"
// //                           spellCheck="false"
// //                           autoFocus="autofocus"
// //                           data-drupal-selector="edit-name"
// //                           aria-describedby="edit-name--description"
// //                           type="text"
// //                           id="edit-name"
// //                           name="name"
// //                           value={username}
// //                           onChange={(e) => setUsername(e.target.value)}
// //                           size={60}
// //                           maxLength={60}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                           autoComplete="true"
// //                         />
// //                         <small
// //                           id="edit-name--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter your Starbucks Developer Portal username.
// //                         </small>
// //                       </div>
// //                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
// //                         <label
// //                           htmlFor="edit-pass"
// //                           className="js-form-required form-required"
// //                         >
// //                           Password
// //                           <i className="fas fa-asterisk text-danger form-required__indicator" />
// //                         </label>
// //                         <input
// //                           aria-describedby="edit-pass--description"
// //                           type="password"
// //                           id="edit-pass"
// //                           name="pass"
// //                           value={password}
// //                           onChange={(e) => setPassword(e.target.value)}
// //                           size={60}
// //                           maxLength={128}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                         />
// //                         <small
// //                           id="edit-pass--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter the password that accompanies your username.
// //                         </small>
// //                       </div>
// //                       <input
// //                         autoComplete="off"
// //                         type="hidden"
// //                         name="form_build_id"
// //                         defaultValue="form-4kfs62KarGpfB4Y1Bv_AzISYQ5DfFiKECMJBaMuX5jI"
// //                         className="form-control"
// //                       />
// //                       <input
// //                         type="hidden"
// //                         name="form_id"
// //                         defaultValue="user_login_form"
// //                         className="form-control"
// //                       />
// //                       <div
// //                         className="form-actions js-form-wrapper form-wrapper"
// //                         id="edit-actions"
// //                       >
// //                         <button
// //                           type="submit"
// //                           id="edit-submit"
// //                           name="op"
// //                           defaultValue="Log in"
// //                           className="button js-form-submit form-submit btn btn-primary"
// //                         >
// //                           LOG IN
// //                         </button>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </main>

// //           <footer className="footer footer-fixed-bottom">
// //             <div className="container">
// //               <div className="footer__wrapper">
// //                 <div className="footer__links">
// //                   <ul className="footer__links-list">
// //                     <li>
// //                       <a href="/terms-use">Terms of Use</a>
// //                     </li>
// //                     <li>
// //                       <a href="mailto:APIGatewaySupport@starbucks.com">
// //                         Contact Us
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //                 <div className="footer__copyright">
// //                   <span className="copyright">
// //                     © 2023 Starbucks Corporation. All rights reserved
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </footer>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Header from "../Header/Header";
// // import { navigate } from "gatsby";
// // import Cookies from "js-cookie";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(
// //         "https://robustapihub.io/user/login?_format=json",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             name: username,
// //             pass: password,
// //           }),
// //         }
// //       );

// //       if (response.ok) {
// //         const responseData = await response.json();
// //         console.log("responseData", responseData);

// //         console.log("Request Headers:", response.headers);

// //         const cookies = response.headers.get("set-cookie");
// //         console.log("cookies", cookies);

// //         localStorage.setItem("userData", JSON.stringify(responseData));
// //         alert("Login successful");
// //         navigate("/teams");
// //       } else {
// //         const errorData = await response.json();
// //         alert(`Login failed. Error: ${errorData.message}`);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("An error occurred while logging in.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <Header />
// //       <div className="dialog-off-canvas-main-canvas">
// //         <div className="page">
// //           <div className="page__content-above">
// //             <div className="container-fluid px-0">
// //               <div className="block block--pagetitle bg-lighter py-4">
// //                 <div className="container">
// //                   <h1 className="page__title mb-0">Log in</h1>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <main className="main" role="main">
// //             <div className="page-layout-sidebar-default">
// //               <div className="container py-5">
// //                 <div className="row">
// //                   <div className="page__content col-md">
// //                     <div className="hidden" />
// //                     <form
// //                       className="user-login-form"
// //                       method="post"
// //                       onSubmit={handleSubmit}
// //                       acceptCharset="UTF-8"
// //                     >
// //                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-name js-form-item-name form-group">
// //                         <label
// //                           htmlFor="edit-name"
// //                           className="js-form-required form-required"
// //                         >
// //                           Username
// //                           <sup>
// //                       <i
// //                         className="fas fa-asterisk text-danger form-required__indicator"
// //                         style={{ fontSize: "0.7em" }}
// //                       />
// //                     </sup>
// //                         </label>
// //                         <input
// //                           autoCorrect="none"
// //                           autoCapitalize="none"
// //                           spellCheck="false"
// //                           autoFocus="autofocus"
// //                           data-drupal-selector="edit-name"
// //                           aria-describedby="edit-name--description"
// //                           type="text"
// //                           id="edit-name"
// //                           name="name"
// //                           value={username}
// //                           onChange={(e) => setUsername(e.target.value)}
// //                           size={60}
// //                           maxLength={60}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                           autoComplete="true"
// //                         />
// //                         <small
// //                           id="edit-name--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter your username.
// //                         </small>
// //                       </div>
// //                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
// //                         <label
// //                           htmlFor="edit-pass"
// //                           className="js-form-required form-required"
// //                         >
// //                           Password
// //                           <sup>
// //                       <i
// //                         className="fas fa-asterisk text-danger form-required__indicator"
// //                         style={{ fontSize: "0.7em" }}
// //                       />
// //                     </sup>
// //                         </label>
// //                         <input
// //                           aria-describedby="edit-pass--description"
// //                           type="password"
// //                           id="edit-pass"
// //                           name="pass"
// //                           value={password}
// //                           onChange={(e) => setPassword(e.target.value)}
// //                           size={60}
// //                           maxLength={128}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                         />
// //                         <small
// //                           id="edit-pass--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter the password that accompanies your username.
// //                         </small>
// //                       </div>
// //                       <input
// //                         autoComplete="off"
// //                         type="hidden"
// //                         name="form_build_id"
// //                         defaultValue="form-4kfs62KarGpfB4Y1Bv_AzISYQ5DfFiKECMJBaMuX5jI"
// //                         className="form-control"
// //                       />
// //                       <input
// //                         type="hidden"
// //                         name="form_id"
// //                         defaultValue="user_login_form"
// //                         className="form-control"
// //                       />
// //                       <div
// //                         className="form-actions js-form-wrapper form-wrapper"
// //                         id="edit-actions"
// //                       >
// //                         <button
// //                           type="submit"
// //                           id="edit-submit"
// //                           name="op"
// //                           defaultValue="Log in"
// //                           className="all-buttons-color text-white js-form-submit form-submit btn btn-md"
// //                         >
// //                           LOG IN
// //                         </button>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState, useEffect } from "react";
// // import Header from "../Header/Header";
// // import { navigate } from "gatsby";
// // import Cookies from "js-cookie";
// // import Bearer from "./Bearer";
// // import LoginResponse from "./LoginResponse";
// // import TeamList from "../../pages/[appGroup.name]/Teams";
// // //import setInitialTokenInCookie from "../../../tokenHandler";
// // import { setLoginResponse } from "../../redux/store";
// // import { useDispatch } from "react-redux";

// // import SuccessToast from "../Toast/Success";
// // import ErrorToast from "../Toast/Error";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showSuccessToast, setShowSuccessToast] = useState(false);
// //   const [showErrorToast, setShowErrorToast] = useState(false);
// //   const dispatch = useDispatch();

// //   // useEffect(() => {
// //   //   setInitialTokenInCookie();
// //   // }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(
// //         "https://robustapihub.io/user/login?_format=json",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             name: username,
// //             pass: password,
// //           }),
// //         }
// //       );

// //       if (response.ok) {
// //         const responseData = await response.json();
// //         console.log("responseData", responseData);

// //         console.log("Request Headers:", response.headers);

// //         dispatch(setLoginResponse(responseData));
// //         //localStorage.setItem("userData", JSON.stringify(responseData));

// //         localStorage.setItem("logout_token", responseData.logout_token);

// //         alert("Login successful");
// //         //setShowSuccessToast(true);

// //          navigate("/teams");
// //       } else {
// //         const errorData = await response.json();
// //         alert(`Login failed. Error: ${errorData.message}`);
// //         //setShowErrorToast(true);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("An error occurred while logging in.");
// //       //setShowErrorToast(true);
// //     }
// //   };

// //   return (
// //     <div style={{ marginTop: "110px" }}>
// //       <Header />

// //       <div className="dialog-off-canvas-main-canvas">
// //         <div className="page">
// //           <div className="page__content-above">
// //             <div className="container-fluid px-0">
// //               <div className="block block--pagetitle bg-lighter py-4">
// //                 <div className="container">
// //                   <h3 className="page__title mb-0">Log in</h3>
// //                   {/* <Bearer/> */}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <main className="main" role="main">
// //             <div className="page-layout-sidebar-default">
// //               <div className="container py-2">
// //                 <div className="row">
// //                   <div className="page__content col-md">
// //                     <div className="hidden" />
// //                     <form
// //                       className="user-login-form"
// //                       method="post"
// //                       onSubmit={handleSubmit}
// //                       acceptCharset="UTF-8"
// //                     >
// //                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-name js-form-item-name form-group">
// //                         <label
// //                           htmlFor="edit-name"
// //                           className="js-form-required form-required"
// //                         >
// //                           Username
// //                           <sup>
// //                             <i
// //                               className="fas fa-asterisk text-danger form-required__indicator"
// //                               style={{ fontSize: "0.7em" }}
// //                             />
// //                           </sup>
// //                         </label>
// //                         <input
// //                           autoCorrect="none"
// //                           autoCapitalize="none"
// //                           spellCheck="false"
// //                           autoFocus="autofocus"
// //                           data-drupal-selector="edit-name"
// //                           aria-describedby="edit-name--description"
// //                           type="text"
// //                           id="edit-name"
// //                           name="name"
// //                           value={username}
// //                           onChange={(e) => setUsername(e.target.value)}
// //                           size={60}
// //                           maxLength={60}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                           autoComplete="true"
// //                         />
// //                         <small
// //                           id="edit-name--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter your username.
// //                         </small>
// //                       </div>
// //                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
// //                         <label
// //                           htmlFor="edit-pass"
// //                           className="js-form-required form-required"
// //                         >
// //                           Password
// //                           <sup>
// //                             <i
// //                               className="fas fa-asterisk text-danger form-required__indicator"
// //                               style={{ fontSize: "0.7em" }}
// //                             />
// //                           </sup>
// //                         </label>
// //                         <input
// //                           aria-describedby="edit-pass--description"
// //                           type="password"
// //                           id="edit-pass"
// //                           name="pass"
// //                           value={password}
// //                           onChange={(e) => setPassword(e.target.value)}
// //                           size={60}
// //                           maxLength={128}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                         />
// //                         <small
// //                           id="edit-pass--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter the password that accompanies your username.
// //                         </small>
// //                       </div>
// //                       <input
// //                         autoComplete="off"
// //                         type="hidden"
// //                         name="form_build_id"
// //                         defaultValue="form-4kfs62KarGpfB4Y1Bv_AzISYQ5DfFiKECMJBaMuX5jI"
// //                         className="form-control"
// //                       />
// //                       <input
// //                         type="hidden"
// //                         name="form_id"
// //                         defaultValue="user_login_form"
// //                         className="form-control"
// //                       />
// //                       <div
// //                         className="form-actions js-form-wrapper form-wrapper"
// //                         id="edit-actions"
// //                       >
// //                         <button
// //                           type="submit"
// //                           id="edit-submit"
// //                           name="op"
// //                           defaultValue="Log in"
// //                           className="all-buttons-color text-white js-form-submit form-submit btn btn-md"
// //                         >
// //                           LOG IN
// //                         </button>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </main>
// //         </div>
// //       </div>

// //       {/* {showSuccessToast && (
// //         <SuccessToast message="Login successful!" />
// //       )}

// //       {showErrorToast && <ErrorToast message="Login failed." />}

// //       {showErrorToast && (
// //         <ErrorToast message="An error occurred while logging in" />
// //       )} */}
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState, useEffect } from "react";
// // import Header from "../Header/Header";
// // import { navigate } from "gatsby";
// // import Cookies from "js-cookie";
// // import Bearer from "./Bearer";
// // import LoginResponse from "./LoginResponse";
// // import TeamList from "../../pages/[appGroup.name]/Teams";
// // import { setLoginResponse } from "../../redux/store";
// // import { useDispatch } from "react-redux";
// // import { trackLoginEvent, trackErrorEvent } from "../../redux/store"; // Replace with the actual path to your actions

// // import SuccessToast from "../Toast/Success";
// // import ErrorToast from "../Toast/Error";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showSuccessToast, setShowSuccessToast] = useState(false);
// //   const [showErrorToast, setShowErrorToast] = useState(false);
// //   const dispatch = useDispatch();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(
// //         "https://robustapihub.io/user/login?_format=json",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             name: username,
// //             pass: password,
// //           }),
// //         }
// //       );

// //       if (response.ok) {
// //         const responseData = await response.json();

// //         dispatch(setLoginResponse(responseData));

// //         localStorage.setItem("logout_token", responseData.logout_token);

// //         alert("Login successful");

// //         // Track successful login event
// //         dispatch(
// //           trackLoginEvent(
// //             username,
// //             password,
// //             "POST",
// //             "https://robustapihub.io/user/login?_format=json",
// //             responseData,
// //             new Date(),
// //             "Login Page",
// //             "Login Button"
// //           )
// //         );

// //         navigate("/teams");
// //       } else {
// //         const errorData = await response.json();
// //         alert(`Login failed. Error: ${errorData.message}`);

// //         // Track login error event
// //         dispatch(
// //           trackErrorEvent(
// //             errorData.message,
// //             new Date(),
// //             "Login Page"
// //           )
// //         );
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("An error occurred while logging in.");

// //       // Track login error event
// //       dispatch(
// //         trackErrorEvent(
// //           error.message,
// //           new Date(),
// //           "Login Page"
// //         )
// //       );
// //     }
// //   };

// //   return (
// //     <div style={{ marginTop: "110px" }}>
// //       <Header />
// //       <div className="dialog-off-canvas-main-canvas">
// //         <div className="page">
// //           <div className="page__content-above">
// //             <div className="container-fluid px-0">
// //               <div className="block block--pagetitle bg-lighter py-4">
// //                 <div className="container">
// //                   <h3 className="page__title mb-0">Log in</h3>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <main className="main" role="main">
// //             <div className="page-layout-sidebar-default">
// //               <div className="container py-2">
// //                 <div className="row">
// //                   <div className="page__content col-md">
// //                     <div className="hidden" />
// //                     <form
// //                       className="user-login-form"
// //                       method="post"
// //                       onSubmit={handleSubmit}
// //                       acceptCharset="UTF-8"
// //                     >
// //                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-name js-form-item-name form-group">
// //                         <label
// //                           htmlFor="edit-name"
// //                           className="js-form-required form-required"
// //                         >
// //                           Username
// //                           <sup>
// //                             <i
// //                               className="fas fa-asterisk text-danger form-required__indicator"
// //                               style={{ fontSize: "0.7em" }}
// //                             />
// //                           </sup>
// //                         </label>
// //                         <input
// //                           autoCorrect="none"
// //                           autoCapitalize="none"
// //                           spellCheck="false"
// //                           autoFocus="autofocus"
// //                           data-drupal-selector="edit-name"
// //                           aria-describedby="edit-name--description"
// //                           type="text"
// //                           id="edit-name"
// //                           name="name"
// //                           value={username}
// //                           onChange={(e) => setUsername(e.target.value)}
// //                           size={60}
// //                           maxLength={60}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                           autoComplete="true"
// //                         />
// //                         <small
// //                           id="edit-name--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter your username.
// //                         </small>
// //                       </div>
// //                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
// //                         <label
// //                           htmlFor="edit-pass"
// //                           className="js-form-required form-required"
// //                         >
// //                           Password
// //                           <sup>
// //                             <i
// //                               className="fas fa-asterisk text-danger form-required__indicator"
// //                               style={{ fontSize: "0.7em" }}
// //                             />
// //                           </sup>
// //                         </label>
// //                         <input
// //                           aria-describedby="edit-pass--description"
// //                           type="password"
// //                           id="edit-pass"
// //                           name="pass"
// //                           value={password}
// //                           onChange={(e) => setPassword(e.target.value)}
// //                           size={60}
// //                           maxLength={128}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                         />
// //                         <small
// //                           id="edit-pass--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter the password that accompanies your username.
// //                         </small>
// //                       </div>
// //                       <input
// //                         autoComplete="off"
// //                         type="hidden"
// //                         name="form_build_id"
// //                         defaultValue="form-4kfs62KarGpfB4Y1Bv_AzISYQ5DfFiKECMJBaMuX5jI"
// //                         className="form-control"
// //                       />
// //                       <input
// //                         type="hidden"
// //                         name="form_id"
// //                         defaultValue="user_login_form"
// //                         className="form-control"
// //                       />
// //                       <div
// //                         className="form-actions js-form-wrapper form-wrapper"
// //                         id="edit-actions"
// //                       >
// //                         <button
// //                           type="submit"
// //                           id="edit-submit"
// //                           name="op"
// //                           defaultValue="Log in"
// //                           className="all-buttons-color text-white js-form-submit form-submit btn btn-md"
// //                         >
// //                           LOG IN
// //                         </button>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //       {showSuccessToast && (
// //         <SuccessToast message="Login successful!" />
// //       )}
// //       {showErrorToast && <ErrorToast message="Login failed." />}
// //       {showErrorToast && (
// //         <ErrorToast message="An error occurred while logging in" />
// //       )}
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState } from "react";
// // import Header from "../Header/Header";
// // import { navigate } from "gatsby";
// // import { useDispatch } from "react-redux";
// // import { setLoginResponse } from "../../redux/store";
// // import SuccessToast from "../Toast/Success";
// // import ErrorToast from "../Toast/Error";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showSuccessToast, setShowSuccessToast] = useState(false);
// //   const [showErrorToast, setShowErrorToast] = useState(false);
// //   const dispatch = useDispatch();

// //   const trackLoginEvent = async (username, password, method, api, responseData, timestamp, page, button) => {
// //     try {
// //       const response = await fetch('https://imaginative-sprite-320f1b.rbut.api.com/event', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           username,
// //           password,
// //           method,
// //           api,
// //           responseData,
// //           timestamp,
// //           page,
// //           button
// //         }),
// //       });

// //       if (response.ok) {
// //         console.log('Login event sent to API successfully');
// //       } else {
// //         console.error('Error sending login event to API:', response.status);
// //       }
// //     } catch (error) {
// //       console.error('Error sending login event to API:', error);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(
// //         "https://robustapihub.io/user/login?_format=json",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             name: username,
// //             pass: password,
// //           }),
// //         }
// //       );

// //       if (response.ok) {
// //         const responseData = await response.json();

// //         dispatch(setLoginResponse(responseData));

// //         localStorage.setItem("logout_token", responseData.logout_token);

// //         alert("Login successful");

// //         trackLoginEvent(
// //           username,
// //           password,
// //           "POST",
// //           "https://robustapihub.io/user/login?_format=json",
// //           responseData,
// //           new Date(),
// //           "Login Page",
// //           "Login Button"
// //         );

// //         navigate("/teams");
// //       } else {
// //         const errorData = await response.json();
// //         alert(`Login failed. Error: ${errorData.message}`);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("An error occurred while logging in.");
// //     }
// //   };
// //     return (
// //     <div style={{ marginTop: "110px" }}>
// //       <Header />
// //       <div className="dialog-off-canvas-main-canvas">
// //         <div className="page">
// //           <div className="page__content-above">
// //             <div className="container-fluid px-0">
// //               <div className="block block--pagetitle bg-lighter py-4">
// //                 <div className="container">
// //                   <h3 className="page__title mb-0">Log in</h3>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <main className="main" role="main">
// //             <div className="page-layout-sidebar-default">
// //               <div className="container py-2">
// //                 <div className="row">
// //                   <div className="page__content col-md">
// //                     <div className="hidden" />
// //                     <form
// //                       className="user-login-form"
// //                       method="post"
// //                       onSubmit={handleSubmit}
// //                       acceptCharset="UTF-8"
// //                     >
// //                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-name js-form-item-name form-group">
// //                         <label
// //                           htmlFor="edit-name"
// //                           className="js-form-required form-required"
// //                         >
// //                           Username
// //                           <sup>
// //                             <i
// //                               className="fas fa-asterisk text-danger form-required__indicator"
// //                               style={{ fontSize: "0.7em" }}
// //                             />
// //                           </sup>
// //                         </label>
// //                         <input
// //                           autoCorrect="none"
// //                           autoCapitalize="none"
// //                           spellCheck="false"
// //                           autoFocus="autofocus"
// //                           data-drupal-selector="edit-name"
// //                           aria-describedby="edit-name--description"
// //                           type="text"
// //                           id="edit-name"
// //                           name="name"
// //                           value={username}
// //                           onChange={(e) => setUsername(e.target.value)}
// //                           size={60}
// //                           maxLength={60}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                           autoComplete="true"
// //                         />
// //                         <small
// //                           id="edit-name--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter your username.
// //                         </small>
// //                       </div>
// //                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
// //                         <label
// //                           htmlFor="edit-pass"
// //                           className="js-form-required form-required"
// //                         >
// //                           Password
// //                           <sup>
// //                             <i
// //                               className="fas fa-asterisk text-danger form-required__indicator"
// //                               style={{ fontSize: "0.7em" }}
// //                             />
// //                           </sup>
// //                         </label>
// //                         <input
// //                           aria-describedby="edit-pass--description"
// //                           type="password"
// //                           id="edit-pass"
// //                           name="pass"
// //                           value={password}
// //                           onChange={(e) => setPassword(e.target.value)}
// //                           size={60}
// //                           maxLength={128}
// //                           className="required form-control"
// //                           required="required"
// //                           aria-required="true"
// //                         />
// //                         <small
// //                           id="edit-pass--description"
// //                           className="description form-text text-muted"
// //                         >
// //                           Enter the password that accompanies your username.
// //                         </small>
// //                       </div>
// //                       <input
// //                         autoComplete="off"
// //                         type="hidden"
// //                         name="form_build_id"
// //                         defaultValue="form-4kfs62KarGpfB4Y1Bv_AzISYQ5DfFiKECMJBaMuX5jI"
// //                         className="form-control"
// //                       />
// //                       <input
// //                         type="hidden"
// //                         name="form_id"
// //                         defaultValue="user_login_form"
// //                         className="form-control"
// //                       />
// //                       <div
// //                         className="form-actions js-form-wrapper form-wrapper"
// //                         id="edit-actions"
// //                       >
// //                         <button
// //                           type="submit"
// //                           id="edit-submit"
// //                           name="op"
// //                           defaultValue="Log in"
// //                           className="all-buttons-color text-white js-form-submit form-submit btn btn-md"
// //                         >
// //                           LOG IN
// //                         </button>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>

// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //       {showSuccessToast && (
// //         <SuccessToast message="Login successful!" />
// //       )}
// //       {showErrorToast && <ErrorToast message="Login failed." />}
// //       {showErrorToast && (
// //         <ErrorToast message="An error occurred while logging in" />
// //       )}
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import { navigate } from "gatsby";
// import Cookies from "js-cookie";
// import Bearer from "./Bearer";
// import LoginResponse from "./LoginResponse";
// import TeamList from "../../pages/[appGroup.name]/Teams";
// import { setLoginResponse } from "../../redux/store";
// import { useDispatch } from "react-redux";
// import { trackEvent, trackErrorEvent } from "../../redux/store";
// import SuccessToast from "../Toast/Success";
// import ErrorToast from "../Toast/Error";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showSuccessToast, setShowSuccessToast] = useState(false);
//   const [showErrorToast, setShowErrorToast] = useState(false);
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "https://robustapihub.io/user/login?_format=json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: username,
//             pass: password,
//           }),
//         }
//       );

//       if (response.ok) {
//         const responseData = await response.json();

//         dispatch(setLoginResponse(responseData));

//         localStorage.setItem("logout_token", responseData.logout_token);

//         alert("Login successful");

//         dispatch(
//           // trackEvent({
//           //   username: username,
//           //   //password: password,
//           //   //method: "POST",
//           //   //api: "https://robustapihub.io/user/login?_format=json",
//           //   //responseData: responseData,
//           //   timestamp: new Date(),
//           //   operation: "User logged in",
//           //   //button: "Login Button",
//           // })

//           trackEvent({
//             username: username,
//             timestamp: new Date(),
//             operations: `User ${username} has logged in`,
//           })
//         );

//         navigate("/teams");
//       } else {
//         const errorData = await response.json();
//         alert(`Login failed. Error: ${errorData.message}`);

//         // Track login error event
//         dispatch(
//           trackErrorEvent({
//             error: errorData.message,
//             timestamp: new Date(),
//             page: "Login Page",
//             button: "Login Button",
//           })
//         );
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging in.");

//       // Track login error event
//       dispatch(
//         trackErrorEvent(error.message, new Date(), "Login Page", "Login Button")
//       );
//     }
//   };

//   return (
//     <div style={{ marginTop: "110px" }}>
//       <Header />
//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="block block--pagetitle bg-lighter py-4">
//                 <div className="container">
//                   <h3 className="page__title mb-0">Log in</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <main className="main" role="main">
//             <div className="page-layout-sidebar-default">
//               <div className="container py-2">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <div className="hidden" />
//                     <form
//                       className="user-login-form"
//                       method="post"
//                       onSubmit={handleSubmit}
//                       acceptCharset="UTF-8"
//                     >
//                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-name js-form-item-name form-group">
//                         <label
//                           htmlFor="edit-name"
//                           className="js-form-required form-required"
//                         >
//                           Username
//                           <sup>
//                             <i
//                               className="fas fa-asterisk text-danger form-required__indicator"
//                               style={{ fontSize: "0.7em" }}
//                             />
//                           </sup>
//                         </label>
//                         <input
//                           autoCorrect="none"
//                           autoCapitalize="none"
//                           spellCheck="false"
//                           autoFocus="autofocus"
//                           data-drupal-selector="edit-name"
//                           aria-describedby="edit-name--description"
//                           type="text"
//                           id="edit-name"
//                           name="name"
//                           value={username}
//                           onChange={(e) => setUsername(e.target.value)}
//                           size={60}
//                           maxLength={60}
//                           className="required form-control"
//                           required="required"
//                           aria-required="true"
//                           autoComplete="true"
//                         />
//                         <small
//                           id="edit-name--description"
//                           className="description form-text text-muted"
//                         >
//                           Enter your username.
//                         </small>
//                       </div>

//                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
//                         <label
//                           htmlFor="edit-pass"
//                           className="js-form-required form-required"
//                         >
//                           Password
//                           <sup>
//                             <i
//                               className="fas fa-asterisk text-danger form-required__indicator"
//                               style={{ fontSize: "0.7em" }}
//                             />
//                           </sup>
//                         </label>
//                         <input
//                           aria-describedby="edit-pass--description"
//                           type="password"
//                           id="edit-pass"
//                           name="pass"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           size={60}
//                           maxLength={128}
//                           className="required form-control"
//                           required="required"
//                           aria-required="true"
//                         />
//                         <small
//                           id="edit-pass--description"
//                           className="description form-text text-muted"
//                         >
//                           Enter the password that accompanies your username.
//                         </small>
//                       </div>
//                       <input
//                         autoComplete="off"
//                         type="hidden"
//                         name="form_build_id"
//                         defaultValue="form-4kfs62KarGpfB4Y1Bv_AzISYQ5DfFiKECMJBaMuX5jI"
//                         className="form-control"
//                       />
//                       <input
//                         type="hidden"
//                         name="form_id"
//                         defaultValue="user_login_form"
//                         className="form-control"
//                       />
//                       <div
//                         className="form-actions js-form-wrapper form-wrapper"
//                         id="edit-actions"
//                       >
//                         <button
//                           type="submit"
//                           id="edit-submit"
//                           name="op"
//                           defaultValue="Log in"
//                           className="all-buttons-color text-white js-form-submit form-submit btn btn-md"
//                         >
//                           LOG IN
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//       {showSuccessToast && <SuccessToast message="Login successful!" />}
//       {showErrorToast && <ErrorToast message="Login failed." />}
//       {showErrorToast && (
//         <ErrorToast message="An error occurred while logging in" />
//       )}

//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import { navigate } from "gatsby";
// import Cookies from "js-cookie";
// import Bearer from "./Bearer";
// import LoginResponse from "./LoginResponse";
// import TeamList from "../../pages/[appGroup.name]/Teams";
// import { setLoginResponse } from "../../redux/store";
// import { useDispatch } from "react-redux";
// import { trackEvent, trackErrorEvent } from "../../redux/store";
// import SuccessToast from "../Toast/Success";
// import ErrorToast from "../Toast/Error";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showSuccessToast, setShowSuccessToast] = useState(false);
//   const [showErrorToast, setShowErrorToast] = useState(false);
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "https://robustapihub.io/user/login?_format=json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: username,
//             pass: password,
//           }),
//         }
//       );

//       if (response.ok) {
//         const responseData = await response.json();

//         dispatch(setLoginResponse(responseData));

//         localStorage.setItem("logout_token", responseData.logout_token);

//         alert("Login successful");

//         dispatch(
//           // trackEvent({
//           //   username: username,
//           //   //password: password,
//           //   //method: "POST",
//           //   //api: "https://robustapihub.io/user/login?_format=json",
//           //   //responseData: responseData,
//           //   timestamp: new Date(),
//           //   operation: "User logged in",
//           //   //button: "Login Button",
//           // })

//           trackEvent({
//             username: username,
//             timestamp: new Date(),
//             operations: `User ${username} has logged in`,
//           })
//         );

//         navigate("/teams");
//       } else {
//         const errorData = await response.json();
//         alert(`Login failed. Error: ${errorData.message}`);

//         // Track login error event
//         dispatch(
//           trackErrorEvent({
//             error: errorData.message,
//             timestamp: new Date(),
//             page: "Login Page",
//             button: "Login Button",
//           })
//         );
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging in.");

//       // Track login error event
//       dispatch(
//         trackErrorEvent(error.message, new Date(), "Login Page", "Login Button")
//       );
//     }
//   };
//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-page">
//       <Header />

//       <section className="vh-100">
//         <div
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.3)",
//             position: "absolute",
//             width: "100vw",
//             height: "100vh",
//             zIndex: "0",
//             backdropFilter: "blur(1px)",
//           }}
//         ></div>

//         <div className="container py-5 h-100" style={{ zIndex: "9999" }}>
//           <div className="row d-flex justify-content-center align-items-center h-100 ">
//             <div>
//               <div
//                 className="card mx-auto  "
//                 style={{
//                   borderRadius: "1rem",
//                   borderRadius: "1rem",
//                   backgroundColor:
//                     "rgba(0, 42, 92, 0.7)",
//                   backdropFilter: "blur(2px)" /* Blur effect */,
//                   //backgroundColor:"#002a5c"
//                 }}
//               >
//                 <div
//                   className="card-body  p-5 text-center "
//                   style={{
//                     margin: "0 auto",
//                     backdropFilter: "blur(10px)",
//                     WebkitBackdropFilter: "blur(10px)",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   <h3 className="mb-5 text-white">Sign in</h3>

//                   <div className="form-outline mb-4 text-left ">
//                     <label
//                       htmlFor="edit-name"
//                       className="js-form-required text-left form-required "
//                       style={{ color: "orange" }}
//                     >
//                       Username
//                       <sup>
//                         <i
//                           className="fas fa-asterisk text-danger form-required__indicator"
//                           style={{ fontSize: "0.7em" }}
//                         />
//                       </sup>
//                     </label>
//                     <input
//                       type="email"
//                       id="typeEmailX-2"
//                       className="form-control form-control-lg"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       style={{
//                         width: "100%",
//                         maxWidth: "500px",
//                         fontSize: "1em",
//                       }}
//                     />
//                     <small
//                       id="edit-name--description"
//                       className="description form-text text-left"
//                       style={{ color: "lightgrey" }}
//                     >
//                       Enter your username.
//                     </small>
//                   </div>

//                   <div className="form-outline mb-4  text-left ">
//                     <label
//                       htmlFor="edit-name"
//                       className="js-form-required text-left  form-required "
//                       style={{ color: "orange" }}
//                     >
//                       Password
//                       <sup>
//                         <i
//                           className="fas fa-asterisk text-danger form-required__indicator"
//                           style={{ fontSize: "0.7em" }}
//                         />
//                       </sup>
//                     </label>
//                     <div className="input-group d-flex">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         id="typePasswordX-2"
//                         className="form-control form-control-lg"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         style={{ width: "100%", maxWidth: "500px" }}
//                       />
//                       {/* <div className="input-group-append">
//                         <button
//                           className="btn btn-outline-secondary"
//                           type="button"
//                           onClick={handleTogglePassword}
//                         >
//                           {showPassword ? (
//                             <i className="far fa-eye-slash"></i>
//                           ) : (
//                             <i className="far fa-eye"></i>
//                           )}
//                         </button>
//                       </div> */}
//                     </div>
//                     <small
//                       id="edit-pass--description"
//                       className="description form-text text-left "
//                       style={{ color: "lightgrey" }}
//                     >
//                       Enter the password that accompanies your username.
//                     </small>
//                   </div>

//                   <div className="mt-5">
//                     <button
//                       className="orange_buttton text-white  btn-lg btn-block"
//                       type="submit"
//                       onClick={handleSubmit}
//                     >
//                       Login
//                     </button>
//                   </div>

//                   <hr className="my-3" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link, navigate } from "gatsby";
import Cookies from "js-cookie";
import Bearer from "./Bearer";
import LoginResponse from "./LoginResponse";
import TeamList from "../../pages/[appGroup.name]/Teams";
import { setLoginResponse } from "../../redux/store";
import { useDispatch } from "react-redux";
import { trackEvent, trackErrorEvent } from "../../redux/store";
import SuccessToast from "../Toast/Success";
import ErrorToast from "../Toast/Error";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://robustapihub.io/user/login?_format=json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            pass: password,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        dispatch(setLoginResponse(responseData));

        localStorage.setItem("logout_token", responseData.logout_token);

        alert("Login successful");

        dispatch(
          // trackEvent({
          //   username: username,
          //   //password: password,
          //   //method: "POST",
          //   //api: "https://robustapihub.io/user/login?_format=json",
          //   //responseData: responseData,
          //   timestamp: new Date(),
          //   operation: "User logged in",
          //   //button: "Login Button",
          // })

          trackEvent({
            username: username,
            timestamp: new Date(),
            operations: `User ${username} has logged in`,
          })
        );

        navigate("/teams");
      } else {
        const errorData = await response.json();
        alert(`Login failed. Error: ${errorData.message}`);

        // Track login error event
        dispatch(
          trackErrorEvent({
            error: errorData.message,
            timestamp: new Date(),
            page: "Login Page",
            button: "Login Button",
          })
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");

      // Track login error event
      dispatch(
        trackErrorEvent(error.message, new Date(), "Login Page", "Login Button")
      );
    }
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <Header />

      <section className="vh-100">
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            position: "absolute",
            width: "100vw",
            height: "100vh",
            zIndex: "0",
            backdropFilter: "blur(1px)",
          }}
        ></div>

        <div className="container py-5 h-100" style={{ zIndex: "9999" }}>
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div>
              <div
                className="card mx-auto  "
                // style={{
                //   borderRadius: "1rem",
                //   backgroundColor: "#002a5c",

                // }}
              >
                <div
                  className="card-body  p-5 text-center "
                  style={{
                    margin: "0 auto",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "10px",
                  }}
                >
                  <h3 className="mb-5 ">Sign in</h3>

                  <div className="form-outline mb-4 text-left ">
                    <label
                      htmlFor="edit-name"
                      className="js-form-required text-left form-required "
                    >
                      Username
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        fontSize: "1em",
                      }}
                    />
                    <small
                      id="edit-name--description"
                      className="description form-text text-left text-muted"
                      //style={{ color: "lightgrey" }}
                    >
                      Enter your username.
                    </small>
                  </div>

                  <div className="form-outline mb-4  text-left ">
                    <label
                      htmlFor="edit-name"
                      className="js-form-required text-left  form-required "
                    >
                      Password
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <div className="input-group d-flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", maxWidth: "500px" }}
                      />
                      {/* <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <i className="far fa-eye-slash"></i>
                          ) : (
                            <i className="far fa-eye"></i>
                          )}
                        </button>
                      </div> */}
                    </div>
                    <small
                      id="edit-pass--description"
                      className="description form-text text-left text-muted"
                      //style={{ color: "lightgrey" }}
                    >
                      Enter the password that accompanies your username.
                    </small>
                  </div>

                  <div className="mt-5">
                    <button
                      className="orange_buttton  btn-lg btn-block text-white"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>

                  <hr className="my-3" />

                  <div className="mt-1 d-flex align-items-center justify-content-center">
                    <p className="mb-0">Don't have an account yet?</p>
                    <Link className="btn btn-link" to="/register">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
