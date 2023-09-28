
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
