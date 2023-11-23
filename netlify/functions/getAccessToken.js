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
//         'Access-Control-Allow-Origin': '*',
//       },
//     };

//     return callback(null, response);
//   });
// };



// netlify/functions/retrieveToken.js
const util = require('util');
const { exec } = require('child_process');

const executeCommand = async (file, args) => {
  const { stdout, stderr } = await util.promisify(exec)(`${file} ${args.join(' ')}`);

  if (stderr) {
    console.error(`Script stderr: ${stderr}`);
    throw new Error('Internal Server Error');
  }

  return stdout;
};

exports.handler = async function (event, context) {
  try {
    const scriptPath = './token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js';
    const keyFilePath = './token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

    const scriptStdout = await executeCommand('node', [scriptPath, '-v', '--keyfile', keyFilePath]);

    const lines = scriptStdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      throw new Error('Internal Server Error');
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      throw new Error('Internal Server Error');
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ accessToken }),
    };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error(error.stack); // Log the full stack trace
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
