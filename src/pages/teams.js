// import React, { useEffect } from "react";
// import Teams from "./[appGroup.name]/Teams";
// import cookie from 'js-cookie';

// const teams = () => {

//   let token = '';

//   useEffect(() => {
//     // Get the value of the 'BEARER_TOKEN' cookie
//     token = cookie.get('BEARER_TOKEN');
    
//     // Print the token to the console
//     console.log('BEARER_TOKEN inside useEffect:', token);
//   }, []); // This will run once when the component mounts

//   // You can now use 'token' outside of the useEffect
//   console.log('BEARER_TOKEN outside useEffect:', token);

 
//   return (
//     <div>
//       <Teams />
//     </div>
//   );
// };

// export default teams;


import React, { useEffect, useState } from "react";
import Teams from "./[appGroup.name]/Teams";
// import { getBearerToken } from "../../token/node/getTokenWithServiceAccount/scheduler.js"
import Cookies from "js-cookie";

const TeamsPage = () => {
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    const bearerToken = Cookies.get('accessToken');

    if (bearerToken === undefined && !refreshed) {
      setRefreshed(true);
      window.location.reload();
    }
  }, [refreshed]);

  return (
    <div>
      <Teams />
      {/* <p>Bearer Token: {token}</p> */}
    </div>
  );
};

export default TeamsPage;
