

// import axios from 'axios';
// import Cookies from 'js-cookie';

// const fetchAccessToken = async () => {

//   const tokenApi = process.env.REACT_APP_TOKEN_API;
//   try {
//     // Make a GET request to retrieve the access token
//     const response = await axios.get(tokenApi);
    
//     // Check if response contains an access token
//     if (response.data && response.data.accessToken) {
//       // Get the access token from the response
//       const accessToken = response.data.accessToken;
      
//       // Set the access token in a cookie
     
      
//       // Return the access token
//       return accessToken;
//     } else {
//       // Log an error if access token is not found in API response
//       console.error('Access token not found in API response:', response.data);
//       return null;
//     }

//   } catch (error) {
//     // Log an error if there's an issue fetching the access token
//     console.error('Error fetching access token:', error);
//     return null;
//   }
// };

// export default fetchAccessToken;



//Api

//REACT_APP_TOKEN_API=https://imaginative-sprite-320f1b.netlify.app/.netlify/functions/retrieveToken