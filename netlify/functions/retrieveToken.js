// netlify/functions/retrieveToken.js

const axios = require('axios');
const { exec } = require('child_process');
const fs = require('fs');
const cron = require('node-cron');

const TOKEN_FILE_PATH = './token.js';
const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

let scheduled = false;

const getTokenFromCommand = () => {
  return new Promise((resolve, reject) => {
    console.log('Before exec command');

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(new Error(`Script stderr: ${stderr}`));
        return;
      }

      const lines = stdout.split('\n');
      const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

      if (!accessTokenLine) {
        reject(new Error('No valid access_token found in the response.'));
        return;
      }

      const accessToken = accessTokenLine.split('"')[3];

      if (!accessToken) {
        reject(new Error('No valid access_token found in the response.'));
        return;
      }

      const tokenContent = `const token = "${accessToken}";\n\nmodule.exports = token;`;
      fs.writeFile(TOKEN_FILE_PATH, tokenContent, { flag: 'w' }, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log(`Token obtained and stored successfully.`);
          resolve(accessToken);
        }
      });
    });
  });
}

const retrieveToken = async () => {
  try {
    const token = await getTokenFromCommand();

    if (scheduled) {
      scheduled = false;
      cron.cancelJob('retrieveTokenJob');
    }

    const retrieveTokenJob = cron.schedule('*/1 * * * *', retrieveToken, { scheduled: 'retrieveTokenJob' });

  } catch (error) {
    console.error('Error:', error);
  }
};

// Add the function for serverless execution
exports.handler = async function(event, context) {
  try {
    const token = await getTokenFromCommand();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Token retrieved successfully' })
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
}