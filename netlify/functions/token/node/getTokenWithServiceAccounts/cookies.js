// const fs = require('fs');
// const cookie = require('cookie');

// // Function to read token from token.txt file
// const readTokenFromFile = () => {
//   try {
//     const token = fs.readFileSync('./token/node/getTokenWithServiceAccount/token.txt', 'utf8').trim();
//     return token;
//   } catch (error) {
//     console.error('Error reading token from file:', error);
//     return null;
//   }
// };

// // Function to set token in cookies
// const setTokenInCookies = (accessToken) => {
//   const cookieValue = cookie.serialize('BEARER_TOKEN', accessToken, {
//     httpOnly: true,
//     maxAge: 1000, // Set an appropriate expiration time in milliseconds
//     path: '/', // Set the path as per your application's requirements
//   });

//   // You would typically send the cookie with your response here
//   // For example, if using Express:
//   // res.setHeader('Set-Cookie', [cookieValue]);
// };

// // Example usage:
// const token = readTokenFromFile();
// if (token) {
//   setTokenInCookies(token);
//   console.log('Token set in cookies successfully.');
// } else {
//   console.error('No valid token found in the file.');
// }



const fs = require('fs');
const cookie = require('cookie');

const tokenFilePath = './token/node/getTokenWithServiceAccount/token.txt';

// Function to read token from token.txt file
const readTokenFromFile = () => {
  try {
    const token = fs.readFileSync(tokenFilePath, 'utf8').trim();
    return token;
  } catch (error) {
    console.error('Error reading token from file:', error);
    return null;
  }
};

// Function to set token in cookies
const setTokenInCookies = (accessToken) => {
  const cookieValue = cookie.serialize('BEARER_TOKEN', accessToken, {
    httpOnly: true,
    maxAge: 1000, // Set an appropriate expiration time in milliseconds
    path: '/', // Set the path as per your application's requirements
  });

  console.log('Cookie value:', cookieValue);
};

// Example usage:
const token = readTokenFromFile();
if (token) {
  setTokenInCookies(token);
  console.log('Token set in cookies successfully.');
} else {
  console.error('No valid token found in the file.');
}
