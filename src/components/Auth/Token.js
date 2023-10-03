// import React, { useEffect } from "react";
// import Cookies from "js-cookie";

// const TokenFetcher = () => {
//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/getAccessToken");
//         const data = await response.json();

//         const accessToken = data.accessToken;

//         if (accessToken) {
//           Cookies.set("tokenn", accessToken, {
//             expires: 7,
//             SameSite: "None",
//             Secure: true,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching access token:", error);
//       }
//     };

//     // Set up a timer to fetch the token every minute
//     const timer = setInterval(fetchToken, 60000); // Fetch token every 1 minute

//     // Call fetchToken immediately
//     fetchToken();

//     // Clear the timer when the component is unmounted
//     return () => clearInterval(timer);
//   }, []); // Empty dependency array means this effect runs once on mount

//   return null; // This component doesn't render anything
// };

// export default TokenFetcher;



// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";

// const TokenFetcher = () => {
//   const [refreshed, setRefreshed] = useState(false);

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/getAccessToken");
//         const data = await response.json();

//         const accessToken = data.accessToken;

//         if (accessToken) {
//           Cookies.set("tokenn", accessToken, {
//             expires: 7,
//             SameSite: "None",
//             Secure: true,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching access token:", error);
//       }
//     };

//     const isFirstVisit = localStorage.getItem("visited");

//     if (!isFirstVisit) {
//       localStorage.setItem("visited", "true");
//       setRefreshed(true);
//     }

//     if (refreshed) {
//       // Fetch the token if refreshed
//       fetchToken();
//     }

//     // Set up a timer to fetch the token every minute
//     const timer = setInterval(fetchToken, 60000); // Fetch token every 1 minute

//     // Clear the timer when the component is unmounted
//     return () => clearInterval(timer);
//   }, [refreshed]); // Include refreshed as a dependency

//   return null; // This component doesn't render anything
// };

// export default TokenFetcher;


// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";

// const TokenFetcher = () => {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/getAccessToken");
//         const data = await response.json();

//         const accessToken = data.accessToken;

//         if (accessToken) {
//           Cookies.set("tokenn", accessToken, {
//             expires: 7,
//             SameSite: "None",
//             Secure: true,
//           });
//           setToken(accessToken); // Set token state
//         }
//       } catch (error) {
//         console.error("Error fetching access token:", error);
//       }
//     };

//     fetchToken();
//   }, []); // Empty dependency array means this effect runs once on mount

//   return null; // This component doesn't render anything
// };

// export default TokenFetcher;


import React from 'react'

const Token = () => {
  return (
    <div>Token</div>
  )
}

export default Token
