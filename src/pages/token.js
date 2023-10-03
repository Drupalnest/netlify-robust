
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

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import token from "../../token";

const NewComponent = () => {
  const [currentToken, setCurrentToken] = useState(token);

  useEffect(() => {
    // Set the token in cookies whenever it changes
    Cookies.set('accessToken', currentToken);
  }, [currentToken]);

  // Assuming there's a way to update the token (e.g., a function setToken)
  const setNewToken = () => {
    const newToken = 'new_token_value'; // Update this with the new token value
    setCurrentToken(newToken);
  }

  return (
    <div>
      <h1>Token</h1>
      <p>{currentToken}</p>
    </div>
  );
}

export default NewComponent;



