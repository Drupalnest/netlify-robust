// import React, { useState, useEffect } from "react";

// const Asd = () => {
//   const [accessToken, setAccessToken] = useState(process.env.BEARER_TOKEN);
//   const [refreshToken, setRefreshToken] = useState(process.env.BEARER_TOKEN);

//   const refreshAccessToken = async () => {
//     try {
//       const response = await fetch("YOUR_TOKEN_REFRESH_ENDPOINT", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${refreshToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setAccessToken(data.access_token);
//       } else {
//         console.error("Error refreshing access token");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     const expiryTimeout = setTimeout(refreshAccessToken, 25 * 60 * 1000);

//     return () => {
//       if (expiryTimeout) {
//         clearTimeout(expiryTimeout);
//       }
//     };
//   }, [refreshToken]);

//   return (
//     <div>
//       <h1>Your Gatsby App</h1>
//       <p>Access Token: {accessToken}</p>
//     </div>
//   );
// };

// export default Asd;

// import React, { useState, useEffect } from "react";
// import getAccessToken from "../../netlify/functions/getAccessToken";
// import MyToast from '../components/Toast/Error';
// import MyToaste from '../components/Toast/Success';

// const Asd = () => {
//   const [accessToken, setAccessToken] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       getAccessToken() // Call the function
//         .then((data) => {
//           console.log("Received access token:", data.accessToken);
//           setAccessToken(data.accessToken);
//         })
//         .catch((error) => console.error("Error:", error));
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   console.log("Current access token:", accessToken);

//   return (
//     <div>
//       <h1>Your Gatsby App</h1>
//       <p>Access Token: {accessToken}</p>

//       <p>{process.env.BEARER_TOKEN}</p>

//       <h1>Some Page</h1>
//       <MyToast message={"jkcsjkdcsdj"}/>
//       <MyToaste message={"error"}/>
//     </div>
//   );
// };

// export default Asd;









import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getAccessToken");
        const data = await response.json();
        setAccessToken(data.accessToken);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // Fetch data immediately when component mounts

    const interval = setInterval(fetchData, 60000); // Fetch data every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>Your Gatsby App App</h1>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default YourComponent;





// import React, { useState, useEffect } from 'react';
// import { exec } from 'child_process';

// const YourComponent = () => {
//   const [accessToken, setAccessToken] = useState('');

//   const getAccessToken = () => {
//     const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error: ${error.message}`);
//         return;
//       }
//       if (stderr) {
//         console.error(`Script stderr: ${stderr}`);
//         return;
//       }

//       const lines = stdout.split('\n');
//       const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
      
//       if (!accessTokenLine) {
//         console.error('No valid access_token found in the response.');
//         return;
//       }

//       const accessToken = accessTokenLine.split('"')[3];

//       if (!accessToken) {
//         console.error('No valid access_token found in the response.');
//         return;
//       }

//       setAccessToken(accessToken); // Update state with the token
//     });
//   };

//   useEffect(() => {
//     getAccessToken(); // Call the function initially

//     const interval = setInterval(() => {
//       getAccessToken(); // Call the function every minute
//     }, 60000);

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);

//   return (
//     <div>
//       <h1>Your Gatsby App</h1>
//       <p>Access Token: {accessToken}</p>
//     </div>
//   );
// };

// export default YourComponent;
