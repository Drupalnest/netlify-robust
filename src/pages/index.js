import React, { useEffect, useState } from "react";
import Login from "./login";
import Teams from "../pages/teams"; // Assuming this is the correct import path for Teams
import App from "./App";
// import Token from "../components/Auth/Token";
import withAuth from "../components/HOC/withAuth";

//import setInitialTokenInCookie from "../../tokenHandler"
const Index = () => {

  // useEffect(() => {
  //   setInitialTokenInCookie(); // Call the function here
  // }, []); 
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.reload(); // Refresh the page
  //   }, 100); // Delay for 1 second before refreshing
  // }, []);
  return (
    <div>
    {/* <TokenFetcher/> */}
      
      <Teams />

      {/* <Teams /> */}
      {/* <App /> */}
    </div>
  );
};

export default withAuth(Index);

// import React, { useState, useEffect } from "react";
// import { getMyGoogleCalendarsList } from "../utils/calendarApi";
// import { getToken } from "../utils/tokens";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     handleTokenFromQueryParams();
//   }, []);

//   const createGoogleAuthLink = async () => {
//     try {
//       const request = await fetch("http://localhost:8080/createAuthLink", {
//         method: "POST",
//       });
//       const response = await request.json();
//       window.location.href = response.url;
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   const handleTokenFromQueryParams = () => {
//     const query = new URLSearchParams(window.location.search);
//     const accessToken = query.get("accessToken");
//     const refreshToken = query.get("refreshToken");
//     const expirationDate = newExpirationDate();
//     if (accessToken && refreshToken) {
//       storeTokenData(accessToken, refreshToken, expirationDate);
//       setIsLoggedIn(true);
//     }
//   };

//   const newExpirationDate = () => {
//     const expiration = new Date();
//     expiration.setHours(expiration.getHours() + 1);
//     return expiration;
//   };

//   const storeTokenData = (token, refreshToken, expirationDate) => {
//     localStorage.setItem("accessToken", token);
//     localStorage.setItem("refreshToken", refreshToken);
//     localStorage.setItem("expirationDate", expirationDate);
//   };

//   const signOut = () => {
//     setIsLoggedIn(false);
//     localStorage.clear();
//   };

//   const handleGetCalendars = async () => {
//     try {
//       await getMyGoogleCalendarsList();
//     } catch (error) {
//       console.log("Error getting calendars:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Google Calendar App</h1>
//       {!isLoggedIn ? (
//         <button onClick={createGoogleAuthLink}>Login with Google</button>
//       ) : (
//         <>
//           <button onClick={handleGetCalendars}>Get Google Calendars</button>
//           <button onClick={signOut}>Sign Out</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import { getMyGoogleCalendarsList } from "../utils/calenderApi";
// import { getToken } from "../utils/tokens";
// import Teams from "../components/Teams/Teams";

// const Index = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     handleTokenFromQueryParams();
//   }, []);

//   const createGoogleAuthLink = async () => {
//     try {
//       const request = await fetch("http://localhost:8000/createAuthLink", {
//         method: "POST",
//       });
//       const response = await request.json();
//       window.location.href = response.url;
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   const handleTokenFromQueryParams = () => {
//     const query = new URLSearchParams(window.location.search);
//     const accessToken = query.get("accessToken");
//     const refreshToken = query.get("refreshToken");
//     const expirationDate = newExpirationDate();
//     if (accessToken && refreshToken) {
//       storeTokenData(accessToken, refreshToken, expirationDate);
//       setIsLoggedIn(true);
//     }
//   };

//   const newExpirationDate = () => {
//     const expiration = new Date();
//     expiration.setHours(expiration.getHours() + 1);
//     return expiration;
//   };

//   const storeTokenData = (token, refreshToken, expirationDate) => {
//     localStorage.setItem("accessToken", token);
//     localStorage.setItem("refreshToken", refreshToken);
//     localStorage.setItem("expirationDate", expirationDate);
//   };

//   const signOut = () => {
//     setIsLoggedIn(false);
//     localStorage.clear();
//   };

//   const handleGetCalendars = async () => {
//     try {
//       await getMyGoogleCalendarsList();
//     } catch (error) {
//       console.log("Error getting calendars:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Google Calendar App</h1>
//       {!isLoggedIn ? (
//         <button onClick={createGoogleAuthLink}>Login with Google</button>
//       ) : (
//         <>
//           <button onClick={handleGetCalendars}>Get Google Calendars</button>
//           <button onClick={signOut}>Sign Out</button>
//           <Teams />
//         </>
//       )}
//     </div>
//   );
// };

// export default Index;
