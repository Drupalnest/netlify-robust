// import Cookies from 'js-cookie';
// import token from "./token";

// const setInitialTokenInCookie = () => {
//     //set token
//   const initialToken = token;
  
//   Cookies.set('accessToken', initialToken);
// }

// export default setInitialTokenInCookie;
// Cookies.set('accessToken', accessToken);


// tokenHandler.js
// src/fetchAccessToken.js

import axios from 'axios';
import Cookies from 'js-cookie';

const fetchAccessToken = async () => {
  try {
    const response = await axios.get('https://imaginative-sprite-320f1b.netlify.app/.netlify/functions/retrieveToken');
    
    if (response.data && response.data.accessToken) {
      const accessToken = response.data.accessToken;
      Cookies.set('accessToken', accessToken);
      return accessToken;
    } else {
      console.error('Access token not found in API response:', response.data);
      return null;
    }

  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};


export default fetchAccessToken;
