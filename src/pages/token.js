// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchAccessToken } from '../redux/store';

// const YourComponent = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAccessToken());
//   }, [dispatch]);

//   return (
//    <>
//     <h1>sukhfg</h1>
//     {fetchAccessToken}
//    </>
//   );
// };

// export default YourComponent;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAccessToken } from '../redux/store'; // Assuming you have actions set up

// const YourFunctionalComponent = () => {
//   const dispatch = useDispatch();
//   const accessToken = useSelector((state) => state.auth.accessToken);

//   useEffect(() => {
//     dispatch(fetchAccessToken('username', 'password'));
//   }, [dispatch]);

//   return <div>{accessToken}</div>;
// };

// export default YourFunctionalComponent;

// import React, { useState } from 'react';

// const AccessTokenComponent = () => {
//   const [token, setToken] = useState('');

//   const fetchToken = async () => {
//     try {
//       const response = await fetch('/.netlify/functions/getAccessToken');
//       const data = await response.json();
//       setToken(data.accessToken);
//     } catch (error) {
//       console.error('Error fetching token:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchToken}>Get Access Token</button>
//       <div>
//         <h1>Access Token:</h1>
//         <pre>{token}</pre>
//       </div>
//     </div>
//   );
// };

// export default AccessTokenComponent;
// import React, { useEffect } from 'react';
// import Cookies from 'js-cookie';
// import token from "../../token";

// const NewComponent = () => {
//   useEffect(() => {
//     // Set the token in cookies when the component mounts
//     Cookies.set('token', token);
//   }, []);

//   return (
//     <div>
//       <h1>Token</h1>
//       <p>{token}</p>
//     </div>
//   );
// }

// export default NewComponent;

// src/components/MyComponent.js

// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import fetchAccessToken from '../../fetchAccessToken'; // Adjust the path accordingly

// const MyComponent = () => {
//   const [currentToken, setCurrentToken] = useState('');

//   useEffect(() => {
//     const setToken = async () => {
//       const token = await fetchAccessToken(); // Call fetchAccessToken to get the token
//       setCurrentToken(token);
//     }

//     setToken();
//   }, []);

//   useEffect(() => {
//     // Set the token in cookies whenever it changes
//     Cookies.set('accessToken', currentToken);
//   }, [currentToken]);

//   return (
//     <div>
//       <h1>Token</h1>
//       <p>{currentToken}</p>
//     </div>
//   );
// }

// export default MyComponent;

// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';

// const MyComponent = () => {
//   const [currentToken, setCurrentToken] = useState('');

//   useEffect(() => {
//     const fetchAccessToken = async () => {
//       try {
//         const response = await fetch('https://imaginative-sprite-320f1b.netlify.app/.netlify/functions/retrieveToken');
//         const data = await response.json();
//         return data.accessToken;
//       } catch (error) {
//         console.error('Error fetching access token:', error);
//         return null;
//       }
//     };

//     const setToken = async () => {
//       const token = await fetchAccessToken(); // Call fetchAccessToken to get the token
//       setCurrentToken(token);
//     }

//     setToken();
//   }, []);

//   useEffect(() => {
//     // Set the token in cookies whenever it changes
//     if (currentToken) {
//       Cookies.set('accessToken', currentToken);
//     }
//   }, [currentToken]);

//   return (
//     <div>
//       <h1>Token</h1>
//       <p>{currentToken}</p>
//     </div>
//   );
// }

// export default MyComponent;

// import React, { useEffect, useState } from "react";
// import fetchAccessToken from "../../fetchAccessToken";
// import { accessToken } from "../../fetchAccessToken";

// const YourComponent = () => {
//   // const [accessToken, setAccessToken] = useState(null);

//   // useEffect(() => {
//   //   const getAccessToken = async () => {
//   //     const token = await fetchAccessToken();

//   //     if (token) {
//   //       // Access token retrieved successfully
//   //       console.log("Access Token:", token);

//   //       // Set the access token to the state
//   //       setAccessToken(token);

//   //       // You can use the accessToken for API calls or other purposes here
//   //       // ...
//   //     } else {
//   //       // Handle error case if access token couldn't be retrieved
//   //       console.error("Error fetching access token");
//   //     }
//   //   };

//   //   getAccessToken();
//   // }, []); // Empty dependency array ensures this effect runs once on component mount

//   return (
//     <div>
//       {/* Your component JSX goes here */}
//       <div>Access Token: {accessToken}</div>
//     </div>
//   );
// };

// export default YourComponent;






// import React, { useEffect, useState } from 'react';
// import { fetchAccessToken, accessToken } from '../../fetchAccessToken';

// const YourComponent = () => {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       const token = await fetchAccessToken();
//       setToken(token);
//     }, 10000); // Adjust the interval as needed

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* Your component JSX goes here */}
//       Bearer Token: {token} {/* Display the accessToken if needed */}
//     </div>
//   );
// };

// export default YourComponent;

import React from 'react'

const token = () => {
  return (
    <div>token</div>
  )
}

export default token


