// // netlify-functions/getAccessToken.js

// const { exec } = require('child_process');

// exports.handler = function (event, context, callback) {
//   const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

//   exec(command, (error, stdout, stderr) => {
//     if (error || stderr) {
//       console.error(`Error: ${error || stderr}`);
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       });
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       });
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       });
//     }

//     return callback(null, {
//       statusCode: 200,
//       body: JSON.stringify({ accessToken }),
//     });
//   });
// };




// const { exec } = require('child_process');

// exports.handler = function (event, context, callback) {
//   // Function to fetch a new access token
//   const fetchNewAccessToken = () => {
//     const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

//     exec(command, (error, stdout, stderr) => {
//       if (error || stderr) {
//         console.error(`Error: ${error || stderr}`);
//         return callback(null, {
//           statusCode: 500,
//           body: JSON.stringify({ error: 'Internal Server Error' }),
//         });
//       }

//       const lines = stdout.split('\n');
//       const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//       if (!accessTokenLine) {
//         console.error('No valid access_token found in the response.');
//         return callback(null, {
//           statusCode: 500,
//           body: JSON.stringify({ error: 'Internal Server Error' }),
//         });
//       }

//       const accessToken = accessTokenLine.split('"')[3];

//       if (!accessToken) {
//         console.error('No valid access_token found in the response.');
//         return callback(null, {
//           statusCode: 500,
//           body: JSON.stringify({ error: 'Internal Server Error' }),
//         });
//       }

//       // Set the access token as a cookie with Max-Age of 60 seconds
//       const response = {
//         statusCode: 200,
//         body: JSON.stringify({ accessToken }),
//         headers: {
//           'Set-Cookie': `access_token=${accessToken}; Max-Age=60; HttpOnly; Secure; SameSite=None`, // Max-Age set to 60 seconds
//         },
//       };

//       return callback(null, response);
//     });
//   };

//   // Call fetchNewAccessToken to get a new access token
//   fetchNewAccessToken();
// };


// const { exec } = require('child_process');

// exports.handler = function (event, context, callback) {
//   const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

//   exec(command, (error, stdout, stderr) => {
//     if (error || stderr) {
//       console.error(`Error: ${error || stderr}`);
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       });
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       });
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       });
//     }

//     const response = {
//       statusCode: 200,
//       body: JSON.stringify({ accessToken }),
//       headers: {
//         'Set-Cookie': `access_token=${accessToken}; Max-Age=60; HttpOnly; Secure; SameSite=None`,
//       },
//     };

//     return callback(null, response);
//   });
// };
