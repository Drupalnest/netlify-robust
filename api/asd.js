// // api/getTokenWithServiceAccount.js
// const { exec } = require('child_process');

// module.exports = function (req, res) {
//   const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

//   exec(command, (error, stdout, stderr) => {
//     if (error || stderr) {
//       console.error(`Error: ${error || stderr}`);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     // Process the stdout if needed
//     console.log('Script Output:', stdout);

//     // Extract the access token using a regular expression
//     const accessTokenMatch = stdout.match(/"access_token":\s*"([^"]+)"/);
//     const accessToken = accessTokenMatch ? accessTokenMatch[1] : null;

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     const response = {
//       statusCode: 200,
//       body: JSON.stringify({ accessToken }),
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//     };

//     return res.status(200).json(response);
//   });
// };







// api/asd.js
module.exports = async (req, res) => {
  res.status(200).json({ message: 'Hello dr from the /api/asd/ endpoint!' });
};

  