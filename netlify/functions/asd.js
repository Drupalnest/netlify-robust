
const { spawnSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const scriptPath = path.resolve(process.cwd(), 'netlify/functions/token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
    const keyFilePath = path.resolve(process.cwd(), 'netlify/functions/token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');

    console.log('Script Path:', scriptPath);
    console.log('Key File Path:', keyFilePath);

    const result = spawnSync('node', [scriptPath, '-v', '--keyfile', keyFilePath], {
      encoding: 'utf-8',
    });

    const { stdout, stderr } = result;

    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }

    const lines = stdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ accessToken }),
    };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
