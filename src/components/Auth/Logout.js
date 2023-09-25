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

import React from "react";
import axios from "axios";
import { Link, navigate } from "gatsby";
import Cookies from "js-cookie";

const Logout = () => {
  const oauthToken = JSON.parse(localStorage.getItem("userData"));

  const csrf = oauthToken ? oauthToken.csrf_token : null;
  console.log("csrf", csrf);
  const logout = oauthToken ? oauthToken.logout_token : null;
  console.log("logout", logout);

  // const handleLogout = async () => {
  //   try {
  //     const oauthToken = JSON.parse(localStorage.getItem("userData"));
  //     const logout = oauthToken.logout_token;
  //     const csrf = oauthToken.csrf_token;

  //     // // Retrieve the session cookie
  //     // const sessionCookie = Cookies.get('SESS1e21079a51c3510c9d34056c895d1852');
  //     // console.log("sessionCookie",sessionCookie)

  //     const response = await axios.post(
  //       `https://robustapihub.io/user/logout?_format=json&token=${logout}`,
  //       null,
  //       {
  //         headers: {
  //           // Cookie: `SESS1e21079a51c3510c9d34056c895d1852=${sessionCookie}`,
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Methods": "POST",
  //           "Access-Control-Allow-Headers": "Content-Type, Authorization",
  //         },
  //       }
  //     );

  //     if (response.status === 204) {
  //       //Cookies.remove('userData', { path: '/teams' });
  //       localStorage.removeItem("userData");
  //       navigate("/");
  //     } else if (response.status === 403) {
  //       console.error("Logout failed with status 403 Forbidden");
  //       alert("You don't have permission to perform this action.");
  //     } else {
  //       throw new Error(`Logout failed with status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     console.error("Error during Drupal logout:", error);
  //     alert("An error occurred during logout.");
  //   }
  // };
  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch("https://robustapihub.io/user/logout?_format=json", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       localStorage.removeItem("userData");
  //       alert("Logout successful");
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Logout failed. Error: ${errorData.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while logging out.");
  //   }
  // };

  // const handleLogout = async () => {
  //   try {
  //     const oauthToken = JSON.parse(localStorage.getItem("userData"));
  //     const csrfToken = oauthToken.csrf_token;
  //     const logoutToken = oauthToken.logout_token;

  //     const url = `https://robustapihub.io/user/logout?_format=json`;
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-CSRF-Token": csrfToken,
  //         "X-Logout-Token": logoutToken,
  //       },
  //       credentials: "include",
  //     });

  //     if (response.ok) {
  //       localStorage.removeItem("userData");
  //       alert("Logout successful");
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Logout failed. Error: ${errorData.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while logging out.");
  //   }
  // };

  const handleLogout = async () => {
    try {
      const oauthToken = JSON.parse(localStorage.getItem("userData"));
      const csrfToken = oauthToken ? oauthToken.csrf_token : null;
      const logoutToken = oauthToken ? oauthToken.logout_token : null;

      const url = `https://robustapihub.io/user/logout?_format=json&token=${logoutToken}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        localStorage.removeItem("userData");
        alert("Logout successful");
      } else {
        const errorData = await response.json();
        alert(`Logout failed. Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging out.");
    }
  };

  return (
    <div>
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default Logout;

// import React from "react";
// import { navigate } from "gatsby";

// const Logout = () => {
//   const handleLogout = () => {
//     try {
//       const oauthToken = JSON.parse(localStorage.getItem("userData"));
//       const logout = oauthToken.logout_token;
//       const name = oauthToken.current_user.name;

//       const xhr = new XMLHttpRequest();

//       xhr.open("POST", `https://robustapihub.io/user/logout?_format=json&token=${logout}`);
//       xhr.setRequestHeader("Content-Type", "application/json");
//       xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//       xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
//       xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

//       xhr.onload = function() {
//         if (xhr.status === 204) {
//           localStorage.removeItem("userData");
//           navigate("/login");
//         } else if (xhr.status === 403) {
//           console.error("Logout failed with status 403 Forbidden");
//           alert("You don't have permission to perform this action.");
//         } else {
//           throw new Error(`Logout failed with status: ${xhr.status}`);
//         }
//       };

//       xhr.onerror = function() {
//         console.error("Error during Drupal logout");
//         alert("An error occurred during logout.");
//       };

//       xhr.send();
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
