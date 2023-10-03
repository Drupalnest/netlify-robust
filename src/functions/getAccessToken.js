const { exec } = require('child_process');

exports.handler = function (event, context, callback) {
  const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

  exec(command, (error, stdout, stderr) => {
    if (error || stderr) {
      console.error(`Error: ${error || stderr}`);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    }

    const lines = stdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({ accessToken }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    return callback(null, response);
  });
};
