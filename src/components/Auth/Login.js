// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import { navigate } from "gatsby";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState("");

//   const apiUrl = "https://robustapihub.io/session/token";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET",
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//           },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         setToken(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   console.log(token);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://robustapihub.io/user/login?_format=json",
//         {
//           name: username,
//           pass: password,
//         },
//         {
//           headers: {
//             "X-CSRF-Token": `${token}`,
//           },
//         }
//       );

//       // Handle successful login here
//       console.log("Login successful", response.data);
//       alert("Login successful")
//       localStorage.setItem("userData", JSON.stringify(response.data));
//       navigate("/teams")

//     } catch (error) {
//       // Handle login error here
//       console.error("Error:", error);
//       alert("Incorrect Username and Password")
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="block block--pagetitle bg-lighter py-4">
//                 <div className="container">
//                   <h1 className="page__title mb-0">Log in</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <main className="main" role="main">
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
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
//                           <i className="fas fa-asterisk text-danger form-required__indicator" />
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
//                         />
//                         <small
//                           id="edit-name--description"
//                           className="description form-text text-muted"
//                         >
//                           Enter your Starbucks Developer Portal username.
//                         </small>
//                       </div>
//                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
//                         <label
//                           htmlFor="edit-pass"
//                           className="js-form-required form-required"
//                         >
//                           Password
//                           <i className="fas fa-asterisk text-danger form-required__indicator" />
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
//                           className="button js-form-submit form-submit btn btn-primary"
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
//           <footer className="footer footer-fixed-bottom">
//             <div className="container">
//               <div className="footer__wrapper">
//                 <div className="footer__links">
//                   <ul className="footer__links-list">
//                     <li>
//                       <a href="/terms-use">Terms of Use</a>
//                     </li>
//                     <li>
//                       <a href="mailto:APIGatewaySupport@starbucks.com">
//                         Contact Us
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer__copyright">
//                   <span className="copyright">
//                     © 2023 Starbucks Corporation. All rights reserved
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import { navigate } from "gatsby";
// import Cookies from "js-cookie";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState("");

//   const apiUrl = "https://robustapihub.io/session/token";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET",
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//           },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         setToken(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   console.log("token",token);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const optionsResponse = await fetch(
//         "https://robustapihub.io/user/login?_format=json",
//         {
//           method: "OPTIONS",
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             // "Access-Control-Allow-Methods": "GET, POST",
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//           },
//         }
//       );

//       if (optionsResponse.ok) {
//         const csrfToken = optionsResponse.headers.get("X-CSRF-Token");

//         const postResponse = await fetch(
//           "https://robustapihub.io/user/login?_format=json",
//           {
//             method: "POST",
//             headers: {
//               "X-CSRF-Token": csrfToken,
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               name: username,
//               pass: password,
//             }),
//           }
//         );

//         if (postResponse.ok) {
//           console.log(
//             `[HTTP/3 ${postResponse.status} ${postResponse.statusText}]`
//           );

//           const data = await postResponse.json();
//           console.log("Response data:", data);

//           console.log("Request Headers:", postResponse.headers);
//           console.log("Request Cookies:", postResponse.cookies);

//           alert("Login successful");
//           localStorage.setItem("userData", JSON.stringify(data));

//           const cookies = postResponse.headers.get('set-cookie');
//           console.log("Response Cookies:", cookies);

//           navigate("/teams");
//         } else {
//           console.error("HTTP error! Status:", postResponse.status);
//           alert("Login failed. Please check your credentials.");
//         }
//       } else {
//         console.error(
//           "Options request failed! Status:",
//           optionsResponse.status
//         );
//         alert("An error occurred while logging in.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging in.");
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await fetch("https://robustapihub.io/user/login?_format=json", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",

//   //        },
//   //       body: JSON.stringify({
//   //         name: username,
//   //         pass: password,
//   //       }),
//   //     });

//   //     if (response.ok) {
//   //       const responseData = await response.json();
//   //       console.log("responseData",responseData)

//   //       console.log("Request Headers:",response.headers);

//   //       const cookies = response.headers.get('set-cookie');
//   //       console.log("cookies",cookies)

//   //       localStorage.setItem("userData", JSON.stringify(responseData));
//   //       alert("Login successful");
//   //       navigate("/teams")
//   //     } else {
//   //       const errorData = await response.json();
//   //       alert(`Login failed. Error: ${errorData.message}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("An error occurred while logging in.");
//   //   }
//   // };

//   return (
//     <div>
//       <Header />
//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="block block--pagetitle bg-lighter py-4">
//                 <div className="container">
//                   <h1 className="page__title mb-0">Log in</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <main className="main" role="main">
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
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
//                           <i className="fas fa-asterisk text-danger form-required__indicator" />
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
//                           Enter your Starbucks Developer Portal username.
//                         </small>
//                       </div>
//                       <div className="js-form-item form-item js-form-type-password form-type-password form-item-pass js-form-item-pass form-group">
//                         <label
//                           htmlFor="edit-pass"
//                           className="js-form-required form-required"
//                         >
//                           Password
//                           <i className="fas fa-asterisk text-danger form-required__indicator" />
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
//                           className="button js-form-submit form-submit btn btn-primary"
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

//           <footer className="footer footer-fixed-bottom">
//             <div className="container">
//               <div className="footer__wrapper">
//                 <div className="footer__links">
//                   <ul className="footer__links-list">
//                     <li>
//                       <a href="/terms-use">Terms of Use</a>
//                     </li>
//                     <li>
//                       <a href="mailto:APIGatewaySupport@starbucks.com">
//                         Contact Us
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer__copyright">
//                   <span className="copyright">
//                     © 2023 Starbucks Corporation. All rights reserved
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import { navigate } from "gatsby";
// import Cookies from "js-cookie";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

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
//         console.log("responseData", responseData);

//         console.log("Request Headers:", response.headers);

//         const cookies = response.headers.get("set-cookie");
//         console.log("cookies", cookies);

//         localStorage.setItem("userData", JSON.stringify(responseData));
//         alert("Login successful");
//         navigate("/teams");
//       } else {
//         const errorData = await response.json();
//         alert(`Login failed. Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging in.");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="block block--pagetitle bg-lighter py-4">
//                 <div className="container">
//                   <h1 className="page__title mb-0">Log in</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <main className="main" role="main">
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
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
//                       <i
//                         className="fas fa-asterisk text-danger form-required__indicator"
//                         style={{ fontSize: "0.7em" }}
//                       />
//                     </sup>
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
//                       <i
//                         className="fas fa-asterisk text-danger form-required__indicator"
//                         style={{ fontSize: "0.7em" }}
//                       />
//                     </sup>
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
//     </div>
//   );
// };

// export default Login;



























// import React, { useState } from "react";

// function Login(props) {
//   const [loading, setLoading] = useState(false);
//   const username = useFormInput("");
//   const password = useFormInput("");
//   const [error, setError] = useState(null);

//   // handle button click of login form
//   const handleLogin = () => {
//     setError(null);
//     setLoading(true);
//     // API something like http://example.com/user/login
      
//     const API = "https://robustapihub.io/user/login?_format=json";
      
//     fetch(API, {
//       method: "POST", // Assuming this is a POST request
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded", // Adjust this header if needed
//       },
//       body: `name=${username.value}&pass=${password.value}`,
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
    
//     .then((data) => {
//       // Handle the JSON data
//       sessionStorage.setItem("token", data.token);
//       sessionStorage.setItem("user", JSON.stringify(data.user));
//       props.history.push("/dashboard");
//     })
//     .catch((error) => {
//       setLoading(false);
//       setError(error.message); // Display the error message
//     });
//   };
  

//   return (
//     <div>
//       Login
//       <br />
//       <br />
//       <div>
//         Username
//         <br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password
//         <br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && (
//         <>
//           <small style={{ color: "red" }}>{error}</small>
//           <br />
//         </>
//       )}
//       <br />
//       <input
//         type="button"
//         value={loading ? "Loading..." : "Login"}
//         onClick={handleLogin}
//         disabled={loading}
//       />
//       <br />
//     </div>
//   );
// }

// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return {
//     value,
//     onChange: handleChange,
//   };
// };

// export default Login;





import React, { useState } from 'react';
import { DrupalProvider, useLazyLogin } from 'drupal-react-oauth-provider';

const config = {
  url: 'https://robustapihub.io/user/login?_format=json',
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error, data }] = useLazyLogin();

  const handleLogin = () => {
    login({
      username, // Username input
      password, // Password input
      client_id: 'robustapi',
      client_secret: 'rWwiXEq6EYbnYqHOLTwNZ1TFFntC5gi0',
      grant_type: 'password',
      scope: 'user', // Replace with appropriate Drupal role
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
    </div>
  );
}

function App() {
  return (
    <DrupalProvider config={config}>
      <Login />
    </DrupalProvider>
  );
}

export default App;
