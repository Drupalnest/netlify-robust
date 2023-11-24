// node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v  --keyfile ./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json



// const { exec } = require('child_process');

// exports.handler = function (event, context, callback) {
//   const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

//   exec(command, (error, stdout, stderr) => {
//     if (error || stderr) {
//       console.error(`Error: ${error || stderr}`);
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       });
//     }

//     // Process the stdout if needed
//     console.log('Script Output:', stdout);

//     // Extract the access token using a regular expression
//     const accessTokenMatch = stdout.match(/"access_token":\s*"([^"]+)"/);
//     const accessToken = accessTokenMatch ? accessTokenMatch[1] : null;

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
//         'Access-Control-Allow-Origin': '*',
//       },
//     };

//     return callback(null, response);
//   });
// };





const { exec } = require('child_process');

exports.handler = function (event, context, callback) {
  const keyfilePath = './token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

  const command = `node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ${keyfilePath}`;

  exec(command, (error, stdout) => {
    if (error) {
      console.error(`Error: ${error}`);
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({ output: stdout || '', error: error ? 'Script Execution Error' : null }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    return callback(null, response);
  });
};
