// import React, { useState } from 'react';
// import axios from 'axios';

// const TokenComponent = () => {
//   const [token, setToken] = useState(null);

//   const handleGetToken = async () => {
//     try {
//       const response = await axios.post('https://oauth2.googleapis.com/token', null, {
//         params: {
//           grant_type: 'password',
//           username: 'your_username',
//           password: 'your_password',
//           client_id: '248344551656-67177uvc5pubbf3rtkmr2l33os667h2m.apps.googleusercontent.com',
//           client_secret: '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'
//         }
//       });

//       const accessToken = response.data.access_token;
//       setToken(accessToken);
//     } catch (error) {
//       console.error('Error getting token:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleGetToken}>Get Token</button>
//       {token && <div>Access Token: {token}</div>}
//     </div>
//   );
// };

// export default TokenComponent;
