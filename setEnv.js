// // This part of the code should be in a different file, separate from the access token fetching.
// // For example, in a Gatsby server-side function.

// // This code sets the environment variable and optionally writes to a .env file.
// const fs = require('fs');

// const setBearerToken = (accessToken) => {
//   try {
//     process.env.BEARER_TOKEN = accessToken;

//     // Optional: Write the access token to a .env file
//     fs.writeFileSync('.env', `BEARER_TOKEN=${accessToken}`);
//   } catch (error) {
//     console.error('Error setting Bearer Token:', error);
//   }
// };

// module.exports = setBearerToken;

//server
