// import React, { useState } from 'react';
// import axios from 'axios';

// const Logout = () => {
//   const [logoutStatus, setLogoutStatus] = useState(null);

//   const handleLogout = async () => {

//     let currentUser, csrfToken, logoutToken, roles;

//     const userDataString = localStorage.getItem('userData');

//     if (userDataString) {
//       const userData = JSON.parse(userDataString);

//       currentUser = userData.current_user;
//       csrfToken = userData.csrf_token;
//       logoutToken = userData.logout_token;
//       roles = currentUser.roles;

//       console.log('Current User:', currentUser);
//       console.log('CSRF Token:', csrfToken);
//       console.log('Logout Token:', logoutToken);
//       console.log('Roles:', roles);
//     } else {
//       console.error('userData not found in localStorage');
//     }

//     // Now you can use currentUser, csrfToken, logoutToken, and roles here
//     console.log('Current User (Outside):', currentUser);
//     console.log('CSRF Token (Outside):', csrfToken);
//     console.log('Logout Token (Outside):', logoutToken);
//     console.log('Roles (Outside):', roles);

//     try {
//       const response = await axios.post(
//         `https://robustapihub.io/user/logout?_format=json&token=${logoutToken}`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'csrf_token': csrfToken,
//           },
//         }
//       );

//       setLogoutStatus(response.status);
//       // Handle successful logout if needed
//     } catch (error) {
//       console.error('Error:', error);
//       setLogoutStatus(error.response.status);
//       // Handle logout error if needed
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       {logoutStatus && <p>Logout Status: {logoutStatus}</p>}
//     </div>
//   );
// };

// export default Logout;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { navigate } from 'gatsby';

// const Logout = () => {
//   const [logoutStatus, setLogoutStatus] = useState(null);

//   const handleLogout = async () => {
//        let currentUser, csrfToken, logoutToken, roles;

//     const userDataString = localStorage.getItem('userData');

//     if (userDataString) {
//       const userData = JSON.parse(userDataString);

//       currentUser = userData.current_user;
//       csrfToken = userData.csrf_token;
//       logoutToken = userData.logout_token;
//       roles = currentUser.roles;

//       console.log('Current User:', currentUser);
//       console.log('CSRF Token:', csrfToken);
//       console.log('Logout Token:', logoutToken);
//       console.log('Roles:', roles);
//     } else {
//       console.error('userData not found in localStorage');
//     }

//     // Now you can use currentUser, csrfToken, logoutToken, and roles here
//     console.log('Current User (Outside):', currentUser);
//     console.log('CSRF Token (Outside):', csrfToken);
//     console.log('Logout Token (Outside):', logoutToken);
//     console.log('Roles (Outside):', roles);

//     try {
//       const response = await axios.post(
//         `https://robustapihub.io/user/logout?_format=json&token=${logoutToken}`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'csrf_token': csrfToken,
//           },
//         }
//       );

//       setLogoutStatus(response.status);

//       // If logout is successful, navigate to login page
//       if (response.status === 200) {
//         // Assuming you have a function to handle navigation
//         // Replace it with the actual function you use for navigation
//         navigate("/");
//       }

//     } catch (error) {
//       console.error('Error:', error);
//       setLogoutStatus(error.response.status);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       {logoutStatus && <p>Logout Status: {logoutStatus}</p>}
//     </div>
//   );
// };

// export default Logout;

// import React, { useState } from "react";
// import { navigate } from "gatsby";

// const Logout = () => {
//   const [logoutStatus, setLogoutStatus] = useState(null);

//   const drupalLogout = async () => {
//     try {
//       const oauthToken = JSON.parse(localStorage.getItem("userData"));

//       if (!oauthToken || !oauthToken.logout_token || !oauthToken.csrf_token) {
//         throw new Error("OAuth token not found in local storage");
//       }

//       const { logout_token, csrf_token } = oauthToken;

//       const res = await fetch(
//         `https://robustapihub.io/user/logout?_format=json&token=${logout_token}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "csrf_token": csrf_token,
//           },
//         }
//       );

//       if (res.ok) {
//         return true;
//       } else {
//         throw new Error(`Logout failed with status: ${res.status}`);
//       }
//     } catch (error) {
//       console.error("Error during Drupal logout:", error);
//       throw error;
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const success = await drupalLogout();

//       if (success) {
//         localStorage.removeItem("userData");
//         setLogoutStatus(204);
//         navigate("/login");
//       } else {
//         setLogoutStatus(500);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setLogoutStatus(500);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       {logoutStatus && <p>Logout Status: {logoutStatus}</p>}
//     </div>
//   );
// };

// export default Logout;

// import React, { useState } from "react";
// import axios from "axios"; // Import Axios
// import { navigate } from "gatsby";

// const Logout = () => {
//   const [logoutStatus, setLogoutStatus] = useState(null);

//   const oauthToken = JSON.parse(localStorage.getItem("userData"));
//       const logout = oauthToken.logout_token;
//       const csrf = oauthToken.csrf_token;

//       const name = oauthToken.name;
//       console.log("name",name)

//        console.log("logout_token", logout);
//       // console.log("csrf_token", csrf);

//   const drupalLogout = async () => {
//     try {

//       const res = await axios.post(
//         `https://robustapihub.io/user/logout?_format=json&token=${logout}`,
//         // {
//         //   name: username,
//         //   pass: password,
//         // },

//       );

//       console.log("response", res);

//       if (res.status === 204) {
//         return true;
//       } else {
//         throw new Error(`Logout failed with status: ${res.status}`);
//       }
//     } catch (error) {
//       console.error("Error during Drupal logout:", error);
//       throw error;
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const success = await drupalLogout();

//       if (success) {
//         setLogoutStatus(204);
//         localStorage.removeItem("userData");

//         navigate("/login");
//       } else {
//         setLogoutStatus(500);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setLogoutStatus(500);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       {/* {logoutStatus && <p>Logout Status: {logoutStatus}</p>} */}
//     </div>
//   );
// };

// export default Logout;

// import React from "react";
// import { navigate } from "gatsby";

// const Logout = () => {
//   const handleLogout = async () => {
//     try {
//       const oauthToken = JSON.parse(localStorage.getItem("userData"));
//       const logout = oauthToken.logout_token;
//       const csrf = oauthToken.csrf_token;
//       const name = oauthToken.current_user.name;

//       console.log("name", name);
//       console.log("logout_token", logout);

//       const response = await fetch(`https://robustapihub.io/user/logout?_format=json&token=${logout}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           //"X-CSRF-Token": csrf, // Include CSRF token in headers
//         },
//         body: JSON.stringify({
//           name: name,
//         }),
//       });

//       if (response.status === 204) {
//         localStorage.removeItem("userData");
//         navigate("/login");
//       } else if (response.status === 403) {
//         console.error("Logout failed with status 403 Forbidden");
//         alert("You don't have permission to perform this action.");
//       } else {
//         throw new Error(`Logout failed with status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Error during Drupal logout:", error);
//       alert("An error occurred during logout.");
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Logout;

// ajay.gadhavana+2@gmail.com

// ajay.gadhavana+1@gmail.com

// import React from "react";
// import { navigate } from "gatsby";

// const Logout = () => {
//   const oauthToken = JSON.parse(localStorage.getItem("userData"));
//   console.log("oauthToken", oauthToken);
//   const logout = oauthToken.logout_token;
//   //const csrf = oauthToken.csrf_token;
//   const name = oauthToken.current_user.name;

//   console.log("name", name);
//   console.log("logout_token", logout);

//   const handleLogout = async () => {
//     try {
//       const response = await fetch(
//         `https://robustapihub.io/user/logout?_format=json&token=${logout}`,
//         {
//           method: "POST",
//           // headers: {
//           //   //"Content-Type": "application/json",
//           //   "Access-Control-Allow-Origin": "*",
//           //   "Access-Control-Allow-Methods": "POST",
//           //   "Access-Control-Allow-Headers": "Content-Type, Authorization",
//           // },

//           // body: JSON.stringify({
//           //   name: name,
//           // }),
//         }
//       );

//       if (response.status === 204) {
//         localStorage.removeItem("userData");
//         navigate("/login");
//       } else if (response.status === 403) {
//         console.error("Logout failed with status 403 Forbidden");
//         alert("You don't have permission to perform this action.");
//       } else {
//         throw new Error(`Logout failed with status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Error during Drupal logout:", error);
//       alert("An error occurred during logout.");
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Logout;

// import React from "react";
// import axios from "axios";
// import { Link, navigate } from "gatsby";
// import Cookies from "js-cookie";

// const Logout = () => {
//   const oauthToken = JSON.parse(localStorage.getItem("userData"));

//   const csrf = oauthToken ? oauthToken.csrf_token : null;
//   console.log("csrf", csrf);
//   const logout = oauthToken ? oauthToken.logout_token : null;
//   console.log("logout", logout);

//   // const handleLogout = async () => {
//   //   try {
//   //     const oauthToken = JSON.parse(localStorage.getItem("userData"));
//   //     const logout = oauthToken.logout_token;
//   //     const csrf = oauthToken.csrf_token;

//   //     // // Retrieve the session cookie
//   //     // const sessionCookie = Cookies.get('SESS1e21079a51c3510c9d34056c895d1852');
//   //     // console.log("sessionCookie",sessionCookie)

//   //     const response = await axios.post(
//   //       `https://robustapihub.io/user/logout?_format=json&token=${logout}`,
//   //       null,
//   //       {
//   //         headers: {
//   //           // Cookie: `SESS1e21079a51c3510c9d34056c895d1852=${sessionCookie}`,
//   //           "Content-Type": "application/json",
//   //           "Access-Control-Allow-Origin": "*",
//   //           "Access-Control-Allow-Methods": "POST",
//   //           "Access-Control-Allow-Headers": "Content-Type, Authorization",
//   //         },
//   //       }
//   //     );

//   //     if (response.status === 204) {
//   //       //Cookies.remove('userData', { path: '/teams' });
//   //       localStorage.removeItem("userData");
//   //       navigate("/");
//   //     } else if (response.status === 403) {
//   //       console.error("Logout failed with status 403 Forbidden");
//   //       alert("You don't have permission to perform this action.");
//   //     } else {
//   //       throw new Error(`Logout failed with status: ${response.status}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during Drupal logout:", error);
//   //     alert("An error occurred during logout.");
//   //   }
//   // };
//   // const handleLogout = async () => {
//   //   try {
//   //     const response = await fetch("https://robustapihub.io/user/logout?_format=json", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     });

//   //     if (response.ok) {
//   //       localStorage.removeItem("userData");
//   //       alert("Logout successful");
//   //     } else {
//   //       const errorData = await response.json();
//   //       alert(`Logout failed. Error: ${errorData.message}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("An error occurred while logging out.");
//   //   }
//   // };

//   // const handleLogout = async () => {
//   //   try {
//   //     const oauthToken = JSON.parse(localStorage.getItem("userData"));
//   //     const csrfToken = oauthToken.csrf_token;
//   //     const logoutToken = oauthToken.logout_token;

//   //     const url = `https://robustapihub.io/user/logout?_format=json`;
//   //     const response = await fetch(url, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         "X-CSRF-Token": csrfToken,
//   //         "X-Logout-Token": logoutToken,
//   //       },
//   //       credentials: "include",
//   //     });

//   //     if (response.ok) {
//   //       localStorage.removeItem("userData");
//   //       alert("Logout successful");
//   //     } else {
//   //       const errorData = await response.json();
//   //       alert(`Logout failed. Error: ${errorData.message}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("An error occurred while logging out.");
//   //   }
//   // };

//   const handleLogout = async () => {
//     try {
//       const oauthToken = JSON.parse(localStorage.getItem("userData"));
//       const csrfToken = oauthToken ? oauthToken.csrf_token : null;
//       const logoutToken = oauthToken ? oauthToken.logout_token : null;

//       const url = `https://robustapihub.io/user/logout?_format=json&token=${logoutToken}`;
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       if (response.ok) {
//         localStorage.removeItem("userData");
//         alert("Logout successful");
//       } else {
//         const errorData = await response.json();
//         alert(`Logout failed. Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// // import React from "react";
// // import { navigate } from "gatsby";

// // const Logout = () => {
// //   const handleLogout = () => {
// //     try {
// //       const oauthToken = JSON.parse(localStorage.getItem("userData"));
// //       const logout = oauthToken.logout_token;
// //       const name = oauthToken.current_user.name;

// //       const xhr = new XMLHttpRequest();

// //       xhr.open("POST", `https://robustapihub.io/user/logout?_format=json&token=${logout}`);
// //       xhr.setRequestHeader("Content-Type", "application/json");
// //       xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// //       xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
// //       xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

// //       xhr.onload = function() {
// //         if (xhr.status === 204) {
// //           localStorage.removeItem("userData");
// //           navigate("/login");
// //         } else if (xhr.status === 403) {
// //           console.error("Logout failed with status 403 Forbidden");
// //           alert("You don't have permission to perform this action.");
// //         } else {
// //           throw new Error(`Logout failed with status: ${xhr.status}`);
// //         }
// //       };

// //       xhr.onerror = function() {
// //         console.error("Error during Drupal logout");
// //         alert("An error occurred during logout.");
// //       };

// //       xhr.send();
// //     } catch (error) {
// //       console.error("Error during Drupal logout:", error);
// //       alert("An error occurred during logout.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleLogout}>Logout</button>
// //     </div>
// //   );
// // };

// // export default Logout;

// import React from "react";
// import axios from "axios";
// import { Link, navigate } from "gatsby";
// import Cookies from "js-cookie";

// const Logout = () => {
//   const oauthToken = JSON.parse(localStorage.getItem("userData"));

//   // const csrf = oauthToken ? oauthToken.csrf_token : null;
//   // console.log("csrf", csrf);
//   // const logout = oauthToken ? oauthToken.logout_token : null;
//   // console.log("logout", logout);

//   // const handleLogout = async () => {
//   //   try {
//   //     const oauthToken = JSON.parse(localStorage.getItem("userData"));
//   //     const logout = oauthToken.logout_token;
//   //     const csrf = oauthToken.csrf_token;

//   //     // // Retrieve the session cookie
//   //     // const sessionCookie = Cookies.get('SESS1e21079a51c3510c9d34056c895d1852');
//   //     // console.log("sessionCookie",sessionCookie)

//   //     const response = await axios.post(
//   //       `https://robustapihub.io/user/logout?_format=json&token=${logout}`,
//   //       null,
//   //       {
//   //         headers: {
//   //           // Cookie: `SESS1e21079a51c3510c9d34056c895d1852=${sessionCookie}`,
//   //           "Content-Type": "application/json",
//   //           "Access-Control-Allow-Origin": "*",
//   //           "Access-Control-Allow-Methods": "POST",
//   //           "Access-Control-Allow-Headers": "Content-Type, Authorization",
//   //         },
//   //       }
//   //     );

//   //     if (response.status === 204) {
//   //       //Cookies.remove('userData', { path: '/teams' });
//   //       localStorage.removeItem("userData");
//   //       navigate("/");
//   //     } else if (response.status === 403) {
//   //       console.error("Logout failed with status 403 Forbidden");
//   //       alert("You don't have permission to perform this action.");
//   //     } else {
//   //       throw new Error(`Logout failed with status: ${response.status}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during Drupal logout:", error);
//   //     alert("An error occurred during logout.");
//   //   }
//   // };
//   // const handleLogout = async () => {
//   //   try {
//   //     const response = await fetch("https://robustapihub.io/user/logout?_format=json", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     });

//   //     if (response.ok) {
//   //       localStorage.removeItem("userData");
//   //       alert("Logout successful");
//   //     } else {
//   //       const errorData = await response.json();
//   //       alert(`Logout failed. Error: ${errorData.message}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("An error occurred while logging out.");
//   //   }
//   // };

//   // const handleLogout = async () => {
//   //   try {
//   //     const oauthToken = JSON.parse(localStorage.getItem("userData"));
//   //     const csrfToken = oauthToken.csrf_token;
//   //     const logoutToken = oauthToken.logout_token;

//   //     const url = `https://robustapihub.io/user/logout?_format=json`;
//   //     const response = await fetch(url, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         "X-CSRF-Token": csrfToken,
//   //         "X-Logout-Token": logoutToken,
//   //       },
//   //       credentials: "include",
//   //     });

//   //     if (response.ok) {
//   //       localStorage.removeItem("userData");
//   //       alert("Logout successful");
//   //     } else {
//   //       const errorData = await response.json();
//   //       alert(`Logout failed. Error: ${errorData.message}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("An error occurred while logging out.");
//   //   }
//   // };

//   const handleLogout = async () => {
//     try {
//       const oauthToken = JSON.parse(localStorage.getItem("userData"));
//       const csrfToken = oauthToken ? oauthToken.csrf_token : null;
//       const logoutToken = oauthToken ? oauthToken.logout_token : null;

//       const url = `https://robustapihub.io/user/logout?_format=json&token=${logoutToken}`;
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       if (response.ok) {
//         localStorage.removeItem("userData");
//         alert("Logout successful");
//       } else {
//         const errorData = await response.json();
//         alert(`Logout failed. Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// // import React from "react";
// // import { navigate } from "gatsby";

// // const Logout = () => {
// //   const handleLogout = () => {
// //     try {
// //       const oauthToken = JSON.parse(localStorage.getItem("userData"));
// //       const logout = oauthToken.logout_token;
// //       const name = oauthToken.current_user.name;

// //       const xhr = new XMLHttpRequest();

// //       xhr.open("POST", `https://robustapihub.io/user/logout?_format=json&token=${logout}`);
// //       xhr.setRequestHeader("Content-Type", "application/json");
// //       xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// //       xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
// //       xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

// //       xhr.onload = function() {
// //         if (xhr.status === 204) {
// //           localStorage.removeItem("userData");
// //           navigate("/login");
// //         } else if (xhr.status === 403) {
// //           console.error("Logout failed with status 403 Forbidden");
// //           alert("You don't have permission to perform this action.");
// //         } else {
// //           throw new Error(`Logout failed with status: ${xhr.status}`);
// //         }
// //       };

// //       xhr.onerror = function() {
// //         console.error("Error during Drupal logout");
// //         alert("An error occurred during logout.");
// //       };

// //       xhr.send();
// //     } catch (error) {
// //       console.error("Error during Drupal logout:", error);
// //       alert("An error occurred during logout.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleLogout}>Logout</button>
// //     </div>
// //   );
// // };

// // export default Logout;

// import { navigate } from "gatsby";
// import React from "react";

// const Logout = () => {
//   const handleLogout = () => {
//     try {
//       // Assuming you have a response object (you'll get this from your API)
//       // const response = await fetch("your_logout_endpoint_here", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //     Authorization: `Bearer ${localStorage.getItem("userData")}`
//       //   }
//       // });

//       // Assuming response.ok for success and response.json() for error data
//       // if (response.ok) {
//         localStorage.removeItem("logout_token");
//       alert("Logout successful");
//       navigate("/login")
//       // } else {
//       //   const errorData = await response.json();
//       //   alert(`Logout failed. Error: ${errorData.message}`);
//       // }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// import { navigate } from "gatsby";
// import React, { useState, useEffect } from "react";

// const Logout = () => {
//   const handleLogout = () => {
//     try {
//       localStorage.removeItem("logout_token");
//       alert("Logout successful");
//       navigate("/login");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   // Set up a timer for 15 minutes of inactivity
//   useEffect(() => {
//     let inactivityTimer;

//     const resetTimer = () => {
//       clearTimeout(inactivityTimer);
//       inactivityTimer = setTimeout(() => {
//         handleLogout();
//       }, 15 * 60 * 1000); // 15 minutes
//     };

//     // Reset the timer on user activity
//     window.addEventListener("mousemove", resetTimer);
//     window.addEventListener("keydown", resetTimer);

//     // Clean up the event listeners when component is unmounted
//     return () => {
//       clearTimeout(inactivityTimer);
//       window.removeEventListener("mousemove", resetTimer);
//       window.removeEventListener("keydown", resetTimer);
//     };
//   }, []);

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";
// import { trackEvent, trackErrorEvent,resetEvents } from "../../redux/store"; // Make sure to import the trackLogoutEvent action

// const Logout = () => {
//   const dispatch = useDispatch();
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);

//   const handleLogout = () => {
//     try {
//       // Perform any logout related tasks (e.g., clearing tokens, etc.)
//       localStorage.removeItem("logout_token");

//       alert("Logout successful");

//       // Track the logout event
//       dispatch(
//         trackEvent({
//           timestamp: new Date(),
//           page: "Logout Page",
//           button: "Logout Button",
//         })
//       );

//       // Redirect to the login page
//       dispatch(resetEvents()); // Dispatch the action to reset events
//       navigate("/login");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
// } from "../../redux/store";

// const Logout = () => {
//   const dispatch = useDispatch();
//   const events = useSelector((state) => state.eventLoginReducer.events);

//   const handleLogout = () => {
//     try {
//       // Save events to a text file
//       const eventsText = events.map((event) => JSON.stringify(event)).join("\n");
//       const blob = new Blob([eventsText], { type: "text/plain" });
//       const link = document.createElement("a");
//       link.href = window.URL.createObjectURL(blob);
//       link.download = "events.txt";
//       link.click();

//       // Perform any logout related tasks (e.g., clearing tokens, etc.)
//       localStorage.removeItem("logout_token");

//       alert("Logout successful");

//       // Track the logout event
//       dispatch(
//         trackEvent({
//           timestamp: new Date(),
//           page: "Logout Page",
//           button: "Logout Button",
//         })
//       );

//       // Reset events in Redux state
//       dispatch(resetEvents());

//       // Redirect to the login page
//       navigate("/login");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../../redux/store";

// const Logout = () => {
//   const dispatch = useDispatch();
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const loginResponse = useSelector((state) => state.loginReducer.loginResponse);
//   const csrfToken = loginResponse.csrf_token;

//   const handleLogout = async () => {
//     try {
//       // Perform any logout related tasks (e.g., clearing tokens, etc.)
//       localStorage.removeItem("logout_token");

//       alert("Logout successful");

//       // Track the logout event
//       dispatch(
//         trackEvent({
//           timestamp: new Date(),
//           page: "Logout Page",
//           button: "Logout Button",
//         })
//       );

//       // Reset events in Redux state
//       dispatch(resetEvents());

//       // Send the events to the API
//       const response = await fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken, // Add CSRF token to headers
//           "withCredentials":true,

//         },
//         body: JSON.stringify({
//           description: events.map(event => ({ value: event })),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       // Redirect to the login page
//       navigate("/login");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../../redux/store";

// const Logout = () => {
//   const dispatch = useDispatch();
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   const loginResponse = useSelector((state) => state.loginReducer.loginResponse);
//   const csrfToken = loginResponse.csrf_token;
//   console.log("csrfToken",csrfToken)

//   const handleLogout = async () => {
//     try {
//       // Perform any logout related tasks (e.g., clearing tokens, etc.)
//       localStorage.removeItem("logout_token");

//       alert("Logout successful");

//       // Track the logout event

//       // Send the events to the API
//       const response = await fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           "withCredentials": true,
//         },
//         body: JSON.stringify({
//           description: [{
//             value: "vgjhjbhj"
//           }]
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       dispatch(
//         trackEvent({
//           timestamp: new Date(),
//           page: "Logout Page",
//           button: "Logout Button",
//         })
//       );

//       // Reset events in Redux state
//       dispatch(resetEvents());
//       navigate("/login");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";
// import {
//   trackEvent,
//   trackErrorEvent,
//   resetEvents,
//   setLoginResponse,
// } from "../../redux/store";

// const Logout = () => {
//   const dispatch = useDispatch();
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );
//   const csrfToken = loginResponse.csrf_token;

//   // const descriptions = events.map(event => event.responseData.description);

//   // console.log("descriptions",descriptions)

//   const handleLogout = async () => {
//     try {
//       // Perform any logout related tasks (e.g., clearing tokens, etc.)

//       // Track the logout event
//       dispatch(
//         trackEvent({
//           timestamp: new Date(),
//           operation: "Logout Successfully",
//         })
//       );

//       const response = await fetch(
//         "https://robustapihub.io/entity/apigee_log?_format=json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-CSRF-Token": csrfToken,
//             withCredentials: true,
//           },
//           body: JSON.stringify({
//             description: [JSON.stringify(events)],
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       // Reset events in Redux state
//       dispatch(resetEvents());

//       // Send the events to the API

//       // Redirect to the login page
//       localStorage.removeItem("logout_token");

//       alert("Logout successful");
//       navigate("/login");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging out.");
//     }
//   };

//   useEffect(() => {
//     const logoutTimer = setTimeout(() => {
//       handleLogout();
//     }, 600000);

//     return () => {
//       clearTimeout(logoutTimer);
//     };
//   }, []);

//   return (
//     <div>
//       <div onClick={handleLogout}>Logout</div>
//     </div>
//   );
// };

// export default Logout;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "gatsby";
import {
  trackEvent,
  trackErrorEvent,
  resetEvents,
  setLoginResponse,
} from "../../redux/store";

const Logout = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventLoginReducer.events);
  const loginResponse = useSelector(
    (state) => state.loginReducer.loginResponse
  );
  const csrfToken = loginResponse.csrf_token;
  const userName = loginResponse?.current_user?.name;
  console.log("userName", userName);

  const handleLogout = () => {
    fetch("https://robustapihub.io/entity/apigee_log?_format=json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
        withCredentials: true,
      },
      body: JSON.stringify({
        description: [JSON.stringify(events)],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        dispatch(
          trackEvent({
            username: userName,
            timestamp: new Date(),
            operations: `User ${userName} has logged out`,
          })
        );

        dispatch(resetEvents());

        localStorage.removeItem("logout_token");

        alert("Logout successful");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while logging out.");
      });
  };

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     handleLogout();
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []); // Empty dependency array means this effect runs only once when component mounts

  // useEffect(() => {
  //   let logoutTimer;

  //   const handleBeforeUnload = () => {

  //     clearTimeout(logoutTimer);
  //     handleLogout();
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   logoutTimer = setTimeout(() => {
  //     handleLogout();
  //   }, 600000);

  //   return () => {
  //     clearTimeout(logoutTimer);
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <div>
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default Logout;
