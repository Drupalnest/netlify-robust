
// import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// const Token = () => {
//   const [accessToken, setAccessToken] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/getAccessToken");
//         const data = await response.json();
//         setAccessToken(data.accessToken);

//         // Set the access token in a cookie to expire in 30 minutes
//         const expirationTime = new Date(new Date().getTime() + 30 * 60 * 1000); // 30 minutes
//         Cookies.set('accessToken', data.accessToken, { expires: expirationTime });
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData(); 

//     const interval = setInterval(fetchData, 60000); 

//     return () => {
//       clearInterval(interval); 
//       Cookies.remove('accessToken'); 
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Your Gatsby App App</h1>
//       <p>Access Token: {accessToken}</p>
//     </div>
//   );
// };

// export default Token;



































// import Cookies from 'js-cookie';

// const tokenExpirationTime = 3600; // Define the expiration time in seconds



// // 1. Get Access Token from Authentication API
// async function getAccessToken(username, password) {
//     const response = await fetch('http://localhost:5000/getAccessToken', {
//       method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({
//     //     username: username,
//     //     password: password,
//     //   }),
//     });
  
//     const data = await response.json();
//     return data.access_token;
//   }
  
//   // 2. Store Access Token (using cookies in this example)
//   function setAccessTokenInCookie(token) {
//     Cookies.set('newtoken', token, { expires: tokenExpirationTime });
//   }
  
//   // 3. Attach Access Token to API Requests
//   function makeApiRequest(endpoint, method, data) {
//     const accessToken = Cookies.get('accessToken');
  
//     return fetch(`https://example.com/api/${endpoint}`, {
//       method: method,
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//   }
  
//   // 4. Handle Token Expiry and Refresh (assuming a refresh token is provided)
//   async function checkAccessTokenValidity() {
//     const accessToken = Cookies.get('accessToken');
//     if (!accessToken) {
//       // Handle case where access token is not available
//       return;
//     }
  
//     // Check if access token is expired (you need to implement this function)
//     const isTokenExpired = isAccessTokenExpired(accessToken);
  
//     if (isTokenExpired) {
//       // Use a refresh token (if provided) to get a new access token
//       const refreshToken = Cookies.get('refreshToken');
//       const newAccessToken = await getNewAccessToken(refreshToken);
  
//       // Store the new access token
//       setAccessTokenInCookie(newAccessToken);
//     }
//   }
  