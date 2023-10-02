import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const YourComponent = () => {
  //   const [bearerToken, setBearerToken] = useState(null);

  //   useEffect(() => {
  //     const fetchToken = async () => {
  //       try {
  //         const response = await fetch("http://localhost:5000/getAccessToken");
  //         const data = await response.json();
  //         const accessToken = data.accessToken;
  //         setBearerToken(accessToken);
  //       } catch (error) {
  //         console.error("Error fetching access token:", error);
  //       }
  //     };

  //     // Call fetchToken when the component mounts
  //     fetchToken();
  //   }, []); // Empty dependency array means this effect runs once on mount
  useEffect(() => {
    const token = Cookies.get("tokenn");
    console.log("token", token);
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>{/* <p>Bearer Token: {bearerToken}</p> */}</div>;
};

export default YourComponent;
