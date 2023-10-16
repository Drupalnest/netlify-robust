


const { exec } = require('child_process');
const path = require('path'); 

exports.handler = function(event, context, callback) {
  const scriptPath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
  const keyFilePath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json');

  console.log('Script Path:', scriptPath);
  console.log('Key File Path:', keyFilePath);

  const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }

    const lines = stdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }

    return callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ accessToken })
    });
  });
};
